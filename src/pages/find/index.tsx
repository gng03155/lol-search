import React, { useState, useCallback, useEffect } from 'react';
import GameList from '../../layouts/GameList';
import UserStat from '../../layouts/UserStat';

function Find() {

    return (
        <>
            <UserStat />
            <GameList />
        </>
    )
}

export default Find
