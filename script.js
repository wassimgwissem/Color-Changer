document.addEventListener("DOMContentLoaded",function(){
    var box=document.getElementById("color-box");
    var btn=document.getElementById("change-color-btn");
    function getRandomColor() {
        var hex_num="0123456789abcdef";
        var tag="#";
        for (let i = 0; i < 6; i++) {
            tag+=hex_num[Math.floor(Math.random()*16)];            
        }
        return tag;
    }
    btn.addEventListener("click",function () {
        box.style.backgroundColor=getRandomColor();
    })
})