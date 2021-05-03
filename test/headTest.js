const assertEqual = require('../assertEqual');
const head = require('../head');

// head.js
assertEqual(head([5,6,7]), 7);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
