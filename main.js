var mouseevent="empty"
var lastposistionofx
var lastposistionofy 
canvas=document.getElementById('myCanvas')
ctx=canvas.getContext("2d")
color="black"
var widthoftheline=1
window.addEventListener("touchstart",my_touchstart)
function my_touchstart(e){
    lastposistionofx=e.touches[0].clientX-canvas.offsetLeft
    lastposistionofy=e.touches[0].clientY-canvas.offsetTop
}
window.addEventListener("touchmove",my_touchmove)
function my_touchmove(e){
    currentposistionofmousex=e.clientX-canvas.offsetLeft
    currentposistionofmousey=e.clientY-canvas.offsetTop
        ctx.beginPath()
        ctx.strokeStyle=color
        ctx.lineWidth=widthoftheline
        ctx.moveTo(lastposistionofx,lastposistionofy)
        ctx.lineTo(currentposistionofmousex,currentposistionofmousey)
        ctx.arc(currentposistionofmousex,currentposistionofmousey,5,0,2*Math.PI)
        ctx.stroke()
    lastposistionofx=currentposistionofmousex
    lastposistionofy=currentposistionofmousey
}
function cleararea(){
    ctx.clearRect(0,0,canvas.width,canvas.height)
}