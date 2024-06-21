async function main() {
  const res1 = await delayTime()
  console.log(res1);
  const res2 = await delayTime()
  console.log(res2);
  const res3 = await delayTime()
  console.log(res3);
  const res4 = await delayTime()
  console.log(res4);
  const res5 = await delayTime()
  console.log(res5);
}
async function delayTime() {
  await new Promise((resolve) => {
    setTimeout(resolve, 1000)
  })
  return "hello"
}
main()
