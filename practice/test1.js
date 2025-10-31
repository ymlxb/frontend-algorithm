

let arr = [4,1,6,9,3,2,8,7]

function compare (a,b){
  if(a > b) return true
  else return false
}

function exchange (arr,a,b){
  let temp = arr[a]
  arr[a] = arr[b]
  arr[b] = temp
}

function sort (arr){
  for(let i =0;i < arr.length;i++){
    for(let j = 0;j < arr.length-1;j++){
    if(compare(arr[j],arr[j+1])){
      exchange(arr,j,j+1)
    }
  }
  }
}
sort(arr)
console.log(arr);
