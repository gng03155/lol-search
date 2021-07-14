import React from 'react'
import { Loader } from 'semantic-ui-react';

import styled from "styled-components"

const Wrap = styled.div`

    &&{
        width : 100%;
        height : calc(100vh - 400px);
        margin : 0;
        border : 0;
        border-radius : 0;
    }

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
