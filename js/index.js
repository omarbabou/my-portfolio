window.addEventListener("load", (event)=>{
    const onclickOpened = document.getElementsById("onclickedOpened");
const onclickClosed = document.getElementsById("onclickedClose");
const menuBox = document.getElementById("menuContainer");
function menu_Actionopen(){
    onclickOpened.addEventListener("click",(event)=>{
        menuBox.style.visibility="visible";
    });
    function menu_Actionclose(){
        onclickClosed.addEventListener("click",(event)=>{
            menuBox.style.visibility="hidden";
        });
    }
}}
)