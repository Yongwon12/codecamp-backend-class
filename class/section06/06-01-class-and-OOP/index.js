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
    console.log("자 드가자~");
    console.log("내 공격력은" + this.power + "이다");
  };

  run = () => {
    console.log("돔황챠~!~!");
  };
}

const myMonster1 = new Monster(20);
myMonster1.attack();
myMonster1.run();

const myMonster2 = new Monster(50);
myMonster2.attack();
myMonster2.run();
