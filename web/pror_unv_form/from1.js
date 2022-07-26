let admins = ["Ahmed", "Osama", "Sayed", "Stop","Samera"];
let Employees = ["Amgad", "Samah", "Ameer", "Othman", "Amna", "Samer", "Anwar"];
let i = 0;
let k = 0;
let n = 0;
 
for(i ; i < admins.length ;i++)
{
 
    for(;k<Employees.length;k++){
 document.write(`<div> The admin for team ${i+1} is ${admins[i]}`);
        document.write(`<h3>Team Member  </h3>`);
        for(;n<Employees.length;n++)
        {
        document.write(`<b> -${n+1} ${Employees[n]}<br></b>`);
        }
 document.write(`</div>`);       
}
 
    }
