const request = require('request');
const [ breed ] = process.argv.slice(2);

request('https://api.tecatapi.com/v1/breeds/search?q=' + breed, {json: true}, (err, res, body) => {
  if (err) {
    console.log('this ran');
    if (err.errno === -3008) {
      console.log('ERROR IS :', err);
    }

    return;
  }

  if (JSON.stringify(body) === JSON.stringify([])) {
    console.log('Breed is not found');
    return;
  }

  console.log(body[0]['description']);
});