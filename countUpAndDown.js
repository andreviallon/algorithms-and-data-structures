function countUpAndDown(n) {
  console.log("Going up");
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
  console.log("At the top! Now going down");
  for (let j = 0; j < n; j++) {
    console.log(j);
  }
  console.log("Done!");
}

countUpAndDown(10);
