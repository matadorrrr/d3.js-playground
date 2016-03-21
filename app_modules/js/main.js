(function(){
  
  var Vue = require("vue");
  
  var shellComponent = require(__dirname + "/../vue/shell.vue");
  var shellVM = new Vue(shellComponent);
  
  setTimeout(function(){
    shellVM.$mount("#shell"); 
  }, 500);
  
})();