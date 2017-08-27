 
    var submit=document.getElementById('submit_btn');
    submit.onclick=function()
        {    
            
    var request= new XMLHttpRequest();
    //capture the response and store it in a variable
    request.onreadystatechange = function()
    {
        if(request.readyState===XMLHttpRequest.DONE)
        {
        //take soem action based on the request
            if(request.status===200)
            {
                var names=request.responseText;
                name=JSON.parse(names);
                var list='';
                for(var i=0;i<name.length; i++){
                list +='<li>' + name[i] + '</li>';
        }
    var ul=document.getElementById('namelist');
    ul.innerHTML=list;
    }

}    };
    var nameInput=document.getElementById('name');
    var name=nameInput.value;

  //make the request
  request.open('GET', 'http://vigneshvj9699.imad.hasura-app.io/submit-name=name' + name, true);
  request.send(null);
   
         
};  



