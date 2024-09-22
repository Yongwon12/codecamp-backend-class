import axios from "axios";

// 1. 비동기 방식
const fetchAsync = function () {
  const result = axios.get("https://koreanjson.com/posts/1");
  console.log("비동기방식", result); // promise {<pending>}
};
fetchAsync();

// 2. 동기 방식
// async function fetchSync() {  // => 함수 중복 선언 문제를 피하자 (화살표함수로 변경)
//   const result = await axios.get("https://koreanjson.com/posts/1");
//   console.log("동기방식", result); // 제대로된 결과 {title:"..."}
//   console.log("동기방식", result.data.title);
// }
// fetchSync();

const fetchSync = async () => {
  const result = await axios.get("https://koreanjson.com/posts/1");
  console.log("동기방식", result); // 제대로된 결과 {title:"..."}
  console.log("동기방식", result.data.title);
};
fetchSync();
