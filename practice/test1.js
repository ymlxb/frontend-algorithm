

let arr = [4,1,6,9,3,2,8,7]

function quickSort(arr){
  if(arr == null || arr.length == 0) return []
  let leader =arr[0]
  let left = []
  let right = []
  for(let i = 1;i < arr.length;i++){
    if(arr[i] < leader) left.push(arr[i])
      else right.push(arr[i])
  }
  left = quickSort(left)
  right = quickSort(right)
  left.push(leader)
  return left.concat(right)
}
console.log(quickSort(arr));
