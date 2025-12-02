算法本质：DOM 结果的 diff 算法在二叉树上的应用，与 Vue 中的 diff 算法原理相同
新增、修改和删除
  记录格式：使用数组存储 diff 结果，每个元素是包含 type、origin、now 三个属性的对象
  新增判断：当 root1 == null 且 root2 != null 时，表示新增节点
  删除判断：当root1不为null且root2为null时，表示删除节点
  修改判断：当root1和root2都存在但value不同时，表示修改节点

```javascript
function Node(value){
  this.value = value
  this.left = null
  this.right = null
}

let a1 = new Node('a')
let b1 = new Node('b')
let c1= new Node('c')
let d1 = new Node('d')
let e1 = new Node('e')
let f1 = new Node('f')
let g1 = new Node('g')

a1.left = c1;
a1.right = b1;
c1.left = f1;
c1.right = g1;
b1.left = d1;
b1.right = e1;

let a2 = new Node('a')
let b2 = new Node('b')
let c2= new Node('c')
let d2 = new Node('d')
let e2 = new Node('e')
let f2 = new Node('o')
let g2 = new Node('g')

a2.left = c2;
a2.right = b2;
c2.left = f2;
c2.right = g2;
b2.left = d2;
b2.right = e2;

function diffTree(root1, root2, diffList) {
  if (root1 == root2) return diffList; // 不变
  if (root1 == null && root2 != null) { // 新增
    diffList.push({type: '新增', origin: null, now: root2})
  } else if (root1 != null && root2 ==null) { // 删除
    diffList.push({type: '删除', origin: root1, now: null})
  } else if (root1.value != root2.value) { // 修改
    diffList.push({type: '修改', origin: root1, now: root2})
  } else {
    diffTree(root1.left,root2.left,diffList)
    diffTree(root1.right,root2.right,diffList)
  }
}

let diffList = []
diffTree(a1,a2,diffList)
console.log(diffList);

```