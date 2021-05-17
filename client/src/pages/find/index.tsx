import React from 'react';
import GameList from '../../layouts/GameList';
import UserStat from '../../layouts/UserStat';

import { Section } from "./styles";

import { useSelector } from "react-redux";
import { ReducerType } from "../../store";
import Loading from '../../components/Loading';



function Find() {

    const success = useSelector((state: ReducerType) => state.success);

    return (
        <Section>
            {success &&
                <>
                    <UserStat />
                    <GameList key="key" />
                </>
            }
        </Section >
    )
}

export default Find
