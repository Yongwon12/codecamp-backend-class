# 1. 운영체제 및 프로그램 설치(하나 하나 입력하는 방식)
# FROM ubuntu:22.04

# RUN sudo apt install nodejs


# 1. 운영 체제 및 프로그램 설치(이미 리눅스, node, npm, yarn 까지 모두 깔려있는 컴퓨터 다운로드 하는 방식)
FROM node:20

# 2. 내 컴퓨터에 있는 폴더나 파일을 docker 컴퓨터 안으로 복사하기
# RUN mkdir myfolder => 아래에서 copy할 때, 자동으로 만들어 주므로 굳이 필요없음
COPY ./package.json /myfolder/
COPY ./yarn.lock /myfolder/
WORKDIR /myfolder/
RUN yarn install

COPY . /myfolder

# 3. docker 안에서 index.js 실행시키기
CMD yarn start:dev

