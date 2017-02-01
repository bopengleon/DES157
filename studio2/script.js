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
      response.innerHTML =  firstName +firstName++possession+adj1+adj2+noun+firstName+bodyPart+noun+bodyPart;
      var hider = document.getElementById('hider');
      var inps = document.getElementById('inputs');
      var body = document.getElementsByTagName('body');
      // var billImg = document.getElementById('bill');
      hider.classList.remove('madlib-hid');
      hider.classList.add('madlib-vis');
      inps.classList.add('madlib-hid');
      body[0].classList.add('black');
      // billImg.classList.remove('img-hid')
      // billImg.classList.add('img-vis');

      return false;
    }

});
