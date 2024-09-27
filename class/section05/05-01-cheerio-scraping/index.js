// html응답을 활용해서 스크랩핑을 하자.
// 스크랩핑을 좀 더 쉽게 해주는 cheerio 사용해보자.
import axios from "axios";
import * as cheerio from "cheerio";
const createMessage = async () => {
  // 입력된 메시지: "안녕하세요 ~ https://naver.com에 방문해주세요."

  // 1. 입력된 메시지에서 http로 시작하는 문장이 있는지 먼저 찾기(.find() 등의 알고리즘 사용하기)
  const url = "https://naver.com";
  // 2. axios.get으로 요청해서 html 코드 받아오기 => 스크래핑
  const result = await axios.get(url);
  console.log(result.data);
  // 3. 스크래핑 결과에서 OG(오픈그래프) 코드를 골라내서 변수에 담기 => cheerio 도움 받기
  const $ = cheerio.load(result.data);
  $("meta").each((index, el) => {
    if ($(el).attr("property") && $(el).attr("property").includes("og:")) {
      const key = $(el).attr("property"); // og:title, og:description, ...
      const value = $(el).attr("content"); // 네이버, 네이버 메인에서 ~~~
      console.log(key, value);
    }
  });
};

createMessage();
