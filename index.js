const employee = {
    name: "Mankulo",
    streetAdress: "12th street Eastleigh"
}




function updateEmployeeWithKeyAndValue (employee, key, value) {
    const updatedEmployee= {
        ...employee,
        [key]: value
    };
    console.log(updatedEmployee);
    return updatedEmployee;
}
 updateEmployeeWithKeyAndValue(employee, "name", "Sam");

 function destructivelyUpdateEmployeeWithKeyAndValue (employee, key, value) {
    employee[key] = value;
    return employee;
}
destructivelyUpdateEmployeeWithKeyAndValue(employee, "streetAdress", "12 Broadway");

function deleteFromEmployeeByKey (employee, key) {
    
    delete employee[key];   
    console.log(employee);
    return employee;
}
deleteFromEmployeeByKey(employee, "name")


function destructivelyDeleteFromEmployeeByKey (employee, key) {
    delete employee[key];
    return employee;
}
destructivelyDeleteFromEmployeeByKey(employee, "streetAdress");

function nonDestructivelyDeleteFromEmployeeByKey(employee, key) {
    const newEmployee = { ...employee }; // Create a new object using the spread operator
    delete newEmployee[key]; // Delete the specified key from the new object
    return newEmployee;
}
const updatedEmployee = nonDestructivelyDeleteFromEmployeeByKey(employee, "name");
console.log(updatedEmployee);

