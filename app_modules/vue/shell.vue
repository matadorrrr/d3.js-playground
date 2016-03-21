<style lang="sass" scoped>
  .shell-container{
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    background-color: #37474F;
  }
  
  $header_height: 50px;
  .shell-header{
    position: absolute;
    top: 0; left: 0; right: 0;
    height: $header_height - 1;
    border-bottom: solid 1px black;
    background-color: transparent;
    
    .shell-title{
      display: inline-block;
      width: 170px;
      height: $header_height - 1;
      line-height: $header_height - 1;
      color: #fefefe;
      padding-left: 14px;
      font-size: 14px;
      font-weight: bold;
      float: left;
    }
    
    .shell-save, .shell-reload, .shell-help{
      display: inline-block;
      height: $header_height - 1;
      line-height: $header_height - 1;
      width: 70px;
      float: right;
      border-left: solid 1px black;
      box-shadow: 1px 0px 1px 0px rgba(200, 200, 200, .3) inset;
      color: #fefefe;
      text-align: center;
      &:hover{
        cursor: pointer;
        background-color: #455A64;
      }
      &:active{
        box-shadow: 1px 0px 10px 0px rgba(0, 0, 0, .4) inset;
      }
    }
    
    .shell-header-space{
      display: inline-block;
      height: $header_height - 1;
      line-height: $header_height - 1;    
      width: 25px;
      float: right;    
    }
    .shell-status{
      display: inline-block;
      height: $header_height - 1;
      line-height: $header_height - 1;
      width: 400px;
      float: right;
      color: #fefefe;
      text-align: right;
      color: #90A4AE;
    }
  }
  
  .shell-body{
    position: absolute;
    top: $header_height; bottom: 0; left: 0; right: 0;
    box-shadow: 0 1px 1px 0px rgba(200, 200, 200, .3) inset;
    
    .shell-input{
      position: absolute;
      top: 0; left: 0; bottom: 0;
      width: 50%;
      overflow: auto;
      
      .shell-selector{
        position: absolute;
        top: 10px; left: 10px; right: 5px;
        height: 50px;
        overflow: none;
        &:hover{
          overflow: auto;
        }
      }
      
      $selectors-padding: 10px;
      .shell-selector-button{
        position: absolute;
        top: $selectors-padding; 
        left: 0;
        /*right: $selectors-padding;*/
        bottom: $selectors-padding;
        border-radius: 3px;
        background-color: #263238;
        border: solid 1px black;
        width: 302px;
        display: table;
        
        .shell-selector-button-data, 
        .shell-selector-button-css, 
        .shell-selector-button-js{
          display: table-cell;
          vertical-align: middle;
          height: 30px;
          width: 100px;
          text-align: center;
          color: #dedede;
          font-weight: bold;
          box-shadow: 1px 1px 1px 0 rgba(200, 200, 200, .3) inset;
          &:hover{
            cursor: pointer;
            background-color: #37474F;
          }
          &:active{
            box-shadow: 1px 0px 7px 0px rgba(0, 0, 0, .4) inset;
          }
        }
        .shell-selector-button-js{
          border-right: solid 1px black;
        }
        .shell-selector-button-css{
          border-right: solid 1px black;
        }
        .shell-selector-active{
          color: #E91E63;
        }
      }
     
      .shell-editor-empty{
        position: absolute;
        height: 30px;
        top: $selectors-padding;
        left: 320px;
        bottom: $selectors-padding;
        width: 100px;
        border-radius: 3px;
        background-color: #263238;
        border: solid 1px black;
        box-shadow: 1px 1px 1px 0 rgba(200, 200, 200, .3) inset;
        text-align: center;
        line-height: 30px;
        &:hover{
          cursor: pointer;
          background-color: #37474F;
        }
        &:active{
          box-shadow: 1px 0px 7px 0px rgba(0, 0, 0, .4) inset;
        }    
      } 
      
      .shell-editor{
        position: absolute;
        top: 60px; left: 10px; right: 5px; bottom: 10px;
        background-color: #111;
        border-radius: 3px;
        border: solid 1px black;
      }
    }
    
    .shell-output{
      position: absolute;
      top: 0; bottom: 0; right: 0;
      width: 50%;
      overflow: auto;
      
      .shell-render{
        position: absolute;
        top: 10px; left: 0px; right: 0px;
        height: 50px;
        
        .shell-render-button{
          position: absolute;
          top: 10px; left: 5px; right: 10px; bottom: 10px;
          height: 30px;
          line-height: 30px;
          border-radius: 3px;
          background-color: #263238;
          border: solid 1px black;
          width: 100px;
          color: #009688;
          text-align: center;
          line-height: 30px;
          box-shadow: 1px 1px 1px 0 rgba(200, 200, 200, .3) inset;
          &:hover{
            cursor: pointer;
            background-color: #37474F;
          }
          &:active{
            box-shadow: 1px 0px 7px 0px rgba(0, 0, 0, .4) inset;
          }    
        }
      }
      
      .shell-view-description{
        position: absolute;
        top: 10px; right: 15px; bottom: 0;
        height: 50px;
        line-height: 50px;
        color: #B0BEC5;
      }
      
      .shell-view{
        position: absolute;
        top: 60px; left: 5px; right: 10px; bottom: 10px;
        overflow: hidden;
        border-radius: 3px;
        
        .shell-d3-frame{
          position: relative;
          width: 100%;
          height: 50%;
          background-color: #ECEFF1;
          border-radius: 3px;
          box-shadow: 0 1px 10px 0px rgba(0, 0, 0, .6);
          display: inline-block;
          color: #CFD8DC;
          line-height: 35px;
          span{
            margin-left: 10px;
            color: #546E7A;
            font-weight: bold;
          }
        
          .shell-d3{
            position: absolute;
            display: inline-block;
            top: 35px; left: 0px; right: 0px; bottom: 0px;
            background-color: #ECEFF1;
            border-bottom-left-radius: 3px;
            border-bottom-right-radius: 3px;
            overflow: hidden;
            box-shadow: 0 3px 9px 0px rgba(0, 0, 0, .1) inset;
            &:hover{
              overflow: auto;
            }
          }
        }
        
        .shell-log{
          position: relative;
          width: 100%;
          background-color: #263238;
          border-radius: 3px;
          margin-top: 10px;
          height: 50%;
          display: inline-block;
          word-wrap: break-word;
          overflow: hidden;
          &:hover{
            overflow: auto;
          }
        }
      }
    }
  }
  .shell-modal{
    height: 70%;
    width: 40%;
    min-width: 400px;
    background-color: #ECEFF1;
    display: none;
    border-radius: 3px;
    box-shadow: 0 10px 28px rgba(0,0,0,.3);
  }
