function showHideSalary() {
    const elements = document.getElementsByClassName('salary');
    for (let i = 0; i < elements.length; i++) {
        elements[i].classList.toggle('hideSalary');
    }

    // change button text
    const showHideButton = document.getElementById('showHideSalary');
    const hiddenSalaries = document.getElementsByClassName('hideSalary');    
    showHideButton.innerText = hiddenSalaries.length ? 'Show Salary' :'Hide Salary';
}

function showEmployee() {
    const employee = document.getElementById('employee').value;
    if (employee == "") {
        alert("Please type here something");
        return false;
    }
    var div = document.getElementById('employeelist');
    div.innerHTML += '<tr><td>'+employee+'</td><td><input type="button" value="Delete" onclick="deleteRow(this)"></td></tr>';
    document.getElementById('employee').value = '';
}

function deleteRow(r) {
    var i = r.parentNode.parentNode.rowIndex;
    document.getElementById("employeelist").deleteRow(i);
}

function showEmployeeData() {
    var fname = document.getElementById('fname').value;
    var ffunction = document.getElementById('ffunction').value;
    var fsalary = document.getElementById('fsalary').value;

    alert(JSON.stringify({ name: fname, function: ffunction, salary: fsalary }));
}
