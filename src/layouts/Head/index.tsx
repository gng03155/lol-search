import React, { useState, useCallback } from 'react'
import { Header, Form } from "./styles";

const Head: React.FC = () => {



    return (
        <div>
            <Header>
                <h2>롤 전적 검색</h2>
                <Form action="">
                    <input className="input-text" type="text" placeholder="소환사명 ..." />
                    <input className="input-search" type="submit" />
                </Form>
            </Header>
        </div>
    )
}

export default Head
