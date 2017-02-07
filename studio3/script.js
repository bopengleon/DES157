document.addEventListener("DOMContentLoaded", function(event){
var point1 =document.getElementById('Oval-1');
var point2 =document.getElementById('Oval-2');
var point3 =document.getElementById('Oval-3');
var point4 =document.getElementById('Oval-4');
var point5 =document.getElementById('Oval-5');

var div1=document.getElementById('img1');
var div2=document.getElementById('img2');
var div3=document.getElementById('img3');
var div4=document.getElementById('img4');
var div5=document.getElementById('img5');
var div6=document.getElementById('img6');




point1.addEventListener('mouseover',function(){
	div1.style.backgroundImage= "url('SF1.jpg')";
	div2.style.backgroundImage= "url('SF2.jpg')";
	div3.style.backgroundImage= "url('SF3.jpg')";
	div4.style.backgroundImage= "url('SF4.jpg')";
	div5.style.backgroundImage= "url('SF5.jpg')";
	div1.innerHTML="<h4>San Francisco</h4>";
	div2.innerHTML="";
	div3.innerHTML="";
	div4.innerHTML="";
	div5.innerHTML="";
});

point1.addEventListener('mouseout',function(){
	div1.style.backgroundImage= "url('SF1.jpg')";
	div2.style.backgroundImage= "url('LD2.jpg')";
	div3.style.backgroundImage= "url('HL3.jpg')";
	div4.style.backgroundImage= "url('HZ4.jpg')";
	div5.style.backgroundImage= "url('TK5.jpg')";
	div1.innerHTML="<h4>San Francisco</h4>";
	div2.innerHTML="<h4>London </h4>";
	div3.innerHTML="<h4>Helsinki <br>- Helsingfors</h4>";
	div4.innerHTML="<h4>Hangzhou <br>- 杭州</h4>";
	div5.innerHTML="<h4>Tokyo  <br>- 東京</h4>";	
});


point2.addEventListener('mouseover',function(){
	div1.style.backgroundImage= "url('LD1.jpg')";
	div2.style.backgroundImage= "url('LD2.jpg')";
	div3.style.backgroundImage= "url('LD3.jpg')";
	div4.style.backgroundImage= "url('LD4.jpg')";
	div5.style.backgroundImage= "url('LD5.jpg')";
	div1.innerHTML="";
	div2.innerHTML="<h4>London </h4>";
	div3.innerHTML="";
	div4.innerHTML="";
	div5.innerHTML="";
});

point2.addEventListener('mouseout',function(){
	div1.style.backgroundImage= "url('SF1.jpg')";
	div2.style.backgroundImage= "url('LD2.jpg')";
	div3.style.backgroundImage= "url('HL3.jpg')";
	div4.style.backgroundImage= "url('HZ4.jpg')";
	div5.style.backgroundImage= "url('TK5.jpg')";

	div1.innerHTML="<h4>San Francisco</h4>";
	div2.innerHTML="<h4>London </h4>";
	div3.innerHTML="<h4>Helsinki <br>- Helsingfors</h4>";
	div4.innerHTML="<h4>Hangzhou <br>- 杭州</h4>";
	div5.innerHTML="<h4>Tokyo  <br>- 東京</h4>";	

});


point3.addEventListener('mouseover',function(){
	div1.style.backgroundImage= "url('HL1.jpg')";
	div2.style.backgroundImage= "url('HL2.jpg')";
	div3.style.backgroundImage= "url('HL3.jpg')";
	div4.style.backgroundImage= "url('HL4.jpg')";
	div5.style.backgroundImage= "url('HL5.jpg')";
	div1.innerHTML="";
	div2.innerHTML="";
	div3.innerHTML="<h4>Helsinki <br>- Helsingfors</h4>";
	div4.innerHTML="";
	div5.innerHTML="";
});

point3.addEventListener('mouseout',function(){
	div1.style.backgroundImage= "url('SF1.jpg')";
	div2.style.backgroundImage= "url('LD2.jpg')";
	div3.style.backgroundImage= "url('HL3.jpg')";
	div4.style.backgroundImage= "url('HZ4.jpg')";
	div5.style.backgroundImage= "url('TK5.jpg')";

	div1.innerHTML="<h4>San Francisco</h4>";
	div2.innerHTML="<h4>London </h4>";
	div3.innerHTML="<h4>Helsinki <br>- Helsingfors</h4>";
	div4.innerHTML="<h4>Hangzhou <br>- 杭州</h4>";
	div5.innerHTML="<h4>Tokyo  <br>- 東京</h4>";	

});


point4.addEventListener('mouseover',function(){
	div1.style.backgroundImage= "url('HZ1.jpg')";
	div2.style.backgroundImage= "url('HZ2.jpg')";
	div3.style.backgroundImage= "url('HZ3.jpg')";
	div4.style.backgroundImage= "url('HZ4.jpg')";
	div5.style.backgroundImage= "url('HZ5.jpg')";
	div1.innerHTML="";
	div2.innerHTML="";
	div3.innerHTML="";
	div4.innerHTML="<h4>Hangzhou <br>- 杭州</h4>";
	div5.innerHTML="";
});

point4.addEventListener('mouseout',function(){
	div1.style.backgroundImage= "url('SF1.jpg')";
	div2.style.backgroundImage= "url('LD2.jpg')";
	div3.style.backgroundImage= "url('HL3.jpg')";
	div4.style.backgroundImage= "url('HZ4.jpg')";
	div5.style.backgroundImage= "url('TK5.jpg')";

	div1.innerHTML="<h4>San Francisco</h4>";
	div2.innerHTML="<h4>London </h4>";
	div3.innerHTML="<h4>Helsinki <br>- Helsingfors</h4>";
	div4.innerHTML="<h4>Hangzhou <br>- 杭州</h4>";
	div5.innerHTML="<h4>Tokyo  <br>- 東京</h4>";	

});


point5.addEventListener('mouseover',function(){
	div1.style.backgroundImage= "url('TK1.jpg')";
	div2.style.backgroundImage= "url('TK2.jpg')";
	div3.style.backgroundImage= "url('TK3.jpg')";
	div4.style.backgroundImage= "url('TK4.jpg')";
	div5.style.backgroundImage= "url('TK5.jpg')";
	div1.innerHTML="";
	div2.innerHTML="";
	div3.innerHTML="";
	div4.innerHTML="";
	div5.innerHTML="<h4>Tokyo  <br>- 東京</h4>";
});

point5.addEventListener('mouseout',function(){
	div1.style.backgroundImage= "url('SF1.jpg')";
	div2.style.backgroundImage= "url('LD2.jpg')";
	div3.style.backgroundImage= "url('HL3.jpg')";
	div4.style.backgroundImage= "url('HZ4.jpg')";
	div5.style.backgroundImage= "url('TK5.jpg')";

	div1.innerHTML="<h4>San Francisco</h4>";
	div2.innerHTML="<h4>London </h4>";
	div3.innerHTML="<h4>Helsinki <br>- Helsingfors</h4>";
	div4.innerHTML="<h4>Hangzhou <br>- 杭州</h4>";
	div5.innerHTML="<h4>Tokyo  <br>- 東京</h4>";	

});


});