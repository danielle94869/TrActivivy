function calc() {
    document.getElementById("total").innerHTML = "$" + Number(total)
    document.getElementById('income').value = ''
    document.getElementById('expenses').value = ''
    
    let income = Number(document.getElementById('income').value)
    let expense = Number(document.getElementById('expense').value)
    let total = income - expenses  
  }
  calc()

