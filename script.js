var selectedRow = null;
function onFormSubmit(e){
    event.preventDefault();
    var formData = readFormData();
    if(selectedRow === null){
        insertNewRecord(formData);
    } else{
        updateRecord(formData);
    }
    resetForm();
}

function readFormData(){
    var formData = {};
    formData["projectNumber"] = document.getElementById("projectNumber").value;
    formData["projectName"] = document.getElementById("projectName").value;
    formData["DateOfStart"] = document.getElementById("DateOfStart").value;
    formData["DateOfComplete"] = document.getElementById("DateOfComplete").value;
    return formData;
}

function insertNewRecord(data){
    var table = document.getElementById("storeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    var cell1 = newRow.insertCell(0);
       cell1.innerHTML = data.projectNumber;
    var cell2 = newRow.insertCell(1);
       cell2.innerHTML = data.projectName;
    var cell3 = newRow.insertCell(2);
       cell3.innerHTML = data.DateOfStart;
    var cell4 = newRow.insertCell(3);
       cell4.innerHTML = data.DateOfComplete;
    var cell5 = newRow.insertCell(4);
       cell5.innerHTML = `<button onClick = 'onEdit(this)'>Edit</button> <button onClick = 'onDelete(this)'>Delete</button>`
}

function onEdit(td){
    selectedRow = td.parentElement.parentElement;
    document.getElementById('projectNumber').value = selectedRow.cells[0].innerHTML;
    document.getElementById('projectName').value = selectedRow.cells[1].innerHTML;
    document.getElementById('DateOfStart').value = selectedRow.cells[2].innerHTML;
    document.getElementById('DateOfComplete').value = selectedRow.cells[3].innerHTML;
 }
 
 function updateRecord(formData){
    selectedRow.cells[0].innerHTML = formData.projectNumber;
    selectedRow.cells[1].innerHTML = formData.projectName;
    selectedRow.cells[2].innerHTML = formData.DateOfStart;
    selectedRow.cells[3].innerHTML = formData.DateOfComplete;
 }
 
 //delete the data
 function onDelete(td){
    if(confirm('Do you want to delete this record')){
       row = td.parentElement.parentElement;
       document.getElementById('storeList').deleteRow(row.rowIndex);
    }
    resetForm();
 }
 
 //reset the data
 function resetForm(){
    document.getElementById('projectNumber').value = '';
    document.getElementById('projectName').value = '';
    document.getElementById('DateOfStart').value = '';
    document.getElementById('DateOfComplete').value = '';
 }

