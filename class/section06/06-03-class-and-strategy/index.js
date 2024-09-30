class 공중부품 {
  run = () => {
    console.log("날라서 도망가자!!");
  };
}

class 지상부품 {
  run = () => {
    console.log("뛰어서 도망가자!!");
  };
}

// 몬스터 만드는 설명서(class)
class Monster {
  power = 10;
  부품;
  constructor(qqq) {
    this.부품 = qqq;
  }

  attack = () => {
    console.log("공격하자!!");
    console.log("내 공격력은" + this.power + "이다");
  };

  run = () => {
    this.부품.run();
  };
}

const myMonster1 = new Monster(new 공중부품());
myMonster1.attack();
myMonster1.run();

const myMonster2 = new Monster(new 지상부품());
myMonster2.attack();
myMonster2.run();
