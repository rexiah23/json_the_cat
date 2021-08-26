const { fetchBreedDescription } = require('../breedFetcher');
const { assert } = require('chai');

describe('breedFetcher.js', () => {

  it('returns a string description for a valid breed, via callback', (done) => {
    fetchBreedDescription('Siberian', (err, desc) => {
      //Expect no errors
      assert.equal(err,null);

      const expectedDesc = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.";

      //Expect expectedDesc to equal desc
      assert.equal(expectedDesc, desc.trim());
      done();
    });
  });

  it('logs an error for an invalid breed, via callback', (done) => {
    fetchBreedDescription('Siberian23', (err, desc) => {
      assert.notEqual(err,null);
      done();
    });
  });
});