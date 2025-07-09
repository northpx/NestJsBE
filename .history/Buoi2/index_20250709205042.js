console.log("Start");
setTimeout(() => {
  console.log("Async Task"); // Thực hiện sau
}, 2000);
console.log("End");

function fetchData(callback) {
  setTimeout(() => {
    console.log("Data fetched");
    callback(); // Gọi hàm callback sau khi hoàn thành
  }, 2000);
}
fetchData(() => {
  console.log("Process completed");
});


