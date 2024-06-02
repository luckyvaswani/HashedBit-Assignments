// You need to write a function findTax() that takes a number type variable as an argument which is the salary of a person. You need to calculate the tax amount on his salary by using the Js switch control flow. The tax rates are given below.

// if 500000 >= salary > 0 then 0% tax on the entire salary.
// If 1000000 >= salary > 500000 then 10% tax on the entire salary.
// If 1500000 >= salary > 1000000 then 20% tax on the entire salary.
// If the salary > 1500000 then 30% tax on the entire salary.
function findTax(salary) {

    if (salary > 0 && salary <= 500000) {
        tax = 0;
    } else if (salary > 500000 && salary <= 1000000) {
        tax = salary * 0.10;
    } else if (salary > 1000000 && salary <= 1500000) {
        tax = salary * 0.20;
    } else if (salary > 1500000) {
        tax = salary * 0.30;
    }

    return tax;
}


console.log("The tax for your Slab is = ",findTax(450));  
console.log("The tax for your Slab is = ",findTax(1100000));  
console.log("The tax for your Slab is = ",findTax(12800000)); 
console.log("The tax for your Slab is = ",findTax(2000000)); 

      
