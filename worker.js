onerror = function(err) {
  postMessage(err.message);
}

onmessage = function(e) {
  postMessage(eval(e.data));
}
