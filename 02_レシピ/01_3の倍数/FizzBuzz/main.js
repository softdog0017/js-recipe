// 引数 number を受け取る関数
const genkiFunction = function (number) {
  // n を 1 から、 number まで、 値を 1 ずつ増やしながら、 for の {} の中身を繰り返す
  for (let n = 1; n <= number; n++) {
      if ( n % 3 && n % 5 === 0){
        console.log(`FizzBuzz`)
      }
      if else (n % 3 === 0) {
      console.log(`Fizz`)
      }
      if else (n % 5 === 0) {
        console.log(`Buzz`)
      }
      } else {
        console.log(n)
    }
  }
