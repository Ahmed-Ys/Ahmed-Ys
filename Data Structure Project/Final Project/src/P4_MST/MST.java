package P4_MST;

import java.util.Scanner;
import P4_MST.MaxSum.Pair;
import static P4_MST.MaxSum.colMaxSum;
public class MST {
     public static int N; 
    public static void displayMC(int MC){
        System.out.println(MC);
    }
    public static int cost(int Edge1,int Edge2){
        int c=Edge1-Edge2;
        java.lang.Math.abs(c);
        return c;
    }
    public static void main(String[] args) {
       Scanner sc=new Scanner(System.in);
       System.out.println("Please enter the number of Nodes & Edges");
       int Node =sc.nextInt();int Edge=sc.nextInt();
      
       int [][]aofn=new int[Node][Edge];
       for(int i=0;i<aofn.length;i++){    
           int x,y;
           x=sc.nextInt();y=sc.nextInt();
          if(x>aofn.length||y>aofn.length){
           System.out.println("Invalid Entry");
           System.out.println("Please Try Again");
          }else{
              aofn[x-1][y-1]=1;
              aofn[y-1][x-1]=1;
          }
        }
    Pair ans = colMaxSum(aofn);  
    int mn=ans.first+1;
    int tempmn=0;
    System.out.println("The Minimum Cost To Remove Edges");

   for(int i=0;i<=aofn.length-1;i++){
       if(aofn[i][mn]==1){
           if(cost(i,mn)>=tempmn){
               displayMC(cost(i,mn));
               break;
           }else{
               tempmn++;
           }
       }else{
          continue;
       }
   }
    }
}
