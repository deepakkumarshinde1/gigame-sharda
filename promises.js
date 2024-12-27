async function div() {
  //return Promise.resolve("This is resolve");
  return Promise.reject("This is rejected");
}

console.log("--- start ----");

// div()
//   .then(function (data) {
//     console.log(data);
//   })
//   .catch(function (error) {
//     console.error(error);
//   });

console.log("--- end ----");

console.clear();

async function p1() {
  return Promise.reject("P1 Resolve");
}

async function p2() {
  return Promise.reject("P2 resolve");
}

async function p3() {
  return Promise.resolve("P3 Resolve");
}

async function p4() {
  return Promise.resolve("P4 Resolve");
}

async function runPromise() {
  try {
    let list = await Promise.allSettled([p1(), p2(), p3(), p4()]);
    console.log(list);
    // let p1Result = await p1();
    // let p2Result = await p2();
    // let p3Result = await p3();
    // let p4Result = await p4();
    // console.log(p1Result);
    // console.log(p2Result);
    // console.log(p3Result);
    // console.log(p4Result);
  } catch (error) {
    console.error(error);
  }
}

runPromise();
