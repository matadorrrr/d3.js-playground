<style lang="sass" scoped>
  .log-view-container{
    font-size: 12px;
    color: #B0BEC5;
    position: absolute;
    top: 0px; left: 10px; bottom: 10px; right: 5px;
  }
  .log-view-header{
    position: absolute;
    top: 0px; left: 0px; right: 0px;
    height: 35px;
    line-height: 35px;
    background-color: transparent;
    /*box-shadow: 0 0 15px rgba(0,0,0,.1);*/
    span{
      margin-left: 10px;
      font-weight: bold;
      color: #CFD8DC;
    }
  }
  .log-view-search{
    position: absolute;
    top: 0px; right: 0px; bottom: 0px;
    height: 35px;
    line-height: 35px;
    width: 200px;
    text-align: right;
    i{
      color: #CFD8DC;
    }
    input{
      outline: none;
      border: none;
      border-bottom: solid 1px #607D8B;
      background-color: transparent;
      color: #CFD8DC;
      margin-right: 10px;
    }
  }
  .log-view-body{
    position: absolute;
    top: 35px; right: 0px; left: 0px; bottom: 10px;
    box-shadow: 0 2px 15px rgba(0,0,0,.2) inset;
    overflow: hidden;
    &:hover{
      overflow: auto;
    }
  }
  .log-view-content{
    position: absolute;
    top: 10px; right: 10px; left: 10px; bottom: 10px;
    white-space: nowrap; 
    .log-string{
      line-height: 15px;
    }
    .log-date{
      color: #009688;
    }
  }
</style>

<template>
  <div>
    <div class="log-view-header">
      <span>Console View</span>
      <div class="log-view-search">
        <i class="fa fa-search"></i>
        <input type="text" v-model="search" placeholder="Search">
      </div>
    </div>
    <div class="log-view-body" id="log-view">
      <div class="log-view-content">
          <span class="log-string" v-for="log in logs | filterBy search in 'message'">
            <span class="log-date">{{log.date}}</span>:&nbsp;&nbsp;{{log.message}}<br>
          </span>
      </div>
    </div>
  </div>
</template>

<script>
  import Util from "./../js/my-util.js";
  export default {
    data: {
      logs: [],
      MAX_LENGTH: 1000
    },
    watch: {
      "logs": function(newval, oldval){
        if(this.logs.length > this.MAX_LENGTH){
          this.logs.shift();
        }
        this.__autoScrolle();
      }
    },
    methods: {
      write: function(message){
        var date = Util.formatDate(new Date());
        this.logs.push({date, message});        
      },
      __autoScrolle: function(){
        var $view = document.querySelector("#log-view");
        $view.scrollTop = (this.logs.length * 15) + 30;
      }
    }
  }; 
</script>