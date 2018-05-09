window.onload=function(){
    let list=document.getElementById('list');
    let prev=document.getElementById('prev');
    let next=document.getElementById('next');
    function carton(offset){
        let newleft=parseInt(list.style.left)+offset;
        list.style.left=newleft+"px";
        if(newleft<-2080){
            list.style.left=-520+"px";
        }
        if(newleft>-520){
            list.style.left=-2080+"px";
        }
    }
    let timer;
    function play(){
        timer=setInterval(function(){
            next.onclick()
        },1500)
    }
    play();
    let container=document.getElementById('container');
    function stop(){
        clearInterval(timer);
    }
    container.onmouseover = stop;
    container.onmouseout = play;


    let buttons = document.getElementById('buttons').getElementsByTagName('span');
    let count = 1;

    function buttonsShow() {
        for (var i = 0; i < buttons.length; i++) {
            if (buttons[i].className ==='on') {
                buttons[i].className = ' ';
            }
        }
        buttons[count - 1].className = 'on';
    }

    prev.onclick = function() {
        count -= 1;
        if (count < 1) {
            count = 4;
        }
        buttonsShow();
        carton(520);
    };
    next.onclick = function() {
        count += 1;
        if (count > 4) {
            count = 1;
        }
        buttonsShow();
        carton(-520);
    };
    for(let i=0;i<buttons.length;i++){
        (function(i){
                buttons[i].onclick=function(){
                    let clickcount = Number(this.getAttribute('count'));
                    let offset = 520 * (count - clickcount);
                    carton(offset);
                    count = clickcount;
                    buttonsShow();
                }
            }
        )(i)
    }
};