</style>

<template>
  <div class="shell-container">
    <div class="shell-header">
      <div class="shell-title">D3.js Playground</div>
      <div class="shell-help" @click="help">
        <i class="fa fa-question fa-lg"></i>
      </div>   
      <div class="shell-save" @click="save">
        <i class="fa fa-floppy-o fa-lg"></i>
      </div>
      <div class="shell-reload" @click="reload">
        <i class="fa fa-retweet fa-lg"></i>
      </div>
      <div class="shell-header-space"></div>
      <div class="shell-status" v-if="isUpdateStatus">{{statusMessage}}</div>
    </div>
    <div class="shell-body">
      <div class="shell-input">
        <div class="shell-selector">
          <div class="shell-selector-button">
            <div class="shell-selector-button-js" @click="showJs"
              :class="{'shell-selector-active': editorStatus.js.isActive}">
              .js
            </div>
            <div class="shell-selector-button-css" @click="showCss" 
              :class="{'shell-selector-active': editorStatus.css.isActive}">
              .css
            </div>
            <div class="shell-selector-button-data" @click="showData" 
              :class="{'shell-selector-active': editorStatus.$data.isActive}">
              $data
            </div>
          </div>
          <div class="shell-editor-empty" @click="empty">
            <i class="fa fa-trash"></i>
          </div>
        </div>
        <div class="shell-editor" id="editor">
        </div>
      </div>
      <div class="shell-output">
        <div class="shell-render">
          <div class="shell-render-button" @click="refreshD3">
            <i class="fa fa-refresh" :class="{'fa-spin': isRefreshClicked }"></i>
          </div>
          <div class="shell-view-description">element id: #d3</div>
        </div>
        <div class="shell-view">
          <div class="shell-d3-frame">
            <span>Rendering View</span>
            <div class="shell-d3" id="d3"></div>
          </div>
          <div class="shell-log" id="log">
          </div>
        </div>
      </div>
    </div>
    <div class="shell-modal" id="modal">test</div>
  </div>
</template>

