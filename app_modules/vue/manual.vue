<style lang="sass" scoped>
  .manual-container{
    font-size: 12px;
    color: #78909C;
    position: absolute;
    top: 0px; left: 10px; bottom: 10px; right: 5px;
    overflow: hidden;
    &:hover{
      overflow: auto;
    }
  }
</style>

<template>
  <div>
    <div v-html="text | marked" class="manual-container"></div>
  </div>
</template>

<script>
  export default {
    data: {
      text: String() 
        + "## D3.js Playground v1.0.0\n"
        + "Playground for D3.js v3.5.16 with javascript editor.\n"
        + "  \n"
        + "### Libraries\n"
        + "You can use helpful libraries.\n"
        + "* [co](https://github.com/tj/co 'co')\n"
        + "* [ES6-Promise](https://github.com/stefanpenner/es6-promise 'ES6-Promise')\n"
        + "* [lodash](https://github.com/lodash/lodash 'lodash')\n"
        + "* [Super Agent](https://github.com/visionmedia/superagent 'Super Agent')\n"
        + "* [jQuery](https://github.com/jquery/jquery 'jQuery')\n\n"
        + "### Editor\n"
        + "Editor has three fields that are .js, .css, and $data. Write your javascript code to .js field. In javascript code, you shoud select #d3 element to render data.  \n"
        + ".css and $data are optional field. If you customise style write css to .css field.  \n"
        + "$data field shoud be writen by JSON format. you can load $data as variable in javascript code.  \n"
        + "### Render\n"
        + "Click the reload button above the #d3 to execute your javascript code.\n"
        + "### Save\n"
        + "If you want to save your codes, click save button. You can revret by click revert button.\n"
        + "### Debug\n"
        + "Using console.log() on your javascript code, console viewer will output variables.\n"
    },
    filters: {
      marked: marked
    }
  };
</script>