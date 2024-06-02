// 1. Write code to display from 1 to 100 but just even numbers.

var g=0;
for (let i=1;i<=100;i++)
{
    
  if(i%2==0){
    console.log(i)
    g++
  }
}
console.log("Total Even Numbers are = ",g)