
//重新开始游戏
function Remake()
{
    Make();
    for(i=0;i<aSpan.length;i++)
    {
        aSpan[i].innerHTML='';
        aSpan[i].style.background=arrC[0];
    }
    Start();
    oSpan.innerHTML=0;
    score=0;
}

//继续游戏
function Make()
{
    oMtai.style.display='none';
    document.onmouseup=Mup;
    document.onkeydown=popkey;
    document.onmousedown=Mdown;
}

//鼠标按下
function Mdown(ev) 
{ 
    var dev=ev||event;
    if(dev.button==0)
    {
        x=dev.clientX-parseInt(GetStyle(oMian,'left'));
        y=dev.clientY-parseInt(GetStyle(oMian,'top'));
        /* console.log(parseInt(GetStyle(oMian,'left')));
        console.log(x); */
    }
    if(x>730 || y>550 || x<-30 || y<-30)
    {
        oMtai.style.display='block';
        document.onmouseup=null;
        document.onkeydown=null;
        document.onmousedown=null;
    }
}

// 鼠标弹起
function Mup(ev) 
{ 
    var oev=ev||event;
    xm=oev.clientX-parseInt(GetStyle(oMian,'left'));
    ym=oev.clientY-parseInt(GetStyle(oMian,'top'));
    num3=oBox.innerHTML;
    /* console.log(xm);
    console.log(ym); */
    if((xm-x<-40&&ym-y<-40) || (xm-x>40&&ym-y>40) ||(xm-x<-40&&ym-y>40) || (xm-x>40&&ym-y<-40))
    {return;}
    else if(xm-x < -40)
    {
        toLeft();
    }
    else if(xm-x > 40)
    {
        toRight();
    }
    else if(ym-y < -40)
    {
        toTop()
    }
    else if(ym-y > 40)
    {
        toBottom();
    }
    if(oBox.innerHTML!=num3){Rand();}
    Color();
    oSpan.innerHTML=score;
    
}

