import React from 'react'
import { AllGameList, GameItem } from "./styles"
import { useState, useEffect, useRef, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ReducerType } from "../../store";

const GameList = () => {

    const gameList = useSelector((state: ReducerType) => state.gameList);

    const MAX_COUNT = gameList?.length;

    const [count, setCount] = useState<number | undefined>(() => {
        if (MAX_COUNT && MAX_COUNT <= 20) {
            return MAX_COUNT;
        } else {
            return 20;
        }
    });

    const divRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, [])

    const handleScroll = useCallback(
        () => {
            const screenHeight = window.innerHeight;
            const scrollTop = document.documentElement.scrollTop;
            const clientHeight: Number | undefined = divRef.current ? divRef.current?.clientHeight + divRef.current?.offsetTop - 30 : undefined;

            if (clientHeight && scrollTop + screenHeight >= clientHeight) {
                setCount((cnt) => {
                    if (cnt && cnt !== MAX_COUNT) {
                        if (MAX_COUNT && cnt + 20 > MAX_COUNT) {
                            return cnt;
                        }
                        return cnt + 20;
                    } else {
                        return cnt;
                    }
                });
            }

        },
        [])

    const set = () => {
        if (gameList === undefined || count === undefined) {
            return;
        }

        const games = [];

        for (let i = 0; i < count; i++) {
            games[i] =
                <GameItem key={i} win={gameList[i].status.result === "승리" ? true : false}  >
                    <div className="gamestats">
                        <strong className="gametype">{gameList[i].status.mode}</strong>
                        <strong className="gameresult">{gameList[i].status.result}</strong>
                        <div className="bar"></div>
                        <span className="timestamp">{gameList[i].status.playTime}</span>
                    </div>
                    <div className="champinfo">
                        <img src={gameList[i].chmap.champImg || ""} alt="챔피언 이미지" />
                        <figcaption>{gameList[i].chmap.chmapName}</figcaption>
                    </div>
                    <div className="kda">
                        <div className="kdascore">
                            <span className="kill">{gameList[i].score.kill}</span>
                            <span className="death">{gameList[i].score.death}</span>
                            <span className="assist">{gameList[i].score.assist}</span>
                        </div>
                        <span className="kdarate">{gameList[i].score.kdaRate} 평점</span>
                    </div>
                    <div className="stats">
                        <span className="level">레벨 {gameList[i].stat.level}</span>
                        <span className="cs">{gameList[i].stat.cs} CS</span>
                        <strong className="ckrate">{gameList[i].stat.ckRate}</strong>
                    </div>
                    <div className="follow-player">
                        <div className="my">
                            {gameList[i].team !== null && gameList[i].team.my?.map((member, index) => {
                                return <span key={index}>{member}</span>
                            })}
                        </div>
                        <div className="enemy">
                            {gameList[i].team.enemy !== null && gameList[i].team.enemy?.map((member, index) => {
                                return <span key={index}>{member}</span>
                            })}
                        </div>
                    </div>
                </GameItem>
        }

        return games;
    }

    return (
        <AllGameList ref={divRef}>
            {set()}

            {/* {gameList?.map((item, index) => {
                return <GameItem key={index} win={item.status.result === "승리" ? true : false}  >
                    <div className="gamestats">
                        <strong className="gametype">{item.status.mode}</strong>
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
                        <strong className="ckrate">{item.stat.ckRate}</strong>
                    </div>
                    <div className="follow-player">
                        <div className="my">
                            {item.team.my !== null && item.team.my.map((member, index) => {
                                return <span key={index}>{member}</span>
                            })}
                        </div>
                        <div className="enemy">
                            {item.team.enemy !== null && item.team.enemy.map((member, index) => {
                                return <span key={index}>{member}</span>
                            })}
                        </div>
                    </div>
                </GameItem>
            })
            } */}
        </AllGameList>
    )
}

export default GameList
