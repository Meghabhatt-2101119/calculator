operator = document.querySelectorAll("input");
answer = document.querySelector("#ans");
result = document.querySelector("#res");
let flag = 0;
// enter = document.querySelector("#enter");
let res = 0;
operator.forEach((operand) => {
  // console.log(operand.value);
  operand.addEventListener("click", (e) => {
    switch (e.target.name) {
      case "clear":
        answer.value = "";
        break;
      case "del":
        answer.value = answer.value.slice(0, -1);
        break;
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
      case "0":
      case ".":
      case "+-":
      case "+":
      case "-":
      case "%":
      case "/":
      case "*":
      case ")":
      case "(":
      case "**":
        if (e.target.name == "+-") flag = 1;
        else {
          if (flag == 1) {
            e.target.name = -1 * e.target.name;
          } else {
            answer.value += e.target.name;
            flag = 0;
          }
        }
        break;
      case "enter":
      case "ans":
        res = eval(answer.value);
        result.value = res;
        break;
    }
  });
});
