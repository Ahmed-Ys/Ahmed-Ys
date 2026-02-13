package P2_BST;

public class Node {
    Node left;
    Node right;
    int data;
    
    public Node(int item){
        left = right = null;
        data = item;
    }
     public void setLeft(Node n){
         left = n;
     }
     public void setRight(Node n){
         right = n;
     }
     public Node getLeft(){
         return left;
     }
     public Node getRight(){
         return right;
     }
     public void setData(int d){
         data = d;
     }
     public int getData(){
         return data;
     }
}

class BinaryTree{
    private Node root;
    int data;
    public void insert(int data){
            root = insert(root, data);
    }
     private Node insert(Node node, int data){
          if (node == null){
              node = new Node(data);
          }
          else
               if (node.getLeft()== null){
                   node.left = insert(node.left, data);
               }
          else
                   node.right = insert(node.right, data);
          return node;
     }
     public double countNodes(){
         return countNodes(root);
     }
     private double countNodes(Node r){
         if (r == null){
             return 0;
         }
         else
         {
              int l = 1;
               l += countNodes(r.getLeft());
               l += countNodes(r.getRight());
               return l;
         }  
     }
     public boolean search(int val){
         return search(root, val);
     }
     private boolean search(Node r, int val){
         if (r.getData() == val){
             return true;
         }
         if (r.getLeft() != null){
             if (search(r.getLeft(), val)){
                 return true;
             }
         }
         if (r.getRight() != null){
             if (search(r.getRight(), val)){
                 return true;
             }
         }
         return false;
     }
}