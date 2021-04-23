

/*Task. go through all of these issues and make appropriate improvements to the code.

1. Naming: the function has a bad name, myFunction() tells you nothing about
   what the function does. It's also considered bad practice to name variables
   vaguely by separating them through numbers (incomeTax1, incomeTax2, etc). If
   you find yourself doing this then you should either use an array (such as
   incomeTax[]).

2. Commenting: the function isn't documented at all. It's very difficult to
   understand what the function's purpose is and how each part of the code
   contributes to it. By writing comments, the coder communicates their
   reasoning and helps the function be human readable.

3. Layout/formatting: unnecessary spacing between the if and else statement.

4. Single responsibility: the function doesn't have a single purpose. It
   calculates national insurance and salary deductions. Maybe the national
   insurance calculation could be moved to a separate function.

5. Input variable being overwritten: the function requires gross salary (before
   deductions) and net salary (after deductions) the `salary` input variable is
   therefore copied into an `originalSalary` variable so that it can be changed.
   It would be much clearer to create a new `netSalary` variable and leave
   `salary` unmodified.

6. DRY principle: the function validates the DRY (Don't Repeat Yourself) rule.
   The line where a deduction is taken from the salary is repeated 3 times with
   different indices. This can be replaced with a `for` loop.

7. Magic numbers. The code contains a lot of magic numbers, including `17775`,
   `0.09` and `0.1`.

8. Useless parameters: the code contains a variable which isn't used. They
   should be removed because they are confusing. It is tempting when you're
   starting to code a function to add more parameters thinking that you might
   need them, but it's important to remove them if you don't end up using them.
   
   */

function getSumOfIncomeTaxes(incomeTaxes){

   let acc = 0;
   for(let i =0; i< incomeTaxes.length; i++){
      acc = acc + incomeTaxes[i];
   }
   return acc;
}

function calculateStudentLoan(salary) {
const studentDeduction = 17775;
const studentLoanRate = 0.9;
let studentLoan = (salary - studentDeduction) * studentLoanRate;
return studentLoan;
}

function calculateNationalInsurance(taxCode, salary) {
   const Tax1150LRate = 0.1;
   const TaxSLRate = 0.05;
   const TaxDefaultRate = 0.08;
   let nationalInsurance = null;

  if (taxCode === "1150L") {
    nationalInsurance = salary * Tax1150LRate;
  } else if (taxCode === "ST") {
    nationalInsurance = salary * TaxSLRate;
  } else nationalInsurance = salary * TaxDefaultRate;
 
  return nationalInsurance;
}

//salary deductions function 
function calculateNetSalary(salary, taxCode, incomeTaxes) {

   //Calculate total income taxes
   let totalIncomeTax = getSumOfIncomeTaxes(incomeTaxes);

   //Calculate nationaInsurance
   let nationalInsurance = calculateNationalInsurance(taxCode, salary);

   //Calcula student Loan

   let studentLoan = calculateStudentLoan(salary);
   //calculate the salary after deductions 

  const deductions = [nationalInsurance, totalIncomeTax, studentLoan];
  let netSalary = salary; 
  for (let i = 0; i < deductions.length; i ++) {
   netSalary = netSalary - deductions[i];
  }


  return (
    "Your gross income is �" +
    salary.toString() +
    " and your net income is �" +
    netSalary.toString() +
    "."
  );
}

console.log(calculateNetSalary(28000, "1150L", 1000, 580, false));