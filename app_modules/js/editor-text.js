const js = String()
+'console.log(JSON.stringify($data));\n'
+'\n'
+'var $d3 = document.querySelector("#d3");\n'
+'var width = $d3.clientWidth;\n'
+'var height = $d3.clientHeight;\n'
+'var radius = Math.min(width, height) / 2;\n'
+'\n'
+'var color = d3.scale.ordinal()\n'
+'  .range(["#E91E63", "#9C27B0", "#00BCD4", "#009688", "#FFEB3B"]);\n'
+'\n'
+'var arc = d3.svg.arc()\n'
+'  .outerRadius(radius - 20)\n'
+'  .innerRadius(radius - 50);\n'
+'\n'
+'var pie = d3.layout.pie()\n'
+'  .sort(null)\n'
+'  .value(function(d) { return d.val; });\n'
+'\n'
+'var svg = d3.select("#d3").append("svg")\n'
+'  .attr("width", width)\n'
+'  .attr("height", height);\n'
+'\n'
+'svg.selectAll("path")\n'
+'  .data(pie($data.example))\n'
+'  .enter()\n'
+'  .append("path")\n'
+'  .attr("d", arc)\n'
+'  .attr("stroke", "white")\n'
+'  .attr("fill", function(d, i){\n'
+'    return color(i);\n'
+'  })\n'
+'  .attr("transform", "translate("+width/2+", "+height/2+")");\n'

const css = " ";

const $data = String()
+'{\n'
+'  "example": [\n'
+'    {"id":0, "val":10},\n'
+'    {"id":1, "val":20},\n'
+'    {"id":2, "val":40},\n'
+'    {"id":3, "val":30},\n'
+'    {"id":4, "val":3}\n'
+'  ]\n'
+'}\n'

module.exports = { js, css, $data }