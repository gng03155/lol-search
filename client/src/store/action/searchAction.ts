import { userInfo, GameInfo, searchDispatchType, API_LOADING_SUCCESS, API_LOADING_FAIL, SET_INIT_STATE, testType } from "../type/actiontype"
import { Dispatch } from "redux"
import { searchUser } from "../../api/search";
import { CheerioAPI } from 'cheerio';


export const setInitState = (): searchDispatchType => {
    return {
        type: SET_INIT_STATE,
    }
}

export const searchDispatch = (name: string) => {
    return async (dispatch: Dispatch<searchDispatchType>) => {
        const $: CheerioAPI | undefined = await searchUser(name);
        if ($ === undefined) {
            return false;
        }

        if ($(".Header").find(".Information > span").text() === "") {
            dispatch({
                type: API_LOADING_FAIL,
                error: "아이디 없음",
            })

            return false;
        }

        const user = settingUserInfo($);
        const allGame = settingGameInfo($);

        dispatch({
            type: API_LOADING_SUCCESS,
            userState: user,
            gameState: allGame,
        })

        return true;
    }
}

const settingUserInfo = ($: CheerioAPI) => {

    let user: userInfo = {
        name: $(".Header").find(".Information > span").text(),
        iconImg: String($(".Header").find(".ProfileImage").attr("src")),
        level: $(".Header").find(".ProfileIcon > span").text(),
        tier: $(".TierBox").find(".TierRank ").text(),
        tierImg: String($(".TierBox").find(".Image").attr("src")),
        tierPoint: $(".TierBox").find(".LeaguePoints")?.text().trim(),
        winLose: $(".TierBox").find(".WinLose > .wins")?.text() + $(".TierBox").find(".WinLose > .losses").text(),
        rate: $(".TierBox").find(".WinLose > .winratio")?.text(),
    };

    return user;
}

const settingGameInfo = ($: CheerioAPI) => {

    let gameList: GameInfo[] = [];

    //게임정보
    let body = $(".GameItemList > div").toArray();
    body.forEach((elem) => {

        // let gameInfo: testType = {};

        // const aa : testType = {};

        // aa.status = {mode : "" , playTime : "", result : ""};

        const status = {
            mode: $(elem).find(".GameType").text().trim(),
            playTime: $(elem).find(".GameLength").text(),
            result: $(elem).find(".GameResult").text().trim(),
        }

        const champ = {
            champName: $(elem).find(".ChampionName > a").text(),
            champImg: String($(elem).find(".ChampionImage img").attr("src")),
        }

        const score = {
            kill: $(elem).find(".KDA > .Kill").text(),
            death: $(elem).find(".KDA > .Death").text(),
            assist: $(elem).find(".KDA > .Assist").text(),
            kdaRate: $(elem).find(".KDARatio > span").text(),
        }

        const stat = {
            level: $(elem).find(".Stats > .Level").text().trim(),
            cs: $(elem).find(".Stats span.CS").text().trim(),
            ckRate: $(elem).find(".Stats > .CKRate").text().trim(),
        }

        let teamList = $(elem).find(".Team > div").toArray();

        let myTeam: string[] = [];
        let enemTeam: string[] = [];

        teamList.forEach((div, i) => {
            if (i < 5) {
                myTeam.push($(div).find(".SummonerName > a").text());
            } else {
                enemTeam.push($(div).find(".SummonerName > a").text());
            }

        })

        const team = {
            my: myTeam,
            enemy: enemTeam,
        }

        const gameInfo = {
            status,
            champ,
            score,
            stat,
            team,
        }

        if (gameInfo !== undefined) {
            gameList.push(gameInfo);
        }

    });

    return gameList;
}