import styled from 'styled-components'

export const AllGameList = styled.div`

    width : 800px;
    margin : 0 auto;

`

export const GameItem = styled.div< { win: boolean } >`
    
    height : 100px;
    display : flex;
    justify-content : space-between;
    align-items : center;
    text-align : center;

    border: 1px solid #cdd2d2;
    background-color : ${props => props.win === true ? "#a3cfec" : "#e2b6b3"};
    border-color : ${props => props.win === true ? "#99b9cf" : "#cea7a7"};

    & > div {
        width : 15%;
    }

    span {
        display: block;
    }

    strong {
        display: block;
    }

    .gamestats {
        .gametype {
            color : #222;
            
        }
        .gameresult {
            color : ${props => props.win === true ? "blue" : "red"};
        }

        .bar {
            width: 50px;
            height: 2px;
            background : #ccc;
            margin : 5px auto;
        }

        .timestamp {
            font-weight : 300;
        }
    }

    .champinfo{

        width : 10%;

        img {
            width: 46px;
            height: 46px;
            border-radius : 50%;
        }
        figcaption {

        }
    }

    .kda {
        .kdascore{
            span {
                display : inline;
            }

            span::after {
                
                content : " / ";
                color : #999;

            }

            span:last-child::after{
                content:"";
            }

            span.death {
                color : red;
            }
        }

        .kdarate {
            margin-top : 10px;
        }
    }

    .stats{
        .level {

        }
        .cs{
            margin : 5px 0;
        }
        .ckrate{
            color : red;
        }
    }

    .follow-player {
            width : 20%;
            display : flex;
            justify-content : space-between;

            .my , .enemy {
                width: 50%;
            }

            span {
                text-align : left;
                width : 90%;
                white-space : nowrap;
                text-overflow: ellipsis;
                overflow:hidden;
            }
        }


`