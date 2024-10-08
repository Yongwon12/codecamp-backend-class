interface IProfile {
  name: string;
  age: number;
  school: string;
  hobby?: string;
}

//
// 1. Partial(부분) 타입 -> 모든 요소를 있어도 되고 없어도 되는 타입으로 만듦
type aaa = Partial<IProfile>;

// 2. Required 타입 -> 모든 요소를 필수적인 요소로 만듦
type bbb = Required<IProfile>;

// 3. Pick 타입 -> 특정 요소를 고를 수 있음
type ccc = Pick<IProfile, "name" | "age">;

// 4. Omit 타입 -> 특정 요소를 제외할 수 있음
type ddd = Omit<IProfile, "school">;

// 5. Record 타입 -> union 타입의 타입을 특정 타입 또는 interface로 만듦
type eee = "철수" | "영희" | "훈이"; // Union 타입 -> string 타입보다 안전, 타입의 범위를 좁히기 때문
let child1: eee = "철수"; // 철수, 영희, 훈이 만 됨
let child2: string = "사과"; // 철수, 영희, 훈이, 사과, 의자 다 됨

type fff = Record<eee, IProfile>; // Record 타입

// 6. 객체들의 key들로 Union 타입 만들기
type ggg = keyof IProfile; // "name" | "age" | "school" | "hobby"
let myprofile: ggg = "hobby";

// 7. type vs interface => interface는 선언 병합 가능
interface IProfile {
  candy: number; // 선언 병합으로 추가됨
}

// 8. 배운것 응용 => 이전에 선언한 interface IProfile에는 name, age, school이 필수적으로 들어가야하는 요소임
// 위에서는 candy가 추가 되었기에  name, age, school도 아래의 profile에 할당되어야 에러가 발생하지 않는데,
// 할당하지 않는 방법은 Partial(모든 요소를 있어도 되고 없어도 되는 요소로 만드는 기능)을 사용하여 있어도 되고 없어도 되는 요소로 만드는 것임
let profile: Partial<IProfile> = {
  candy: 10,
};
