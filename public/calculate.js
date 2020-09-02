document.getElementById('calculate').addEventListener('click', event => {
  // console.log(document.getElementById('userName').value)
  axios.get(`api/users/${localStorage.getItem('tempName')}`, (req, res) => {
    // console.log(res.data)
    // console.log(req.data)
  })
    .then(
      user => console.log(user))
    .catch(err => console.log(err))
})

// axios.get activities -> append to page -> axios.get user with userId -> append to page
