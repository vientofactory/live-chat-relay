# Live Chat Relay

트위치(트윕) 스타일 기반 채팅 중계 웹서버

이 프로젝트는 [중계용 디스코드 봇](https://github.com/vientofactory/chat-relay-bot)이 함께 사용됩니다.

# Warning

코드가 매우 더럽습니다. 시간 날 때 리팩토링 해볼게요...

# Screenshots

![image](https://github.com/vientofactory/live-chat-relay/assets/107330816/2bd4229a-71b6-4fd8-9e46-fa5afd21c4f0)

# How to use

## clone this project

```
git clone https://github.com/vientofactory/live-chat-relay.git
```

## set env

```
PORT="3000"
SECRET_KEY="Your secret key"
```

## install dependencies

```
npm install
```

## build

```
npm run build
```

## copy html template

```
cp -r src/server/static dist/server
```

## start server

```
npm run start
```
