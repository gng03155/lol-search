// express 모듈 불러오기
const express = require('express');

// express 객체 생성
const app = express();

const puppeteer = require('puppeteer');

const dotenv = require("dotenv");
dotenv.config();

// 기본 포트를 app 객체에 설정
const port = process.env.PORT || 5000;

app.listen(port);

app.use(express.json());

// 미들웨어 함수를 특정 경로에 등록
app.use('/api/data', async (req, res) => {


    (async () => {
        const name = req.body.name;

        console.time("test");

        const data = await openBrowser(name);

        console.timeEnd("test");


        res.json(data);
    })().finally(() => {
        console.log("여긴들어오겠지?");
    });
});

// path 모듈 불러오기
const path = require('path');

// 리액트 정적 파일 제공
app.use(express.static(path.join(__dirname, 'client/build')));

// 라우트 설정
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

async function openBrowser(name) {
    console.log("들어옴?");
    // 브라우저 실행 (창 크기 , 브라우저 오픈등 다양한 옵션 설정 가능) 
    const browser = await puppeteer.launch({ headless: true });


    browser.on('disconnected', async () => {
        console.log("BROWSER CRASH")
    });

    // 브라우저 열기
    const page = await browser.newPage();


    // css , 폰트 , 이미지 사용안함 처리 (크롤링 속도)
    await page.setRequestInterception(true);
    page.on('request', (req) => {
        switch (req.resourceType()) {
            case 'stylesheet':
            case 'font':
            case 'image':
                req.abort();
                break;
            default:
                req.continue();
                break;
        }
    });

    // alert , Prompt 창뜨면 확인처리
    page.on('dialog', async dialog => {
        console.log(dialog.message());
        await dialog.dismiss();
    });

    //페이지 접속
    await page.goto(`https://www.op.gg/summoner/userName=${name}`);



    // // 포탈로 이동
    // await page.goto("https://www.op.gg/");


    // //아이디 입력
    // await page.type("input[class='summoner-search-form__text _suggest']", name);

    // //검색
    // await page.click(".summoner-search-form__button");

    await page.waitForSelector("body");

    const existed = await page.waitForSelector("div.SummonerNotFoundLayout", { timeout: 100 }).then(() => false)
        .catch(() => true);

    if (!existed) {
        const content = await page.content();

        browser.close();

        return content;
    }

    //전적갱신 버튼
    const recordUpdated = await page.waitForSelector("#SummonerRefreshButton", { timeout: 1000 })
        .then(async () => { await page.click("#SummonerRefreshButton"); return true; })
        .catch(() => {
            console.log("전적갱신 버튼이 없습니다!");
            return false;
        });

    if (recordUpdated) {
        await page.waitForSelector(".Buttons > button.Green").catch(() => { console.log("2") });
    }


    for (let i = 0; i < 3; i++) {
        await page.waitForSelector(".GameMoreButton > a", { timeout: 2000 })
            .then(async () => {
                const elem = await page.$(`.GameMoreButton > a[disabled]`);
                if (elem === null) {
                    await page.click(".GameMoreButton > a");
                }
                else {
                    i--;
                }
            })
            .catch(() => { console.log("1") });
    }

    const content = await page.content();

    browser.close();

    return content;
}

console.log(`server running at http ${port}`);
