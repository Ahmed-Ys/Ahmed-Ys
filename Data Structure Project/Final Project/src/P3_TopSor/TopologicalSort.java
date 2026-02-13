package P3_TopSor;

import java.util.Scanner;
import P3_TopSor.MostVisited.Pair;
import static P3_TopSor.MostVisited.colMaxSum;

public class TopologicalSort {
    
 public static char gmo(String st){
     char sa[]=new char[st.length()];
       String as="";
       for(int i=0;i<st.length();i++){
           sa[i]=st.charAt(i);
       }
       for(int i=0;i<sa.length-1;i++){
        for(int j=0;j<sa.length-1-i;j++){
          if(sa[j]>sa[j+1]){
          char temp=sa[j];
               sa[j]=sa[j+1];
               sa[j+1]=temp;          
             }   
          } 
       }
      for(int i=0;i<sa.length;i++){
          as+=sa[i];
      }
    int co[]=new int[256];
    for(int i=0;i<as.length();i++)
        co[as.charAt(i)]++;
  int  max=-1;
  char result=' ';
 
    for(int i=0;i<as.length();i++){
        if(max<co[as.charAt(i)]){
            max=co[as.charAt(i)];
            result=as.charAt(i);       
         } 
    }
    return result;
   }
    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        Scanner sc=new Scanner (System.in);
        System.out.println("Please Enter the Nums of islands,Bridges,The initial Island");
        int x=sc.nextInt();int y=sc.nextInt();int z=sc.nextInt();
        int ar[][]=new int[y][x];
        String st="";
        for(int i=0;i<ar.length;i++){    
           int t,f;
           t=sc.nextInt();f=sc.nextInt();
           st+=f;
          if(t>ar.length||f>ar.length){
           System.out.println("Invalid Entry");
           System.out.println("Please Try Again");
          }else{
              
              ar[t-1][f-1]=1;
             
            }
        }
        
        Pair ans = colMaxSum(ar);
        int MV=ans.first+1;
        int MP=gmo(st);
        if(MV==MP){
       System.out.println("The Island that most likely to Get stuck on is");
        System.out.print(MV+" ");
        System.out.println(gmo(st));
        }else{
       System.out.println("The Island that has the Most chance to Get stuck on is");
        System.out.println(gmo(st));
        }
    }
}