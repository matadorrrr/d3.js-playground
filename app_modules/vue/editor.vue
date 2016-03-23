<style>
  .editor-fill, #_editor{
    position: absolute;
    top:0; left:0; right:0; bottom:0;
    display:inline-block;
  }
</style>

<template>
  <div class="editor-fill">
    <div id="_editor"></div>
  </div>
</template>

<script>
  import Util from "./../js/my-util.js";
  import Text from "./../js/editor-text.js";
  import _ from "lodash";
  export default {
    data:{
      editor: null,
      status: {
        js: { isActive: false, text: Text.js },
        css: { isActive: false, text: Text.css },
        $data: { isActive: false, text: Text.$data }
      }
    },
    ready: function(){
      this.__initEditor();
      this.showField("js");
      this.revertAll();
    },
    methods:{
      showField: function(fieldName){
        this.status.js.isActive =
        this.status.css.isActive = 
        this.status.$data.isActive = false;
        this.status[fieldName].isActive = true;
        this.editor.setValue(this.status[fieldName].text, -1);
        if(fieldName == "css"){
          this.editor.getSession().setMode("ace/mode/css");
        }else{
          this.editor.getSession().setMode("ace/mode/javascript");
        }
      },
      readField: function(fieldName){
        return this.status[fieldName].text;
      },
      writeField: function(fieldName, text){
        this.status[fieldName].text = text;
      },
      saveAll: function(){
        var time = Util.formatDate(new Date());
        var texts = {
          js: this.status.js.text,
          css: this.status.css.text,
          $data: this.status.$data.text
        }
        localStorage.setItem("editor_texts", JSON.stringify(texts));
        localStorage.setItem("saved_time", time);
        return time;
        
      },
      revertAll: function(){
        var texts = JSON.parse(localStorage.getItem("editor_texts"));
        if(texts){
          this.status.js.text = texts.js;
          this.status.css.text = texts.css;
          this.status.$data.text = texts.$data;
          var activeField = this.whatisActive();
          this.editor.setValue(this.status[activeField].text, -1);
        }
        return localStorage.getItem("saved_time");
      },
      emptyAll: function(){
        this.status.js.text = " ";
        this.status.css.text = " ";
        this.status.$data.text = " ";
        this.editor.setValue(" ", -1);
      },
      whatisActive: function(){
        return _.findKey(this.status, (o) => {
          return o.isActive;
        });
      },
      __initEditor: function(){
        this.editor = ace.edit("_editor");
        this.editor.$blockScrolling = Infinity;
        this.editor.setTheme("ace/theme/vibrant_ink");
        this.editor.setOptions({
          enableBasicAutocompletion: true,
          enableSnippets: true,
          enableLiveAutocompletion: true
        });
        this.editor.setFontSize(12);
        this.editor.getSession().setUseWrapMode(true);
        this.editor.getSession().setTabSize(2);
        this.editor.on("change", (e) => {
          var activeField = this.whatisActive();
          this.status[activeField].text = this.editor.getValue();
        });           
      }
    }
  };
</script>