const breed = process.argv[2];

const { fetchBreedDescription } = require('./breedFetcher');


fetchBreedDescription(breed, (error, desc) => {
  if (error) {
    console.log('Following Error Occured: ', error);
    return;
  }

  console.log(desc);
});