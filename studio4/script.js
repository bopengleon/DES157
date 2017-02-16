document.addEventListener("DOMContentLoaded", function(event){
var tipTimer;
var div1=document.getElementById('Rectangle1');
var div2=document.getElementById('Rectangle2');
var div3=document.getElementById('Rectangle3');
var div4=document.getElementById('Rectangle4');

var col1=document.getElementById('col1');
var col2=document.getElementById('col2');
var col3=document.getElementById('col3');
var date=document.getElementById('date');
var d = new Date();
col2.innerhtml= d.getTime();

div4.addEventListener('mouseover', function() {
    console.log("mouseover");
    tipTimer = setTimeout( showMsg, 1000, col1);                
});

div4.addEventListener('mouseout', function() {
    console.log("mouseout");
    clearTimeout(tipTimer);
    col1.style.opacity = null;
  });
// }

function showMsg(col) {
  col.style.opacity = 1;
  col.style.transition = 'all 1s'; // I'd put this in CSS
}
div3.addEventListener('mouseover', function() {
    console.log("mouseover");
    col2.innerhtml+=d.getTime();
    tipTimer = setTimeout( showMsg, 1000, col2);                
});

div3.addEventListener('mouseout', function() {
    console.log("mouseout");
    clearTimeout(tipTimer);
    col2.style.opacity = null;
  });

div2.addEventListener('mouseover', function() {
    console.log("mouseover");
    tipTimer = setTimeout( showMsg, 1000, col2);                
});

div2.addEventListener('mouseout', function() {
    console.log("mouseout");
    clearTimeout(tipTimer);
    col2.style.opacity = null;
});

div1.addEventListener('mouseover', function() {
    console.log("mouseover");
    tipTimer = setTimeout( showMsg, 1000, col3);                
});

div1.addEventListener('mouseout', function() {
    console.log("mouseout");
    clearTimeout(tipTimer);
    col3.style.opacity = null;
});


});


