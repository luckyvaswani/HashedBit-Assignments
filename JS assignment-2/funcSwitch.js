// 2. Write a function to calculate which can add, subtract, multiply and divide two numbers. Use switch inside function.

function choice(n1,n2,operator){
        switch (operator) {
            case '+':
                ans=n1+n2
                console.log("Answer of addition is = ",ans)
                break;
            case '-':
                ans=n1-n2
                console.log("Answer of Subtraction is = ",ans)
                break;
            case '*':
                ans=n1*n2
                console.log("Answer of Multplication is = ",ans)
                break;
             case '/':
                ans=n1/n2
                console.log("Answer of Division is = ",ans)
                break;
           

            default:
                break;
        }
    return ans

}
choice(1,2,'-');
choice(1,2,'+');
choice(1,2,'*');
choice(1,2,'/');

// Output- 

// Answer of Subtraction is =  -1
// Answer of addition is =  3
// Answer of Multplication is =  2
// Answer of Division is =  0.5

