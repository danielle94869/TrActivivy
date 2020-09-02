<<<<<<< HEAD
function calc() {
    document.getElementById("total").innerHTML = "$" + Number(total)
    document.getElementById('income').value = ''
    document.getElementById('expenses').value = ''
    
    let income = Number(document.getElementById('income').value)
    let expense = Number(document.getElementById('expense').value)
    let total = income - expenses  
  }
  calc()

=======
// const { User } = require('../models/user.js')
document.getElementById('create').addEventListener('click', event => {
  axios.post('/api/users', {
    name: document.getElementById('full_name').value
  }).then(res =>
    axios.post('/api/activities', {
      name: document.getElementById('activity').value,
      cost: document.getElementById('cost').value,
      userId: res.data.id
    }).then(data => console.log(data)))
    .catch(err => console.log(err)
    )
    .catch(err => console.log(err))
})

// document.getElementById('addGrocery').addEventListener('click', event => {
//   event.preventDefault()

//   axios.post('/api/groceries', {
//     name: document.getElementById('product').value,
//     quantity: document.getElementById('quantity').value,
//     cost: document.getElementById('cost').value,
//     purchased: false
//   })
//     .then(({ data }) => {
//       const groceryElem = document.createElement('li')
//       groceryElem.className = 'list-group-item'
//       groceryElem.id = data.id
//       groceryElem.innerHTML = `
//        <div class="d-flex w-100 justify-content-between">
//          <h5 class="mb-1">${document.getElementById('product').value}</h5>
//          <button
//           data-name="${document.getElementById('product').value}"
//           data-quantity="${document.getElementById('quantity').value}"
//           data-cost="${document.getElementById('cost').value}"
//           class="purchase btn btn-success">✓</button>
//        </div>
//        <p class="mb-1">Quantity: ${document.getElementById('quantity').value}</p>
//        <small>Price: $${document.getElementById('cost').value}</small>
//       `
//       document.getElementById('notPurchased').append(groceryElem)

//       document.getElementById('product').value = ''
//       document.getElementById('quantity').value = ''
//       document.getElementById('cost').value = ''
//     })
//     .catch(err => console.error(err))
// })

// document.addEventListener('click', event => {
//   if (event.target.classList.contains('purchase')) {
//     axios.put(`/api/groceries/${event.target.parentNode.parentNode.id}`, {
//       purchased: true
//     })
//       .then(() => {
//         const groceryElem = document.createElement('li')
//         groceryElem.className = 'list-group-item'
//         groceryElem.id = event.target.parentNode.parentNode.id
//         groceryElem.innerHTML = `
//        <div class="d-flex w-100 justify-content-between">
//          <h5 class="mb-1">${event.target.dataset.name}</h5>
//          <button class="btn btn-danger remove">X</button>
//        </div>
//        <p class="mb-1">Quantity: ${event.target.dataset.quantity}</p>
//        <small>Price: $${event.target.dataset.cost}</small>
//       `
//         document.getElementById('purchased').append(groceryElem)
//         event.target.parentNode.parentNode.remove()
//       })
//       .catch(err => console.error(err))
//   } else if (event.target.classList.contains('remove')) {
//     axios.delete(`/api/groceries/${event.target.parentNode.parentNode.id}`)
//       .then(() => {
//         event.target.parentNode.parentNode.remove()
//       })
//       .catch(err => console.error(err))
//   }
// })

// //   if (op === 'add') {
// //     let sum = parseInt(a) + parseInt(b)
// //     alert(a + b)
// //   }
>>>>>>> 7ce13898c91439f11a6f52b9c10b3425cc45bd85
