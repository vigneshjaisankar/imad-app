var button=document.getElementById('counter');
button.onclick=function(){
    //creating request object   
    var request= new XMLHttpRequest();
    //capture the response and store it in a variable
    request.onreadystatechange = function()
    {
        if(request.readyState===XMLHttpRequest.DONE)
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

    var nameInput=document.getElementById('name');
    var name=nameInput.value;
    var submit=document.getElementById('submit_btn');
    submit.onclick=function()
        {   //make a request to the server to send the name which typed in the box
        
            //copy a list of name and render it as a list
            var name=['name1','name2','name3','name4'];
            var list='';
                for(var i=0;i<name.length; i++){
                    list +='<li>' + name[i] + '</li>';
        }
    var ul=document.getElementById('namelist');
    ul.innerHTML=list;
};



