console.log('Loaded!');
//changing the text
var element=document.getElementById('main-text');
element.innerHTML='new value';

//moving picture
var img=document.getElementById('madi');
img.onclick=function(){
    img.style.marginleft='400px';
};