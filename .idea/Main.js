function deleteRow() {
    var e = document.getElementById("del")
    if (confirm('Удалить?')) {
        e.style.display = 'none';
    }
}

function deleteRow2() {
    var e = document.getElementById("del2")
    if (confirm('Удалить?')) {
        e.style.display = 'none';
    }
}

function deleteRow3() {
    var e = document.getElementById("del3")
    if (confirm('Удалить?')) {
        e.style.display = 'none';
    }
}

function deleteRow4() {
    var e = document.getElementById("del4")
    if (confirm('Удалить?')) {
        e.style.display = 'none';
    }
}

function deleteRow5() {
    var e = document.getElementById("del5")
    if (confirm('Удалить?')) {
        e.style.display = 'none';
    }
}

function deleteRow6() {
    var e = document.getElementById("del6")
    if (confirm('Удалить?')) {
        e.style.display = 'none';
    }
}

function deleteRow7() {
    var e = document.getElementById("del7")
    if (confirm('Удалить?')) {
        e.style.display = 'none';
    }
}

function deleteRow8() {
    var e = document.getElementById("del8")
    if (confirm('Удалить?')) {
        e.style.display = 'none';
    }
}

function deleteRow9() {
    var e = document.getElementById("del9")
    if (confirm('Удалить?')) {
        e.style.display = 'none';
    }
}

function deleteRow10() {
    var e = document.getElementById("del10")
    if (confirm('Удалить?')) {
        e.style.display = 'none';
    }
}

function outputLastNameOnTwoList()
{
    let lastName = document.getElementById("pName").value;
    localStorage.setItem("lastName", lastName);
    return false;
}

document.forms.searchNumber.onsubmit = function() {
    let inputNum = this.inputNumber.value;
    parseInt(inputNum, 10);
    if (isNaN(inputNum) || inputNum == 0)
        alert("Введите число");
    else
        console.log(inputNum);
    return false;
};

