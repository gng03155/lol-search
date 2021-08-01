
# 리그오브레전드 전적 조회 
## Info

>OP.GG 사이트에서 게임 전적 정보를 크롤링해서 보여줍니다.<br/>
>robots.txt를 통해 크롤링 권한 범위를 확인하였습니다.<br/>
>React + typescript 를 기반으로 개발한 프로젝트입니다.<br/>
>Node.js + Express를 사용해 간단한 Backend 구축</br>
>puppeteer를 이용해 웹 크롤링을 했습니다.<br/>
>인피니티 스크롤링을 직접 구현하여 사용했습니다.<br/>

## Install

```
npm install
npm run start
```

## 구조

```
src                        			 
│
├── components              
|     ├──GameList.tsx
|     ├──Loading.tsx
|     └──UserStat.tsx
|
├── layout                 
│     ├── Header.tsx        
│     └── App.tsx             
|
├── pages                        
│     └── App.tsx    
|
├── store              
|     ├──action.tsx
|     ├──reducer.tsx
|     └──type.tsx
|
├── global-styles.ts
|
└── Index.tsx
```

## 사용 기술 스택

React , Typescript , Redux , Redux-thunk , express , puppeteer

## 실제 화면
![lol](https://user-images.githubusercontent.com/73515375/127759419-5d428d69-a7c3-4382-9576-ed5a3e5bba61.gif)
## 개발 이슈
>[Notion](https://www.notion.so/photoshop-2c6ae95cf7024776b252071dc1c1b550, "notion link")
