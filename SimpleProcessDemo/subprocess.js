
const fib = (n) => {
  if (n === 1 || n === 2) {
    return 1
  }
  return fib(n - 1) + fib(n - 2);
}

process.on('message', (msg) => {
  console.log('child' + process.pid);
  process.send({
    result: fib(msg.value),
  })
})