console.clear()

var mNum = 15
console.log(typeof(String(mNum)))
console.log(typeof(String(true)))
console.log(typeof(String(-98.10)))
console.log(typeof(String(null)))
console.log(typeof(String(undefined)))

//To Number
console.log(typeof(Number('2')))
console.log(Number(true),typeof(Number(true)))
console.log(Number(false),typeof(Number(true)))
console.log(Number('apple'),typeof(Number('apple')))

//To Boolean
console.log(Boolean(true), typeof(Boolean(true)))
console.log(Boolean(1), typeof(Boolean))
console.log(Boolean('Apple'), typeof(Boolean('Apple')))
console.log(Boolean(null), typeof(Boolean(null)))
console.log(Boolean(undefined), typeof(Boolean(undefined)))
console.log(Boolean(''), typeof(Boolean('')))
