package P4_MST;

class MaxSum{ 
static final int N = 4;   
static class Pair{ 
    int first , second; 
      
    Pair(int f, int s){ 
        first = f; 
        second = s; 
    } 
}   
static Pair colMaxSum(int mat[][]){    
    int idx = -1;  
    int maxSum = Integer.MIN_VALUE;    
    for (int i = 0; i < N; i++){  
        int sum = 0;    
        for (int j = 0; j < N; j++){  
            sum += mat[j][i];  
        }    
        if (sum > maxSum){  
            maxSum = sum;    
            idx = i;  
        }  
    }  
    Pair res;  
    res = new Pair(idx, maxSum);  
    return res;  
    }  
}