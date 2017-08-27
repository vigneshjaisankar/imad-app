var button=document.getElementById('counter');
button.onclick=function(){
    //creating request object   
    var request= new XMLHttpRequest();
    //capture the response and store it in a variable
    request.onreadystatechange = function()
    {
        if(request.readystate===XMLHttpRequest.DONE)
        {
        //take soem action based on the request
        if(request.status===200)
        {
            var counter=request.responseText;
            var span=document.getElementById('count');
            span.innerHTML=counter.toString();
        }
    }
    };
  //make the request
  request.open('GET', 'http://vigneshvj9699.imad.hasura-app.io/counter', true);
  request.send(null);
    
};




