import React from 'react'
import { AllGameList, GameItem } from "./styles"

import { useDispatch, useSelector } from "react-redux";
import { ReducerType } from "../../store";


const GameList = () => {

    const gameList = useSelector((state: ReducerType) => state.gameList);

    console.log(gameList);

    return (
        <AllGameList>
            {gameList?.map(item => {
                return <GameItem win={item.status.result === "승리" ? true : false} >
                    <div className="gamestats">
                        <strong className="gametype">솔로 랭크</strong>
                        <strong className="gameresult">{item.status.result}</strong>
                        <div className="bar"></div>
                        <span className="timestamp">{item.status.playTime}</span>
                    </div>
                    <div className="champinfo">
                        <img src={item.chmap.champImg || ""} alt="챔피언 이미지" />
                        <figcaption>{item.chmap.chmapName}</figcaption>
                    </div>
                    <div className="kda">
                        <div className="kdascore">
                            <span className="kill">{item.score.kill}</span>
                            <span className="death">{item.score.death}</span>
                            <span className="assist">{item.score.assist}</span>
                        </div>
                        <span className="kdarate">{item.score.kdaRate} 평점</span>
                    </div>
                    <div className="stats">
                        <span className="level">레벨 {item.stat.level}</span>
                        <span className="cs">{item.stat.cs} CS</span>
                        <strong className="ckrate">킬관여 {item.stat.ckRate}</strong>
                    </div>
                    <div className="follow-player">
                        <div className="my">
                            {item.team.my !== null && item.team.my.map(member => {
                                return <span>{member}</span>
                            })}
                        </div>
                        <div className="enemy">
                            {item.team.enemy !== null && item.team.enemy.map(member => {
                                return <span>{member}</span>
                            })}
                        </div>
                    </div>
                </GameItem>
            })
            }
        </AllGameList>
    )
}

export default GameList
