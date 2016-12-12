//get an employee by id from a list of employees:
function getEmployee(id, employees) {
    for (var i = 0; i < employees.length; i++) {
        var employee = employees[i];
        if (employee.id === id) {
            return employee;
        }
    }
    return null;
}
//get emotion by emotionID from list of scores?
function getHighestEmotion(scoreList) {
    for (var i = 0; i < scoreList.length; i++) {
        var emotion = scoreList[i];
   //     if (emotion.emotions === emotions) {
   //         return emotion;
   //     }
    }
    return null;
}

//example code to use this helper:
//var json = 'the JSON string you got from the server';
//var obj = JSON.parse(json);
//var employees = obj.employees;
//var employee = getEmployee(34, employees);
//if (employee != null) {
//    alert(employee.name);
//}