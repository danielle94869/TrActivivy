// const { lte } = require("sequelize/types/lib/operators");

document.getElementById('calculate').addEventListener('click', event => {
  // console.log(document.getElementById('userName').value)
  axios.get(`api/users/${localStorage.getItem('tempName')}`, (req, res) => {
    // console.log(res.data)
    // console.log(req.data)
  })
    .then(
      user => {
        const budget = document.getElementById('budget').innerHTML
        const income = parseInt(localStorage.getItem('tempIncome'))
        const expense = parseInt(localStorage.getItem('tempIncome')) - document.getElementById('budget').innerHTML
        const activityCost = parseInt(document.getElementById('activity-cost').innerHTML)
        const remaining = income - expense - activityCost
        if (activityCost <= budget) {
          document.getElementById('advice').innerHTML = `
        <div class="row">
      <div class="col s12 m6">
        <div class="card red lighten-2">
          <div class="card-content white-text">
            <span class="card-title">According to our calculations...</span>
            <p>We advise that you can do this activity.</p>
          </div>
          <div class="card-action">
            <a href="./activity.html">View Activities Page</a>
          </div>
        </div>
      </div>
    </div>
        `
        } else {
          document.getElementById('advice').innerHTML = `
        <div class="row">
      <div class="col s12 m6">
        <div class="card red lighten-2">
          <div class="card-content white-text">
            <span class="card-title">According to our calculations...</span>
            <p>We advise that you should not do this activity.</p>
          </div>
          <div class="card-action">
            <a href="./activity.html">View Activities Page</a>
          </div>
        </div>
      </div>
    </div>
        `
        }
        console.log(user)
        console.log(parseInt(localStorage.getItem('tempIncome')))
        console.log(parseInt(document.getElementById('budget').innerHTML))
        console.log(parseInt(document.getElementById('activity-cost').innerHTML))

        const ctx = document.getElementById('myChart')
        const myChart = new Chart(ctx, {
          type: 'pie',
          data: {
            labels: ['Remaining', 'Expenses', 'Activity Cost'],
            datasets: [{
              data: [
                remaining,
                expense,
                activityCost
              ],
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(75, 192, 192, 0.2)'

              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(75, 192, 192, 1)'

              ],
              borderWidth: 1
            }]
          },
          options: {
            responsive: true,
            legend: {
              position: 'bottom'
            },
            plugins: {
              datalabels: {
                color: '#fff',
                anchor: 'end',
                align: 'start',
                offset: -10,
                borderWidth: 2,
                borderColor: '#fff',
                borderRadius: 25
              }
            }
          }
        })
      })
    .catch(err => console.log(err))
})

// axios.get activities -> append to page -> axios.get user with userId -> append to page
