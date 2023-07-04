var cursor=document.querySelector("#cursor");
var cursorBlur=document.querySelector("#cursor-blur");

document.addEventListener("mousemove",function(dets){
    cursor.style.left=dets.x+"px";
    cursor.style.top=dets.y+"px";
    cursorBlur.style.left=dets.x-250+"px";
    cursorBlur.style.top=dets.y-250+"px";
});
