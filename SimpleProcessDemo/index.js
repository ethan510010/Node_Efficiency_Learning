const http = require('http');
// start a new child process
const childProcess = require('child_process');

http.createServer((req, res) => {
  console.log('master' + process.pid);

  const child = childProcess.fork('./subprocess.js');
  child.send({ value: 45 });
  child.on('message', (msg) => {
    res.writeHead(200);
    res.write(msg.result.toString());
    res.end();
  })
}).listen(3000, (err) => {
  console.log('started');
})