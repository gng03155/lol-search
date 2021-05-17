import React, { useState, useCallback } from 'react';
import { Header, Form } from "./styles";

import { useDispatch } from "react-redux";

import { Dispatch } from "redux"

import { searchDispatch, setInitState } from '../../action/searchAction';

import { useHistory, useLocation } from "react-router-dom";


import Loading from '../../components/Loading';

import { searchDispatchType } from "../../type/actiontype"


const Head: React.FC = () => {

    // const success = useSelector((state: ReducerType) => state.success);
    const history = useHistory();
    const location = useLocation();
    const dispatch = useDispatch();
    const [userName, setUserName] = useState("");
    const [loading, setLoading] = useState(false);

    const handleUserName = useCallback(
        (event: React.ChangeEvent<HTMLInputElement>) => {
            setUserName(event.target.value);
        },
        []);

    const onClickLogo = useCallback(
        (event) => {
            event.preventDefault();
            history.push("/");
        },
        [history]
    )

    const onSearchUserName = useCallback(
        async (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();

            setLoading(true);

            dispatch(setInitState());

            // await dispatch(searchDispatch(userName));

            const tt: Boolean | ((dispatch: Dispatch<searchDispatchType>) => Promise<boolean>) = await dispatch(searchDispatch(userName));

            if (typeof tt === "boolean" && tt) {
                if (location.pathname !== "/find") history.push("/find");
            }
            else {
                alert("찾는 아이디가 없습니다!!");
            }

            setLoading(false);

        },
        [userName, history, dispatch, location]);

    return (
        <div>
            <Header>
                <div className="logo" onClick={(e) => onClickLogo(e)}>
                    <img src="https://opgg-static.akamaized.net/logo/20210507150154.f243e79f6e0345779cbd9f556ba99fd0.png" alt="로고 이미지" />
                </div>
                <Form onSubmit={(e) => onSearchUserName(e)}>
                    <input
                        className="input-text" type="text" placeholder="소환사명 ..." value={userName}
                        onChange={(e) => handleUserName(e)}
                    />
                    <button className="btn-search" type="submit" value="" >
                        <i className="search-icon"></i>
                    </button>
                </Form>
            </Header>
            {loading && <Loading />}
        </div>
    )
}

export default Head
