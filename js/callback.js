function greeting(name) {
    console.log("inside greeting");
    console.log('Hello ' + name);
  }
  
  function processUserInput(callback) {
      console.log("inside pui");
    var name = "shaibalini";
    callback(name);
  }
  
  processUserInput(greeting);