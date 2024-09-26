// 회원 목록 조회 API를 요청해주세요.
const getUser = async () => {
  // 받은 데이터로 createUserDiv함수를 이용해
  const userList = await axios.get("http://localhost:3000/users");

  for (let i = 0; i < userList.data.length; i++) {
    email = userList.data[i].email;
    phone = userList.data[i].phone;
    personal = userList.data[i].personal;
    prefer = userList.data[i].prefer;
    // 목록 화면을 완성해주세요.
    createUserDiv({ email, phone, personal, prefer });
  }
};

const createUserDiv = (data) => {
  const userTableItem = document.createElement("div");
  userTableItem.className = "User_Table_Item";

  const emailItem = document.createElement("div");
  emailItem.className = "Item_Info";
  emailItem.textContent = data?.email || "abc@gmail.com";

  const personalItem = document.createElement("div");
  personalItem.className = "Item_Info";
  personalItem.textContent = data?.personal || "220111-1******";

  const phoneItem = document.createElement("div");
  phoneItem.className = "Item_Info";
  phoneItem.textContent = data?.phone || "010-1234-5678";

  const preferItem = document.createElement("div");
  preferItem.className = "Item_Info";
  preferItem.textContent = data?.prefer || "naver.com";

  const menuBack = document.querySelector("#User_Data_Wrapper");
  menuBack.appendChild(userTableItem);
  userTableItem.appendChild(emailItem);
  userTableItem.appendChild(personalItem);
  userTableItem.appendChild(phoneItem);
  userTableItem.appendChild(preferItem);
};
