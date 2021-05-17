import React from 'react'
import { Loader } from 'semantic-ui-react';

import styled from "styled-components"

const Wrap = styled.div`

    width : 100vw;
    height : 300px;
    margin : 0 !important;
    border : 0 !important;
    border-radius : 0 !important;

`


export default function Loading() {
    return (
        <Wrap className="ui segment">
            <div className="ui active dimmer">
                <Loader>Loading</Loader>
            </div>
            <p></p>
        </Wrap>
    )
}



export { }