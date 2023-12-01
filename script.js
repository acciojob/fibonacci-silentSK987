function fibonacci(num) {
function fibonacci(num) {
    // your code here
      let a=0,b=1,c=0;
        let fibo=0;
           for(let i=1; i< num;i++) {   //0 = 1  //1==1 //2=1 //3=2 //4=3 //5=5 //6==8
                if(num===1)  fibo =1;
               else
               fibo=c;
               // if (n==i)
             // System.out.println(i+" "+c);
               
               c=a+b;       //0]0+1=1 
               a=b;         // 0] 0 wil become 1;
               b=c;         // 0] 1 (thats b) will become = c (thats 1)
           }
            return fibo;
    }
    
}

module.exports = fibonacci;
