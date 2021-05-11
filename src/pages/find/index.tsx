import React, { useState, useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux"

import { searchUser } from "../../api/search";

import { searchDispatch } from "../../Action/searchAction";

function Find() {

    const dispatch = useDispatch();

    useEffect(
        () => {
            dispatch(searchDispatch("엔터키좀빼고하자"));
        },
        []);

    return (
        <div>

        </div>
    )
}

export default Find
