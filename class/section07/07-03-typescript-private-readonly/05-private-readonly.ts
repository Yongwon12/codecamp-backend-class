// public, private, protected, readonly

// 몬스터 만드는 설명서(class)
class Monster2 {
  //   power       => public, private, protected, readonly 중 한개라도 있으면 생략가능

  constructor(private readonly power) {
    // this.power = power   //  => public, private, protected, readonly 중 한개라도 있으면 생략가능
  }

  attack1 = () => {
    console.log("공격하자!!");
    console.log("내 공격력은" + this.power + "이다"); // 안에서 접근 가능
    this.power = 30; // 안에서 수정 불가
  };
}

class 공중몬스터2 extends Monster2 {
  attack2 = () => {
    console.log("공격하자!!");
    console.log("내 공격력은" + this.power + "이다"); // 자식에서 접근 불가
    this.power = 30; // 자식에서 수정 불가
  };
}

const myMonster22 = new 공중몬스터2(20);
myMonster22.attack1();
myMonster22.attack2();
console.log(myMonster22.power); // 밖에서 접근 불가
myMonster22.power = 10; // 밖에서 수정 불가
