import React, { useState, useCallback } from 'react';
import { Header, Form } from "./styles";

import { useDispatch, useSelector } from "react-redux";

import { searchDispatch } from '../../Action/searchAction';

import { useHistory } from "react-router-dom";

import { ReducerType } from "../../store";

const Head: React.FC = () => {

    // const success = useSelector((state: ReducerType) => state.success);
    const history = useHistory();
    const dispatch = useDispatch();
    const [userName, setUserName] = useState("");

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
        [],
    )

    const onSearchUserName = useCallback(
        async (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();

            const success: any = await dispatch(searchDispatch(userName));

            if (success === true) {
                history.push("/find");
            }
            else {
                alert("찾는 아이디가 없습니다!!");
            }



        },
        [userName, history, dispatch]);

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
        </div>
    )
}

export default Head