<script>
  import Vue from "vue";
  import Manual from "./manual.vue";
  import Log from "./log-viewer.vue";
  import Util from "./../js/my-util.js";
  import DOM from "./../js/my-dom.js";
  import _ from "lodash";
  
  export default {
    data: {
      isRefreshClicked: false,
      editorStatus: {
        js: { isActive: false, text: " "},
        css: { isActive: false, text: " "},
        $data: { isActive: false, text: " "}
      },
      editor: null,
      isUpdateStatus: false,
      statusMessage: ""
    },
    ready: function(){
      this.__initEditor("editor");
      const logVM = new Vue(Log).$mount("#log");
      const manVM = new Vue(Manual).$mount("#modal");
      this.showJs();
      var savedTexts = JSON.parse(localStorage.getItem("savedTexts"));
      if(savedTexts){
        this.editorStatus.js.text = savedTexts.js;
        this.editorStatus.css.text = savedTexts.css;
        this.editorStatus.$data.text = savedTexts.$data;
        var activeField = this.__whatisActive();
        this.editor.setValue(this.editorStatus[activeField].text, -1);
      }
      this.__setLogHook(logVM);
      this.refreshD3();
    },
    methods: {
      save: function(){
        var self = this;
        var savedTexts = {
          js: self.editorStatus.js.text,
          css: self.editorStatus.css.text, 
          $data: self.editorStatus.$data.text,
          date: Util.formatDate(new Date())
        };
        localStorage.setItem("savedTexts", JSON.stringify(savedTexts));
        this.__updateStaus(`saved at ${savedTexts.date}`);
      },
      reload: function(){
        var savedTexts = JSON.parse(localStorage.getItem("savedTexts"));
        if(savedTexts){
          this.editorStatus.js.text = savedTexts.js;
          this.editorStatus.css.text = savedTexts.css;
          this.editorStatus.$data.text = savedTexts.$data;
          var activeField = this.__whatisActive();
          this.editor.setValue(this.editorStatus[activeField].text, -1);
          this.__updateStaus(`reverted to  ${savedTexts.date}`);
        }
      },
      help: function(){
        $("#modal").plainModal("open", {
          duration: 200,
          overlay: {fillColor: '#111', opacity: 0.1}
        });
      },
      empty: function(){
        this.editorStatus.js.text = " ";
        this.editorStatus.css.text = " ";
        this.editorStatus.$data.text = " ";
        this.editor.setValue(" ", -1);
      },
      refreshD3: function(){
        this.isRefreshClicked = true;
        setTimeout(()=>{
          this.isRefreshClicked = false;
        }, 1000);
        var view = document.querySelector("#d3");
        view.innerHTML = "";
        DOM.removeStyle("my-style");
        DOM.setStyle(this._css, "my-style");
        var dataObj = {};
        try{ dataObj = JSON.parse(this.editorStatus.$data.text); }
        catch(e){}
        DOM.removeJs();
        DOM.setJs(this.editorStatus.js.text, dataObj);
      },
      showData: function(){
        if("$data" != this.__whatisActive()){
          this.editorStatus.$data.isActive = true;
          this.editorStatus.css.isActive = false;
          this.editorStatus.js.isActive  = false;
          this.editor.setValue(this.editorStatus.$data.text, -1);
          this.editor.getSession().setMode("ace/mode/javascript");
        }
      },
      showCss: function(){
        if("css" != this.__whatisActive()){
          this.editorStatus.css.isActive = true;
          this.editorStatus.$data.isActive = false;
          this.editorStatus.js.isActive  = false;
          this.editor.setValue(this.editorStatus.css.text, -1);
          this.editor.getSession().setMode("ace/mode/css");
        }
      },
      showJs: function(){
        if("js" != this.__whatisActive()){
          this.editorStatus.js.isActive = true;
          this.editorStatus.$data.isActive = false;
          this.editorStatus.css.isActive  = false;
          this.editor.setValue(this.editorStatus.js.text, -1);
          this.editor.getSession().setMode("ace/mode/javascript");
        }
      },
      __initEditor: function(elemID){
        this.editor = ace.edit("editor");
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
          var activeField = this.__whatisActive();
          this.editorStatus[activeField].text = this.editor.getValue();
        });        
      },
      __whatisActive: function(){
        return _.findKey(this.editorStatus, (o) => {
          return o.isActive;
        });
      },
      __updateStaus: function(message){
        this.statusMessage = message;
        this.isUpdateStatus = true;
        setTimeout(()=> {
          this.isUpdateStatus = false;
        }, 1000 * 3);
      },
      __setLogHook: function(logVM){
        console._log = console.log;
        console.log = function(message){
          logVM.$emit("write", message);
          console._log(message);
        };
        window.onerror = (msg, file, line, column, err) => {
          console.log(msg);
          console.log(`Uncaught Exeption line: ${line}`);
        };
      }
    }
  };
</script>