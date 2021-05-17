import { userInfo, gameInfo, searchDispatchType, API_LOADING_SUCCESS, API_LOADING_FAIL, SET_INIT_STATE } from "../type/actiontype"
import { Dispatch } from "redux"
import { searchUser } from "../api/search";

export const setInitState = (): searchDispatchType => {
    return {
        type: SET_INIT_STATE,
    }
}

export const searchDispatch = (name: string) => {
    return async (dispatch: Dispatch<searchDispatchType>) => {
        const $ = await searchUser(name);
        // console.log($(".Header").find(".Information > span").text());
        if (!$) {
            return false;
        }
        if ($(".Header").find(".Information > span").text() === "") {
            dispatch({
                type: API_LOADING_FAIL,
                error: "아이디 없음",
            })

            // return new Promise((resolve, reject) => { resolve(false) });
            return false;
        }

        const user = settingUserInfo($);
        const allGame = settingGameInfo($);

        dispatch({
            type: API_LOADING_SUCCESS,
            userState: user,
            gameState: allGame,
        })

        // return new Promise((resolve, reject) => { resolve(true) });
        return true;
    }
}

const settingUserInfo = ($: any) => {

    let user: userInfo = {
        name: $(".Header").find(".Information > span").text(),
        iconImg: $(".Header").find(".ProfileImage").attr("src"),
        level: $(".Header").find(".ProfileIcon > span").text(),
        tier: $(".TierBox").find(".TierRank ").text(),
        tierImg: $(".TierBox").find(".Image").attr("src"),
        tierPoint: $(".TierBox").find(".LeaguePoints")?.text().trim(),
        winLose: $(".TierBox").find(".WinLose > .wins")?.text() + $(".TierBox").find(".WinLose > .losses").text(),
        rate: $(".TierBox").find(".WinLose > .winratio")?.text(),
    };

    return user;
}

const settingGameInfo = ($: any) => {

    let gameList: any = [];

    //게임정보
    let body = $(".GameItemList > div").toArray();
    body.forEach((elem: any) => {

        let gameInfo: gameInfo = {
            status: {
                mode: null,
                playTime: null,
                result: null,
            },
            chmap: {
                chmapName: null,
                champImg: null,
            },
            score: {
                kill: null,
                death: null,
                assist: null,
                kdaRate: null,
            },
            stat: {
                level: null,
                cs: null,
                ckRate: null,
            },
            team: {
                my: [],
                enemy: [],
            }
        };



        gameInfo.status.mode = $(elem).find(".GameType").text().trim();
        gameInfo.status.playTime = $(elem).find(".GameLength").text();
        gameInfo.status.result = $(elem).find(".GameResult").text().trim();

        gameInfo.chmap.chmapName = $(elem).find(".ChampionName > a").text();
        gameInfo.chmap.champImg = $(elem).find(".ChampionImage img").attr("src");

        gameInfo.score.kill = $(elem).find(".KDA > .Kill").text();
        gameInfo.score.death = $(elem).find(".KDA > .Death").text();
        gameInfo.score.assist = $(elem).find(".KDA > .Assist").text();
        gameInfo.score.kdaRate = $(elem).find(".KDARatio > span").text();

        gameInfo.stat.level = $(elem).find(".Stats > .Level").text().trim();
        gameInfo.stat.cs = $(elem).find(".Stats span.CS").text().trim();
        gameInfo.stat.ckRate = $(elem).find(".Stats > .CKRate").text().trim();

        let teamList = $(elem).find(".Team > div").toArray();

        let myTeam: string[] = [];
        let enemTeam: string[] = [];

        teamList.map((div: any, i: any) => {
            if (i < 5) {
                myTeam.push($(div).find(".SummonerName > a").text());
            } else {
                enemTeam.push($(div).find(".SummonerName > a").text());
            }

        })

        gameInfo.team.my = myTeam;
        gameInfo.team.enemy = enemTeam;


        gameList.push(gameInfo);


    });

    return gameList;
}