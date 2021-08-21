function addUpTo2(n) {
  return (n * (n + 1)) / 2;
}

let t1 = Date.now();
addUpTo2(1000000000);
let t2 = Date.now();
console.log(`Time Elapsed: ${(t1 - t2) / 1000} seconds.`);
