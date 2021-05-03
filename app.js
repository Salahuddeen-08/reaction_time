var createdTime = new Date().getTime();
var clickedTime,refluxTime,totaltime,totaltime1=[],score,data=[];

function createBox() 
{
    var value =Math.floor((Math.random() * 100) + 20)
	setTimeout(function(){
            document.getElementById("box").style.borderRadius=value+"px";
            var top = Math.floor(Math.random() * 250);
            var left = Math.floor(Math.random() * 850);
            var size = Math.floor(Math.random() * 100) + 49;
            document.getElementById("box").style.display = "block"
            document.getElementById("box").style.top = top + "px";
            document.getElementById("box").style.left = left + "px";
            document.getElementById("box").style.width = size + "px";
            document.getElementById("box").style.height = size + "px";
            var color = 'rgb(' + (Math.floor(Math.random() * 256)) + ','
                               + (Math.floor(Math.random() * 256)) + ','
                              + (Math.floor(Math.random() * 256)) + ')';
            document.getElementById("box").style.backgroundColor=color;
		    createdTime=new Date().getTime();

    },100);
}

var timeleft = 20;
var downloadTimer = setInterval(function(){
  if(timeleft <= 0){
    clearInterval(downloadTimer);
    if(data/count>1)
        location.href = "./win.html";
    else
        location.href = "./lose.html";
    } 
  else {
    document.getElementById("countdown").innerHTML = timeleft + " Secs";
  }
  timeleft -= 1;
}, 1000);


var count=0;
createBox();
document.getElementById("box").onclick= function(){
    count=count+1;
      console.log("works"+count)
      document.getElementById("box").style.display="none";
      clickedTime= new Date().getTime();
      refluxTime=clickedTime-createdTime;
      refluxTime=refluxTime/1000;
      data[count-1]=refluxTime;
      createBox();
  
      const r=(a,b)=>a+b;
      data=data.reduce(r);
      sessionStorage.setItem('score',((data/count)))

  } 