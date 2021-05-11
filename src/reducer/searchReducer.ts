// import userEvent from '@testing-library/user-event';
import { API_LOADING_SUCCESS, API_LOADING_FAIL, userInfo, gameInfo, searchDispatchType } from "../type/actiontype";

export interface InitialState {
    loading: boolean,
    userName: string,
    user?: userInfo,
    gameList?: gameInfo[],
}

const initialState: InitialState = {
    loading: false,
    userName: "",
}

export const searchReducer = (state = initialState, action: searchDispatchType): InitialState => {
    switch (action.type) {
        case API_LOADING_SUCCESS:
            console.log(action.gameState);
            console.log(action.userState);
            return {
                ...state,
                user: action.userState, gameList: action.gameState, loading: true,
            };
        case API_LOADING_FAIL:
            return { ...state, loading: false, };
        default:
            return { ...state };
    }
}

