async function run() {
  const result1 = await delayTime();
  console.log(result1);
  const result2 = await delayTime();
  console.log(result2);
  const result3 = await delayTime();
  console.log(result3);
}

async function delayTime() {
  await new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });
  return "Done";
}
run();
