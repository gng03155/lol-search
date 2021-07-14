import React from 'react';
import GameList from '../../components/GameList';
import UserStat from '../../components/UserStat';

import { Section } from "./styles";

import { useSelector } from "react-redux";
import { ReducerType } from "../../store";



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
