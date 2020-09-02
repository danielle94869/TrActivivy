document.getElementById('calculate').addEventListener('click', event => {
  // console.log(document.getElementById('userName').value)
  axios.get(`api/users/${document.getElementById('userName').value}`, (req, res) => {
    // console.log(res.data)
    // console.log(req.data)
  })
    .then(
      user => console.log(user))
    .catch(err => console.log(err))
})