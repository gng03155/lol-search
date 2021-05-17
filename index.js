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

    const name = req.body.name;

    console.time("test");

    const data = await openBrowser(name);

    console.timeEnd("test");


    res.json(data);
});

async function openBrowser(name) {

    // 브라우저 실행 및 옵션, 현재 옵션은 headless 모드 사용 여부
    const browser = await puppeteer.launch({ headless: false });
    // const browser = await puppeteer.launch({ headless: true });

    // 브라우저 열기
    const page = await browser.newPage();

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

    page.on('dialog', async dialog => {
        console.log(dialog.message());
        await dialog.dismiss();
    });


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
        await page.waitForSelector(".Buttons > button.Green");
    }


    for (let i = 0; i < 3; i++) {
        await page.waitForSelector(".GameMoreButton > a", { timeout: 2000 })
            .then(async () => {
                let elem = await page.$(`.GameMoreButton > a[disabled]`);
                if (elem === null) {
                    await page.click(".GameMoreButton > a");
                }
                else {
                    i--;
                }
            })
            .catch(() => { return; });
    }

    const content = await page.content();

    browser.close();

    return content;
}


console.log(`server running at http ${port}`);
