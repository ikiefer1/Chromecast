var i = 0;
var images = [];
var time = 10000;
images[0] = "https://images.unsplash.com/photo-1546182990-dffeafbe841d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8YW5pbWFsfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60";
images[1] ="https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8YW5pbWFsfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60";
images[2] ="https://images.unsplash.com/photo-1475809913362-28a064062ccd?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8YW5pbWFsfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60";
images[3] ="https://images.unsplash.com/photo-1501706362039-c06b2d715385?ixid=MXwxMjA3fDB8MHxzZWFyY2h8N3x8YW5pbWFsfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60";

function oscillate(){
    document.pic.src = images[i];
    if(i<images.length -1)
    {
        i++;
    }
    else{
        i=0;
    }
    setTimeout("oscillate()",time);
}
window.onload= oscillate;