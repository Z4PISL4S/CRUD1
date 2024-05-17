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
    formData["poke"] = document.getElementById("poke").value;
    formData["tipo"] = document.getElementById("tipo").value;
    formData["ataque"] = document.getElementById("ataque").value;
    formData["des"] = document.getElementById("des").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.poke;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.tipo;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.salary;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.des;
    cell4 = newRow.insertCell(4);
    cell4.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
}

function resetForm() {
    document.getElementById("poke").value = "";
    document.getElementById("tipo").value = "";
    document.getElementById("ataque").value = "";
    document.getElementById("des").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("poke").value = selectedRow.cells[0].innerHTML;
    document.getElementById("tipo").value = selectedRow.cells[1].innerHTML;
    document.getElementById("ataque").value = selectedRow.cells[2].innerHTML;
    document.getElementById("des").value = `<a href="${selectedRow.cells[3].innerHTML}">${selectedRow.cells[3].innerHTML}</a>`;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.poke;
    selectedRow.cells[1].innerHTML = formData.tipo;
    selectedRow.cells[2].innerHTML = formData.ataque;
    selectedRow.cells[3].innerHTML = formData.des;
}

function onDelete(td) {
    if (confirm('Seguro que quieres eliminar este Pokémon ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("employeeList").deleteRow(row.rowIndex);
        resetForm();
    }
}
function validate() {
    isValid = true;
    if (document.getElementById("poke").value == "") {
        isValid = false;
        document.getElementById("pokeValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("pokeValidationError").classList.contains("hide"))
            document.getElementById("pokeValidationError").classList.add("hide");
    }
    return isValid;
}
