// type이 필요한 상황 : 변수 , 함수 인자 , 함수 리턴값 ,
// 유저 정보 (전적정보)
// 유저의 정보를 가져다가 사용하기만 하면 됨

export const API_LOADING_SUCCESS = "API_LOADING_SUCCESS";
export const API_LOADING_FAIL = "API_LOADING_FAIL";

export interface userInfo {
    name: string | null,
    iconImg: string | null,
    tier: string | null,
    tierImg: string | null,
    tierPoint: string | null,
    winLose: string | null,
    rate: string | null,
}

type gameStatus = {
    mode: string | null,
    playTime: string | null,
    result: string | null,
}

type champInfo = {
    chmapName: string | null,
    champImg: string | null,
}

type gameScore = {
    kill: string | null,
    death: string | null,
    assist: string | null,
    kdaRate: string | null,
}

type gameStat = {
    level: string | null,
    cs: string | null,
    ckRate: string | null,
}

type teamInfo = {
    my: string[] | null,
    enemy: string[] | null,
}

export interface gameInfo {
    status: gameStatus,
    chmap: champInfo,
    score: gameScore,
    stat: gameStat,
    team: teamInfo,
}

//=================================== Action Type

export type apiLoadingSuccess = {
    type: typeof API_LOADING_SUCCESS,
    userState: userInfo,
    gameState: gameInfo[],
}

export interface apiLoadingFail {
    type: typeof API_LOADING_FAIL,
    error: any,
}

export type searchDispatchType = apiLoadingSuccess | apiLoadingFail;