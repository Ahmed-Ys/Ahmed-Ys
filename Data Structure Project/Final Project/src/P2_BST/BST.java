package P2_BST;

import java.util.Scanner;

public class BST {

    public static void main(String[] args) {
        int da;
        double ratio;
        double z;
        Scanner scan = new Scanner(System.in);
        BinaryTree bt = new BinaryTree();
        BinaryTree bin = new BinaryTree();
        bin.insert(0);
        System.out.println("Please enter the redundancy ratio that is a real number greater than 1 as a double number as (1.1)");
        z=scan.nextDouble();
        System.out.println("To finish the program before reaching the desired percentage, please enter the number: (-1)");
        System.out.println("please Enter one integer number per line from 1 to 9");
        do{
            da=scan.nextInt();
        bt.insert(da);
        while(bin.search(da)==false&&da!= -1){
            bin.insert(da);
        }
        if(bt.search(-1)==true){
            ratio=((bt.countNodes()-1)/(bin.countNodes()-1));
        }
        else
            ratio=((bt.countNodes())/(bin.countNodes()-1));
        }while(da!= -1 && ratio<z);
        if(bt.search(-1)==true){
            System.out.println("ratio= " + ratio);
            System.out.println("Only Few Repetitions");
        }
        else{
            System.out.println("ratio= " + ratio);
            System.out.println("Many Repetitions");
        }      
    } 
}