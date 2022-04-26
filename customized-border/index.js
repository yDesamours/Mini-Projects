import $ from "https://cdn.skypack.dev/jquery@3.6.0";

const colors = ['#50D299', '#1D1E22', '#282828', '#FCD000', '#0EBEFF', '#7E9576', '#FFFFFF', '#F48225', '#12fe56', '#5ac120'];

$(document).ready(function(){
  $('#change').click(change)}
);

function change(){
  
  const color1 = colors[Math.floor(Math.random() * 10)]
  
  const color2 = colors[Math.floor(Math.random() * 10)]
  
  $('#rotate').css('background', 'linear-gradient(to left, '+ color2+ ',' + color1 +')')
}
