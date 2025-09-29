/*
  Fund Miner challenge:

  Given two nested binary trees root and subRoot, determine
  if subRoot is a subtree of root. A subtree should include
  all child nodes in the original tree.

  Node structure
  TreeNode{
    value: integer,
    left: TreeNode | null,
    right: TreeNode | null
  }

  Test case:
  Main tree              subtree
      3                     4
     / \                   / \
    4   5                 1   2
   / \                     
  1   2

  Output: true
*/

function TreeNode(value, left = null, right = null){
  this.value = value;
  this.left = left;
  this.right = right;
}

// Función principal
function isSubtree(root, subRoot) {
  if (!subRoot) return true;   // Un árbol vacío siempre es subárbol
  if (!root) return false;     // Si root es vacío pero subRoot no, no puede ser subárbol

  // Si coinciden desde este nodo, regresamos true
  if (isSameTree(root, subRoot)) return true;

  // Si no, buscamos en los subárboles izquierdo y derecho
  return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
}

// Verifica si dos árboles son idénticos
function isSameTree(a, b) {
  if (!a && !b) return true;               // Ambos vacíos: idénticos
  if (!a || !b) return false;              // Uno vacío y otro no: distintos
  if (a.value !== b.value) return false;   // Valores distintos: no coinciden

  // Revisa recursivamente izquierda e derecha
  return isSameTree(a.left, b.left) && isSameTree(a.right, b.right);
}

const subTree = new TreeNode(4, new TreeNode(1), new TreeNode(2));
const mainTree = new TreeNode(3, new TreeNode(4, new TreeNode(1), new TreeNode(2)), new TreeNode(5));

console.log(isSubtree(mainTree, subTree));