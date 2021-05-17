import React from 'react'
import { UserStatus, User, Tier } from "./styles";

import { useDispatch, useSelector } from "react-redux";
import { ReducerType } from "../../store";

function UserStat() {


    const user = useSelector((state: ReducerType) => state.user);

    return (
        <UserStatus>
            <User>
                <img src={user?.iconImg || ""} alt="아이콘 이미지" />
                <div className="userinfo">
                    <span>{user?.name}</span>
                    <span>레벨 : {user?.level}</span>
                </div>
            </User>
            <Tier>
                <img src={user?.tierImg || ""} alt="티어 아이콘 이미지" />
                <div className="tierinfo">
                    <p>솔로랭크</p>
                    <p className="tier">{user?.tier}</p>
                    <p>{user?.tierPoint !== null ? user?.tierPoint : "전적없음"}</p>
                    <p>{user?.winLose !== null ? user?.winLose : "전적없음"}</p>
                    <p>{user?.rate !== null ? user?.rate : "전적없음"}</p>
                </div>
            </Tier>
        </UserStatus>
    )
}

export default UserStat;
