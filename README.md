# 리그오브레전드 전적 조회 
## 간단 설명
OP.GG 사이트에서 게임 전적 정보를 크롤링해서 보여줍니다.<br/>
robots.txt를 통해 권한범위를 확인하였습니다.
인피니티 스크롤링을 직접 구현하여 사용했습니다.
## Install
```
npm install
npm run start
```
## 구조
```
root                        			 
│
├── components              
|
├── config                
│				
├── pages                 
│     ├── index.tsx             // '/'
│     ├── release-note.tsx      // '/release-note'
│     ├── _app.tsx        
│     ├── _document_.tsx        
│     ├── index.scss      
│     └── api             
│
├── public  
│     └── assets          
│
└── styles                          
      ├── global-style.ts
      ├── styled.d.ts    
      └── styled.d.ts    

```
## 사용 기술 스택
React , Typescript , Redux , Redux-thunk , express , puppeteer

## 실제 시연 영상

## 개발 이슈
