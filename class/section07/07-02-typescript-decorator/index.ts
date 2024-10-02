// 데코레이터를 아래와 같이 붙여주면 아래에 있는 CatsController에 해당하는 class가
// Controller 함수의 매개변수로 들어감
function Controller(a: any) {
  console.log("============");
  console.log(a);
  console.log("============");
}
@Controller
class CatsController {}
