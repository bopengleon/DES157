document.addEventListener('DOMContentLoaded', function (event) {
    document.lib.onsubmit = writeLib;

    function writeLib() {
      var inputs = document.lib.getElementsByTagName("input");
      var firstName = inputs[0].value;
      var possession = inputs[1].value;
      var adj1 = inputs[2].value;
      var adj2 = inputs[3].value;
      var noun = inputs[4].value;
      var bodyPart = inputs[5].value;
      console.log("111");
      var response = document.getElementById('response')
      response.innerHTML ="Do you believe it？"+"My budy "+firstName+" will "+possession+", because I am rich. You know that. I am really rich."+"We are going to have a unbeliable, "+" gift for "+firstName+" "+adj2+noun+"because he had red "+bodyPart+ " just like me.";
      var hider = document.getElementById('hider');
      var inps = document.getElementById('inputs');
      var body = document.getElementsByTagName('body');
      
      hider.classList.remove('madlib-hid');
      hider.classList.add('madlib-vis');
      inps.classList.add('madlib-hid');
      body[0].classList.add('black');
      

      return false;
    }

});
