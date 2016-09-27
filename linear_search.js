'use strict'

// Release 0
console.log("Linear Search")

let linearSearch = (target, values) => {
  for(let i=0;i<values.length;i++)
  {
    if(target == values[i]){
      return i
    }else if( i == values.length - 1){
      return -1
    }
  }
}

let random_numbers = [ 6, 29, 18, 2, 72, 19, 18, 10, 37 ];


console.log(" index " + linearSearch(18, random_numbers));
// 2
console.log(" index " + linearSearch(9, random_numbers));
// -1


// Release 1
console.log("Global Linear Search")
let globalLinearSearch = (target, values) => {
  var tampung = []
  for(let i=0;i<values.length;i++)
  {
    if(target == values[i]){
      tampung.push(i)
    }
  }
  return tampung
}

let banana_arr = "banana".split("");
// ["b", "a", "n", "a", "n", "a"]
console.log(globalLinearSearch("a", banana_arr));
// [ 1, 3, 5 ]
