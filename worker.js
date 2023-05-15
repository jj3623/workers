onerror = function(e) {
  e.preventDefault();
  postMessage(e.message);
}

onmessage = async function(e) {
  let evaled = eval(e.data);
  if(typeof evaled === 'object') {
    if(evaled instanceof Promise) {
      evaled = await evaled;
    }
    if(typeof evaled === 'object') {
      evaled = JSON.stringify(evaled);
    }
  }
  evaled = evaled.toString();
  postMessage(evaled);
}
