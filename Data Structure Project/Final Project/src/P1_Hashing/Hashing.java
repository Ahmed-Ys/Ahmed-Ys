package P1_Hashing;

import java.util.Scanner;

public class Hashing {
     public static final String Ss(String x){
       char sa[]=new char[x.length()];
       String as="";
       for(int i=0;i<x.length();i++){
           sa[i]=x.charAt(i);
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
      System.out.println("Sorted String "+ as);
      return as;
   }
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
   public static int NumOfO(String st){
        int co[]=new int[256];
    for(int i=0;i<st.length();i++)
        co[st.charAt(i)]++;
  int  max=-1;
  char result=' ';
   int noo=0;
    for(int i=0;i<st.length();i++){
        if(max<=co[st.charAt(i)]){
            max=co[st.charAt(i)];
            result=st.charAt(i);
            noo=max;
        } 
    }
    return noo;
   }

    public static void main(String[] args) {
        Scanner s=new Scanner(System.in);
        System.out.println("please Write a sentece");
        String st=s.nextLine();
         System.out.print("The Maximum occurrence is ");
        if(gmo(st)==32 ){
            System.out.print("( Space )");
        }else{
            System.out.print("( "+gmo(st)+" )");
            } 
        System.out.println(" And The Num of it's occurrence is "+"( "+NumOfO(st)+" )");    
    }
}