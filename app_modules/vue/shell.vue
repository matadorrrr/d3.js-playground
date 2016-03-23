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
    
    .shell-save, .shell-revert, .shell-help{
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
        overflow: hidden;
        
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
      <div class="shell-revert" @click="revert">
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
              :class="{'shell-selector-active': activeField == 'js'}">
              .js
            </div>
            <div class="shell-selector-button-css" @click="showCss" 
              :class="{'shell-selector-active': activeField == 'css'}">
              .css
            </div>
            <div class="shell-selector-button-data" @click="showData" 
              :class="{'shell-selector-active': activeField == '$data'}">
              $data
            </div>
          </div>
          <div class="shell-editor-empty" @click="empty">
            <i class="fa fa-trash"></i>
          </div>
        </div>
        <div class="shell-editor" id="editor_view">
        </div>
      </div>
      <div class="shell-output">
        <div class="shell-render">
          <div class="shell-render-button" @click="loadD3">
            <i class="fa fa-refresh" :class="{'fa-spin': isRefreshClicked }"></i>
          </div>
          <div class="shell-view-description">element id: #d3</div>
        </div>
        <div class="shell-view">
          <div class="shell-d3-frame">
            <span>Rendering View</span>
            <div class="shell-d3" id="d3"></div>
          </div>
          <div class="shell-log" id="log_view">
          </div>
        </div>
      </div>
    </div>
    <div class="shell-modal" id="manual_view"></div>
  </div>
</template>

<script>
  import Vue from "vue";
  import Manual from "./manual.vue";
  import Log from "./log-viewer.vue";
  import DOM from "./../js/my-dom.js";
  import Editor from "./editor.vue";
  
  export default {
    data: {
      isRefreshClicked: false,
      editorVM: null,
      logVM: null,
      manVM: null,
      isUpdateStatus: false,
      statusMessage: "",
      activeField: "js"
    },
    ready: function(){
      this.logVM = new Vue(Log).$mount("#log_view");
      this.manVM = new Vue(Manual).$mount("#manual_view");
      this.editorVM = new Vue(Editor).$mount("#editor_view");
      this.__setLogHook(this.logVM);
      this.__setUnloadHook();
      this.loadD3();
    },
    methods: {
      save: function(){
        var time = this.editorVM.saveAll();
        this.__updateStaus(`saved at ${time}`);
      },
      revert: function(){
        var time = this.editorVM.revertAll();
        if(time){
          this.__updateStaus(`reverted to  ${time}`);
        }
      },
      help: function(){
        $("#manual_view").plainModal("open", {
          duration: 200,
          overlay: {fillColor: '#111', opacity: 0.1}
        });
      },
      empty: function(){
        this.editorVM.emptyAll();
      },
      loadD3: function(){
        this.isRefreshClicked = true;
        setTimeout(()=>{
          this.isRefreshClicked = false;
        }, 1000);
        var view = document.querySelector("#d3");
        view.innerHTML = "";
        DOM.removeStyle("my-style");
        DOM.setStyle(this.editorVM.readField("css"), "my-style");
        var dataObj = {};
        try{ dataObj = JSON.parse(this.editorVM.readField("$data")); }
        catch(e){}
        DOM.removeJs();
        DOM.setJs(this.editorVM.readField("js"), dataObj);
      },
      showData: function(){
        this.editorVM.showField("$data");
        this.activeField = this.editorVM.whatisActive();
      },
      showCss: function(){
        this.editorVM.showField("css");
        this.activeField = this.editorVM.whatisActive();
      },
      showJs: function(){
        this.editorVM.showField("js");
        this.activeField = this.editorVM.whatisActive();
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
          logVM.write(message);
          console._log(message);
        };
        window.onerror = (msg, file, line, column, err) => {
          console.log(msg);
          console.log(`Uncaught Exeption line: ${line}`);
        };
      },
      __setUnloadHook: function(){
        window.onbeforeunload = (e)=>{
          return 'You can save texts to click the save button. Do you want to leave now?';
        };
      }
    }
  };
</script>