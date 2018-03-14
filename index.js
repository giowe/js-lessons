const fetch = require('node-fetch');

fetch('https://jsonplaceholder.typicode.com/posts')
  .then(res => {
    if (res.status === 200) {
      return res.json();
    } else {
      return res.json();
    }
  })
  .then(body => {
    console.log(body[0] );
  })
  .catch(console.log)