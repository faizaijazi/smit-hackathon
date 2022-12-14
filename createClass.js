
var selectedRow = null

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

function readFormData() {
    var formData = {};
    formData["classes_timing"] = document.getElementById("classes_timing").value;
    formData["classes_schedule"] = document.getElementById("classes_schedule").value;
    formData["teachers_name"] = document.getElementById("teachers_name").value;
    formData["section_name"] = document.getElementById("section_name").value;
    formData["course_Name"] = document.getElementById("course_Name").value;
    formData["batch_number"] = document.getElementById("batch_number").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.classes_timing;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.classes_schedule;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.teachers_name;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.section_name;
    cell4 = newRow.insertCell(4);
    cell4.innerHTML = data.course_Name;
    cell4 = newRow.insertCell(5);
    cell4.innerHTML = data.batch_number;
    cell4 = newRow.insertCell(6);
    cell4.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
}

function resetForm() {
    document.getElementById("classes_timing").value = "";
    document.getElementById("classes_schedule").value = "";
    document.getElementById("teachers_name").value = "";
    document.getElementById("section_name").value = "";
    document.getElementById("course_Name").value = "";
    document.getElementById("batch_number").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("classes_timing").value = selectedRow.cells[0].innerHTML;
    document.getElementById("classes_schedule").value = selectedRow.cells[1].innerHTML;
    document.getElementById("teachers_name").value = selectedRow.cells[2].innerHTML;
    document.getElementById("section_name").value = selectedRow.cells[3].innerHTML;
    document.getElementById("course_Name").value = selectedRow.cells[5].innerHTML;
    document.getElementById("batch_number").value = selectedRow.cells[6].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.classes_timing;
    selectedRow.cells[1].innerHTML = formData.classes_schedule;
    selectedRow.cells[2].innerHTML = formData.teachers_name;
    selectedRow.cells[3].innerHTML = formData.section_name;
    selectedRow.cells[4].innerHTML = formData.course_Name;
    selectedRow.cells[5].innerHTML = formData.batch_number;
}

function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("employeeList").deleteRow(row.rowIndex);
        resetForm();
    }
}
function validate() {
    isValid = true;
    // if (document.getElementById("classes_timing").value == "") {
    //     isValid = false;
    //     document.getElementById("fullNameValidationError").classList.remove("hide");
    // } else {
    //     isValid = true;
    //     if (!document.getElementById("fullNameValidationError").classList.contains("hide"))
    //         document.getElementById("fullNameValidationError").classList.add("hide");
    // }
    return isValid;
}