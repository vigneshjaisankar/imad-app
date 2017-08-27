var button=document.getElementById('counter');
var counter = 0;
button.onclik=function(){
    //makin req to counter endpoint
    
    //capture the response and store it in a variable
    
    //render the variable in correct spam
    counter=counter + 1;
    var span=document.getElementById('count');
    span.innerHTML=counter.toString();
}




