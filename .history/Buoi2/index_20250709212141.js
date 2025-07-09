// console.log("Start");
// setTimeout(() => {
//   console.log("Async Task"); // Thực hiện sau
// }, 2000);
// console.log("End");

// function fetchData(callback) {
//   setTimeout(() => {
//     console.log("Data fetched");
//     callback(); // Gọi hàm callback sau khi hoàn thành
//   }, 2000);
// }
// fetchData(() => {
//   console.log("Process completed");
// });


// function step1(data, callback) {
//   setTimeout(() => {
//     console.log("Step 1 complete");
//     callback(null, data + 1);
//   }, 1000);
// }

// function step2(data, callback) {
//   setTimeout(() => {
//     console.log("Step 2 complete");
//     callback(null, data + 1);
//   }, 1000);
// }

// function step3(data, callback) {
//   setTimeout(() => {
//     console.log("Step 3 complete");
//     callback(null, data + 1);
//   }, 1000);
// }

// step1(0, (err, result1) => {
//   step2(result1, (err, result2) => {
//     step3(result2, (err, result3) => {
//       console.log("Final result:", result3);
//     });
//   });
// });

// function fetchData() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const success = true;
//       if (success) resolve("Data fetched successfully");
//       else reject("Failed to fetch data");
//     }, 2000);
//   });
// }

// fetchData()
//   .then((result) => console.log(result))
//   .catch((error) => console.error(error));

function step1(data) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Step 1 complete");
      resolve(data + 1);
    }, 1000);
  });
}

function step2(data) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Step 2 complete");
      resolve(data + 1);
    }, 1000);
  });
}

function step3(data) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Step 3 complete");
      resolve(data + 1);
    }, 1000);
  });
}

step1(0)
  .then((result1) => step2(result1))
  .then((result2) => step3(result2))
  .then((finalResult) => console.log("Final result:", finalResult))
  .catch((error) => console.error("Error:", error));


step1(0).then((result1) => {
  step2(result1).then((result2) => {
    step3(result2).then((finalResult) => {
      console.log("Final result:", finalResult);
    });
  });
});

function step1(data) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Step 1 complete");
      resolve(data + 1);
    }, 1000);
  });
}

function step2(data) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Step 2 complete");
      resolve(data + 1);
    }, 1000);
  });
}

function step3(data) {
      console.log("Step 3 complete");
 return data + 1;
}


async function processSteps() {
  try {
    const result1 = await step1(0);
    const result2 = await step2(result1);
    const finalResult = await step3(result2);
    console.log("Final result:", finalResult);
  } catch (error) {
    console.error("Error:", error);
  }
}
processSteps();


