const table = document.getElementById('expanse');
const saveMoney = document.getElementById('savedMoney')
const totalExpanseAmount = document.getElementById('totalExpanseAmount')

function addExpanseRow(){
    
    const getExpanseName = document.getElementById('expanseName').value;
    const getExpanseAmount = document.getElementById('expanseAmount').value;
    const error = document.getElementsByClassName('error')[0];

    if(Number(saveMoney.innerHTML) < getExpanseAmount) {
        document.getElementById('expanseName').value = ""
        document.getElementById('expanseAmount').value =""
        error.style.display ="block"
        return error.innerHTML = " expanse is greter then  total saving , it's not posible"
    }

    error.style.display ="none"

    var row = table.insertRow(1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
  
    cell1.innerHTML = getExpanseName;
    cell2.innerHTML = getExpanseAmount;
    cell3.innerHTML = `<button onclick = "deleteRow(event)">Remove</button>`
    
    totalExpanseAmount.innerHTML = `${Number(totalExpanseAmount.innerHTML) + Number(getExpanseAmount)}.00`
    saveMoney.innerHTML =`${Number(saveMoney.innerHTML) -Number(getExpanseAmount)}.00`;
    document.getElementById('expanseName').value = ""
    document.getElementById('expanseAmount').value =""
    
}

function deleteRow(e){
    totalExpanseAmount.innerHTML = Number(totalExpanseAmount.innerHTML) -Number(e.target.previousSibling.innerHTML)
    saveMoney.innerHTML = Number(saveMoney.innerHTML) + Number(e.target.previousSibling.innerHTML)
    e.target.parentNode.remove()
}