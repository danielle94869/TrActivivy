<p>
      <label for="activity">activity</label>
      <select name="activity" id="activity">
        <option value="null">Select a bean</option>
      </select>
    </p>

<p>
<label for="cost">cost</label>
<select name="cost" id="cost">
  <option value="null">Select a syrup</option>
</select>
</p>
<p>
<label for="topping">topping</label>
<select name="income" id="income">
  <select name="expense" id="expense"></select>
  <option value="null">Select a topping</option>
</select>
</p>



// let activityId = parseInt(document.getElementById('activity').options[document.getElementById('activity').selectedIndex].value)

      // let syrupId = parseInt(document.getElementById('syrup').options[document.getElementById('syrup').selectedIndex].value)
      // let toppingId = parseInt(document.getElementById('topping').options[document.getElementById('topping').selectedIndex].value)

    //   axios.post('/api/drinks', { name, beanId, syrupId, toppingId })
    //     .then(({ data }) => {
    //       let drinkElem = document.createElement('li')
    //       drinkElem.innerHTML = `
    //         <p>Drink: ${data.name}</p>
    //         <p>Bean: ${data.bean.name}</p>
    //         <p>Caffeine (mg): ${data.bean.caffeine}</p>
    //         <p>Syrup: ${data.syrup.name}</p>
    //         <p>Carbs (g): ${data.syrup.carbs}</p>
    //         <p>Topping: ${data.topping.name}</p>
    //         <p>Topping Type: ${data.topping.type}</p>
    //         <hr>
    //       `
    //       document.getElementById('drinks').prepend(drinkElem)
    //     })
    //     .catch(err => console.error(err))
    // })

    // axios.get('/api/drinks')
    //   .then(({ data }) => {
    //     console.log(data)
    //     data.forEach(drink => {
    //       let drinkElem = document.createElement('li')
    //       drinkElem.innerHTML = `
    //         <p>Drink: ${drink.name}</p>
    //         <p>Bean: ${drink.bean.name}</p>
    //         <p>Caffeine (mg): ${drink.bean.caffeine}</p>
    //         <p>Syrup: ${drink.syrup.name}</p>
    //         <p>Carbs (g): ${drink.syrup.carbs}</p>
    //         <p>Topping: ${drink.topping.name}</p>
    //         <p>Topping Type: ${drink.topping.type}</p>
    //         <hr>
    //       `
    //       document.getElementById('drinks').prepend(drinkElem)
    //     })
    //   })
    //   .catch(err => console.error(err))

    // axios.get('/api/beans')
    //   .then(({ data }) => {
    //     console.log(data)
    //     data.forEach(bean => {
    //       let beanElem = document.createElement('option')
    //       beanElem.value = bean.id
    //       beanElem.textContent = bean.name
    //       document.getElementById('bean').append(beanElem)
    //     })
    //   })
    //   .catch(err => console.error(err))

    // axios.get('/api/syrups')
    //   .then(({ data }) => {
    //     console.log(data)
    //     data.forEach(syrup => {
    //       let syrupElem = document.createElement('option')
    //       syrupElem.value = syrup.id
    //       syrupElem.textContent = syrup.name
    //       document.getElementById('syrup').append(syrupElem)
    //     })
    //   })
    //   .catch(err => console.error(err))

    // axios.get('/api/toppings')
    //   .then(({ data }) => {
    //     console.log(data)
    //     data.forEach(topping => {
    //       let toppingElem = document.createElement('option')
    //       toppingElem.value = topping.id
    //       toppingElem.textContent = topping.name
    //       document.getElementById('topping').append(toppingElem)
    //     })
    //   })
    //   .catch(err => console.error(err))
