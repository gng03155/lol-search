// import userEvent from '@testing-library/user-event';
import { API_LOADING_SUCCESS, API_LOADING_FAIL, SET_INIT_STATE, userInfo, gameInfo, searchDispatchType } from "../type/actiontype";


export interface InitialState {
    success: boolean,
    userName: string,
    user?: userInfo,
    gameList?: gameInfo[],
}

const initialState: InitialState = {
    success: false,
    userName: "",
}

export const searchReducer = (state = initialState, action: searchDispatchType): InitialState => {
    switch (action.type) {
        case API_LOADING_SUCCESS:
            return {
                ...state,
                user: action.userState, gameList: action.gameState, success: true,
            };
        case API_LOADING_FAIL:
            return { ...state, success: false, };
        case SET_INIT_STATE:
            return { ...state, success: false };
        default:
            return { ...state };
    }
}

