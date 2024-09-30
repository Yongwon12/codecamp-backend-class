// 객체지향프로그래밍(OOP)은 아래와 같이 만들수 있음
// class Date{

//     qqq = 3
//     getFullYear(){

//     }

//     getMonth(){

//     }

// }
const date = new Date();

console.log(date.getFullYear());
console.log(date.getMonth() + 1);

// 몬스터 만드는 설명서(class)
class Monster {
  power = 10;

  constructor(qqq) {
    this.power = qqq;
  }

  attack = () => {
    console.log("공격하자!!");
    console.log("내 공격력은" + this.power + "이다");
  };

  run = () => {
    console.log("도망가자!!");
  };
}

class 공중몬스터 extends Monster {
  // 부모 class의 constructor로 넘겨주고 싶을때 아래와 같이 넘겨주는 것이 가능
  constructor(aaa) {
    super(aaa + 1);
  }

  // 오버라이딩(부모의 run에 덮어쓰기)
  run = () => {
    console.log("날라서 도망가자!!");
  };
}

class 지상몬스터 extends Monster {
  // 부모 class의 constructor로 넘겨주고 싶을때 아래와 같이 넘겨주는 것이 가능
  constructor(bbb) {
    super(bbb);
  }

  // 오버라이딩(부모의 run에 덮어쓰기)
  run = () => {
    console.log("뛰어서 도망가자!!");
  };
}

const myMonster1 = new 공중몬스터(20);
myMonster1.attack();
myMonster1.run();

const myMonster2 = new 지상몬스터(50);
myMonster2.attack();
myMonster2.run();
