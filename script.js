function run() {
  let button = document.getElementById('run');
  let input = document.getElementById('code');
  button.disabled = true;
  input.disabled = true;
  let code = input.value;
  let worker = new Worker('worker.js');
  worker.onmessage = function(e) {
    document.getElementById('output').value = e.data;
    button.disabled = false;
    input.disabled = false;
  }
  worker.postMessage(code);
}