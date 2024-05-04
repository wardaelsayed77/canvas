<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <script>
        var ca,co
         function init(){
    ca =document.getElementById("mycanvas");
    co=ca.getContext("2d");
            co.beginPath()
        co.moveTo(100,300)
            co.lineTo(300,300)
            co.lineTo(300,100)
            co.lineTo(200,50)
            co.lineTo(100,100)
            co.lineTo(100,300)
            co.stroke()
            co.fillStyle="BurlyWood"
            co.fill()
            co.beginPath()
            co.arc(200,200,50,0,2*Math.PI)
            co.stroke()
            co.fillStyle="SaddleBrown"
            co.fill()
            co.beginPath()
            co.rect(100,300,200,20)
            co.fillStyle="SaddleBrown"
            co.fill()
            co.stroke()
            co.beginPath()
co.moveTo(240,255)
    co.lineTo(210,260);
    co.lineTo(235,245);
            co.fillStyle="black"
            co.fill()
            co.beginPath()
            co.arc(269,275,15,0,Math.PI*2,true)
             co.stroke()
             co.fillStyle="yellow"
            co.fill()
            co.beginPath()
             co.arc(254,254,22,0,2*Math.PI)
            co.stroke()
            co.fillStyle="yellow"
            co.fill()
             co.beginPath()
            co.arc(249,249,8,0,2*Math.PI)
            co.fillStyle="black"
            co.fill()
             co.stroke()
            co.beginPath()
            co.moveTo(265,290)
            co.lineTo(265,300);
            co.stroke()
            co.beginPath()
            co.moveTo(273,290)
            co.lineTo(273,300);
            co.stroke()
            co.beginPath()
            co.moveTo(269,275)
            co.lineTo(297,285);
            co.lineTo(269,285);
            co.lineTo(266,274);
            co.stroke()
            co.fillStyle="black"
            co.fill()
         }
        </script>
   
    
</head>
  <body onload="init()">
<canvas id="mycanvas" width="500px" height="500px" style="background-color: skyblue;"></canvas>
    </body>
</html>