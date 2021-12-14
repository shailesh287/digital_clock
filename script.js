function clock(){

    var hours=document.getElementById("hours");
    var minutes=document.getElementById("minutes");
    var seconds=document.getElementById("seconds");
    var as=document.getElementById("seconds");
    var clock5=document.getElementById("clock5");
    

    var time =new Date();
    var a=time.getHours();
    var b=time.getMinutes();
    var c=time.getSeconds();

  
    if(a >= 12)
    {
        clock5.innerHTML="PM";
    }
    if(a > 12)
    {
       a = a-12;
    }

    if(a<10)
    {
        a = '0' + a;

    }

    if(b<10)
    {
        b = '0' + b;

    }
    if(c<10)
    {
        c = '0' + c;

    }


     hours.innerHTML=a;
     minutes.innerHTML=b;
     seconds.innerHTML=c;
}


setInterval(clock,1000);

function makeDive() {
    var container = document.createElement('div');
    container.className="grid-item";
    container.id="dynamic-block";
    document.getElementById("grid-container1").appendChild(container);

    var invalue = document.getElementById("wakeupTimeSelector");
    var invalue1 = document.getElementById("lunchTimeSelector");
    var invalue2 = document.getElementById("napTimeSelector");
    var value = invalue.options[invalue.selectedIndex].text;
    document.getElementById("dynamic-block").innerHTML="Breakfast Time is set to : "+ value+"<br/> Lunch Time is set to : "+ invalue1.options[invalue1.selectedIndex].text+" <br/>Nap Time is set to : "+ invalue2.options[invalue2.selectedIndex].text;
    }


function settimefunc() {
    var i = document.getElementById("wakeupTimeSelector").value;
    var j = document.getElementById("lunchTimeSelector").value;
    var k = document.getElementById("napTimeSelector").value;
    var hourr = new Date().getHours();
    if(i==hourr){
        document.getElementById("lunchbottom").style.backgroundImage="url(./wakeup.jpeg)";
        document.getElementById("lunch").innerHTML="Breakfast Time!"
        div_var1 =1;
    }
    else if(j==hourr){
        document.getElementById("lunchbottom").style.backgroundImage="url(./lunch.jpeg)";
        document.getElementById("lunch").innerHTML="Lunch Time!"
        div_var2 =1;
    }
    else if(k==hourr){
        document.getElementById("lunchbottom").style.backgroundImage="url(./nap.jpeg)";
        document.getElementById("lunch").innerHTML="Nap Time!"
        div_var3 = 1;
    }
    makeDive();
}