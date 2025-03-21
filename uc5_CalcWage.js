// UC 5 - Calculating Wages Till Number of Working Days or Total Working Hours Per Month is Reached  

const IS_PART_TIME = 1;  
const IS_FULL_TIME = 2;  
const PART_TIME_HOURS = 4;  
const FULL_TIME_HOURS = 8;  
const WAGE_PER_HOUR = 20;  
const MAX_HOURS_IN_MONTH = 160;  
const NUM_OF_WORKING_DAYS = 20;  

// Function to Get Work Hours  
function getWorkingHours(empCheck) {  
    switch (empCheck) {  
        case IS_PART_TIME:  
            return PART_TIME_HOURS;  
        case IS_FULL_TIME:  
            return FULL_TIME_HOURS;  
        default:  
            return 0;  
    }  
}  

// Compute Employee Wage till Condition is Met  
let totalEmpHrs = 0;  
let totalWorkingDays = 0;  

while (totalEmpHrs < MAX_HOURS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS) {  
    totalWorkingDays++;  
    let empCheck = Math.floor(Math.random() * 10) % 3;  
    totalEmpHrs += getWorkingHours(empCheck);  
}  

let totalEmpWage = totalEmpHrs * WAGE_PER_HOUR;  
console.log("Total Days Worked: " + totalWorkingDays + ", Total Hours Worked: " + totalEmpHrs);  
console.log("Total Employee Wage: $" + totalEmpWage);  