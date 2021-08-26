const request = require('request');

const fetchBreedDescription = (breed, callback) => {
  request('https://api.thecatapi.com/v1/breeds/search?q=' + breed, {json: true}, (err, res, body) => {
    if (err) {
      return callback(err);
    }

    if (JSON.stringify(body) === JSON.stringify([])) {
      return callback('Breed not available/found');
    }

    return callback(err, body[0].description);
  });
};

module.exports = { fetchBreedDescription };

