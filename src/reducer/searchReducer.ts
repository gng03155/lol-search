// import userEvent from '@testing-library/user-event';
import { API_LOADING_SUCCESS, API_LOADING_FAIL, userInfo, gameInfo, searchDispatchType } from "../type/actiontype";


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
            console.log(action.gameState);
            console.log(action.userState);
            return {
                ...state,
                user: action.userState, gameList: action.gameState, success: true,
            };
        case API_LOADING_FAIL:
            return { ...state, success: false, };
        default:
            return { ...state };
    }
}

