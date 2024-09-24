# 1. 운영체제 및 프로그램 설치(하나 하나 입력하는 방식)
# FROM ubuntu:22.04

# RUN sudo apt install nodejs


# 1. 운영 체제 및 프로그램 설치(이미 리눅스, node, npm, yarn 까지 모두 깔려있는 컴퓨터 다운로드 하는 방식)
FROM node:14

# 2. 내 컴퓨터에 있는 폴더나 파일을 docker 컴퓨터 안으로 복사하기
COPY ./index.js /index.js

# 3. docker 안에서 index.js 실행시키기
CMD node index.js

