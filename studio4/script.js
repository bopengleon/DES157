var tipTimer;

var elements = document.querySelectorAll("li");
console.log("loop");
var

for (var i = 0; i < elements.length; i++) {
  console.log(elements[i].nodeName);

  // consider mouseenter/mouseleave? may or may not matter here
  elements[i].addEventListener('mouseover', function() {
    console.log("mouseover");
    // console.log(this.lastElementChild.tagName)
    
    // showMsg(this.lastElementChild); // without setTimemout
    
    // https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout
    var child = this.lastElementChild; // must reference 'this' before setTimeout 
    // too long a timeout can lead to mouseout not registering
    tipTimer = setTimeout( showMsg, 1000, child);                 // args to setTimout
    // tipTimer = setTimeout( function() {showMsg(child);}, 100); // another method
  });

  elements[i].addEventListener('mouseout', function() {
    console.log("mouseout");
    clearTimeout(tipTimer);
    this.lastElementChild.style.opacity = null;
  });
}

function showMsg(element) {
  // GD: can I use "this" to find out which object called the function?
  // SM: no -> listeners provide a context to give 'this' a meaning
  // console.log(element.tagName);
  element.style.opacity = 1;
  element.style.transition = 'all 1s'; // I'd put this in CSS
}
