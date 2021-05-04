# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @feliciaokta/lotide`

**Require it:**

`const _ = require('@feliciaokta/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head()`: display the first element in an array.
* `tail()`: display all elements in an array except the first one.
* `middle()`: display the element in the middle index of an array. If the total amount of index is odd, the middle index is ((i + 1) / 2). If the amount of index is even, the middle index is (i / 2) AND (i / 2) + 1.