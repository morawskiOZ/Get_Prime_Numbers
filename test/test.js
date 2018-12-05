const assert = require('assert');
const isPrime = require('../handlers/isPrime');

it('correctly check that -1 is not a prime number', () => {
	assert.equal(isPrime.isPrime(-1), false);
});

it('correctly check that 0 is not a prime number', () => {
	assert.equal(isPrime.isPrime(0), false);
});

it('correctly check that 1 is not a prime number', () => {
	assert.equal(isPrime.isPrime(1), false);
});

it('correctly check that 2 is a prime number', () => {
	assert.equal(isPrime.isPrime(2), true);
});

it('correctly check that 7 is a prime number', () => {
	assert.equal(isPrime.isPrime(7), true);
});
it('correctly check that 2.4 is not a prime number', () => {
	assert.equal(isPrime.isPrime(2.4), false);
});

it('correctly check that "lol" is not a prime number', () => {
	assert.equal(isPrime.isPrime("lol"), false);
});

it('correctly check that {} is not a prime number', () => {
	assert.equal(isPrime.isPrime({}), false);
});

it('correctly check that [] is not a prime number', () => {
	assert.equal(isPrime.isPrime([]), false);
});

it('correctly check that 524287 no is a prime number', () => {
	assert.equal(isPrime.isPrime(524287), true);
});
