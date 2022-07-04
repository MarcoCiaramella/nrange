# nrange
Sequence number generator in javascript
## Install
```
npm i @marco_ciaramella/nrange
```
## Usage
```javascript
console.log(nrange(0, 5)); // [0, 1, 2, 3, 4, 5]
console.log(nrange(1, 7, 3)); // [1, 4, 7]
console.log(nrange(5, 0)); // [5, 4, 3, 2, 1, 0]
console.log(nrange(6, 1, -3)); // [6, 3]
console.log(nrange(3, 5, 0)); // error "step must be !== 0"
console.log(nrange(5, 3, 1)); // error "step must be negative"
console.log(nrange(0, 5, -1)); // error "step must be positive"
// float also
console.log(nrange(6.3, 1.5, -3.2)); // [6.3, 3.1]
```
