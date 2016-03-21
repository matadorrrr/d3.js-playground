const setStyle = function(css, id){
  var head = document.getElementsByTagName("head").item(0);
  var style = document.createElement("style");
  var rule = document.createTextNode(css);
  style.media = "screen";
  style.type = "text/css";
  style.id = id;
  style.appendChild(rule);
  head.appendChild(style);
};

const removeStyle = function(id){
  var style = document.querySelector("#" + id);
  if(style){
    style.parentNode.removeChild(style);
  }
};

const setJs = function(js, js_ext_data){
  var script = document.createElement('script');
  script.id = "execJs";
  var ext_data = "$data=" + JSON.stringify(js_ext_data) + ";";
  script.innerHTML = ext_data + js;
  document.body.appendChild(script);
};

const removeJs = function(){
  var js = document.querySelector("#execJs");
  if(js){
    js.parentNode.removeChild(js);
  }  
}

module.exports = {
  setStyle: setStyle,
  removeStyle: removeStyle,
  setJs: setJs,
  removeJs: removeJs
};