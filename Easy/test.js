let obj = {}

function sum(){
    obj.num1 = 10
    obj.num2 = 20
    return sum2()
}

function sum2(){
   return obj.num1 + obj.num2
}

console.log(sum())

