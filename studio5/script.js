var margin = {top: 70, right: 20, bottom: 230, left: 140},
    width = 960 - margin.left - margin.right,
    height = 600 - margin.top - margin.bottom;
var x = d3.scaleBand()
          .range([0, width])
          .padding(0.1);
var y = d3.scaleLinear()
          .range([height, 0]);
var color = d3.scaleOrdinal(d3.schemeCategory20c);
var tip = d3.tip()
  .attr('class', 'd3-tip')
  .offset([-10, 0])
  .html(function(d) {
    return "<strong>"+d.Start_Station+"</strong>" +"<br>"+ d.Summary + "</span>";
  })


var div = d3.select("body").append("div") 
    .attr("class", "tooltip")       
    .style("opacity", 0);

var svg = d3.select("body").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", 
          "translate(" + margin.left + "," + margin.top + ")");
    svg.call(tip);
d3.csv("Sheet_1_data-4.csv", function(error, data) {
  if (error) throw error;
  data.forEach(function(d) {
    d.Summary = +d.Summary;
  });
  x.domain(data.map(function(d) { return d.Start_Station; }));
  y.domain([0, d3.max(data, function(d) { return d.Summary; })]);
  svg.selectAll(".bar")
      .data(data)
      .enter().append("rect")
      .attr("class", "bar")
      .attr("x", function(d) { return x(d.Start_Station); })
      .attr("width", x.bandwidth())
      .attr("y", function(d) { return y(d.Summary); })
      .style("fill", function(d) { return color(d.Start_Station); })
      .on('mouseover', tip.show)
      .on('mouseout', tip.hide)
 
      .attr("height", function(d) { return height - y(d.Summary); });
  svg.append("g")
      .attr("class", "axis")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x))
      .selectAll("text")
      .style("text-anchor", "end")
      .attr("dx", "-.8em")
      .attr("dy", ".15em")
      .attr("transform", "rotate(-65)");
  svg.append("g")
      .call(d3.axisLeft(y));

});