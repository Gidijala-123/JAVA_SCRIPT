const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    let success = true;
    if (success) {
      resolve("Data fetched sucessfully");
    } else {
      reject("Data rejected..!");
    }
  }, 2000);
})
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });
