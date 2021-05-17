import axios from "axios";
import cheerio from "cheerio";


export const searchUser = async (name: string) => {

    const data = await axios.post("/api/data", { name })
        .then((res) => {
            return res.data;
        })
        .catch(err => console.error(err));

    if (data) {
        const $ = cheerio.load(data);
        return $;

    } else {
        console.error("페이지를 읽어오지 못했습니다.");
    }

}

export const updatePvP = async () => {


    // const data = await axios.post("/api/data", { name: "엔터키좀빼고하자" })
    //     .then((res) => {
    //         return res.data;
    //     })
    //     .catch(err => console.error(err));

    // if (data) {
    //     const $ = cheerio.load(data);
    //     return $;

    // } else {
    //     console.error("페이지를 읽어오지 못했습니다.");
    // }
    // if (!clicked) {
    //     return;
    // }

    // let browser: puppeteer.Browser | undefined;
    // let page: puppeteer.Page | undefined;

    // debugger;

    // browser = await puppeteer.launch({
    //     defaultViewport: { width: 500, height: 300 }, // 브라우저 사이즈 정한다.
    //     headless: false,
    // });
    // page = await browser.newPage();
    // browser.close();

    // await page.goto('summoner/userName=dd');
    // // await page.screenshot({path: 'example.png'});
    // await browser.close();

    // // 크롬 인스턴스에 연결하여 브라우저를 생성한다.
    // const browser = await puppeteer.launch({
    //     defaultViewport: { width: 500, height: 300 }, // 브라우저 사이즈 정한다.
    //     // timeout : 30000	// 브라우저 인스턴스가 시작될 때까지 대기하는 시간(밀리 초)
    // });
    // // 브라우저에 페이지를 생성한다.
    // const page = await browser.newPage();

    // // 페이지 이동
    // await page.goto('http://example.com');
    // // 스크린 샷
    // await page.screenshot({ path: 'example.png' });

    // // PDF
    // // await page.goto('https://news.ycombinator.com', {waitUntil: 'networkidle2'});
    // // await page.pdf({path: 'hn.pdf', format: 'A4'});

    // // 페이지의 사이즈의 정보를 가져온다.
    // const dimensions = await page.evaluate(() => {
    //     return {
    //         width: document.documentElement.clientWidth,
    //         height: document.documentElement.clientHeight,
    //         deviceScaleFactor: window.devicePixelRatio
    //     }
    // });

    // console.log('Dimensions : ', dimensions);
    // await browser.close();

    // cypress.visit("/");



    // describe("Button component", () => {
    //     it("Matches the snapshot", () => {
    //         mount(``);
    //     });
    // });

    // describe('TodoList', () => {
    //     it('renders the todo list', () => {
    //         mount(``);
    //         cy.get('[data-testid=todo-list]').should('exist')
    //     })
    // })







    // let options = webdriver.chro;
    // options.add_argument('headless')
    // options.add_argument('window-size=1920x1080')
    // options.add_argument("disable-gpu")

    // let driver = new Builder().withCapabilities(webdriver.Capabilities.chrome()).build();
    // // var driver = new Builder().forBrowser('chrome').build();
    // let url = "https://www.google.com/";
    // driver.get(url);
    // console.log(driver);
    // driver.quit()

    // await driver.get('summoner/userName=엔터키')
    //     .then((response) => console.log(response))
    //     .catch(err => console.error(err))
    //     .finally(() => driver.quit());

    // debugger;

    // let driver: WebDriver = new Builder().forBrowser('firefox').build();

    // try {
    //     await driver.get('https://www.naver.com/');
    // }
    // finally {
    //     driver.quit();
    // };


};