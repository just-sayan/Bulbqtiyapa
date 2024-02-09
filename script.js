
let btn=document.getElementById('btn');
let img=document.getElementById('img')
btn.addEventListener('click',switchq);

function switchq(){
    if(btn.textContent.includes('ON')){
        btn.textContent="Turn OFF";
        img.src="pic_bulbon.gif";
    }
    else{
        btn.textContent="Turn ON";
        img.src="pic_bulboff.gif";
    }
}
