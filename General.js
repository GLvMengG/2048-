

// 初始化  
function Start() {
    for (i = 0; i < 2; i++) {
        rNum = Math.floor(Math.random() * (aSpan.length));
        aSpan[rNum].innerHTML == '' ? aSpan[rNum].innerHTML = '2' : i--
    }
    Color();
}

//获取属性
function GetStyle(obj, attr) {
    return obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle(obj)[attr];
}

// 移动后取随机数
var w = 20, timer = [], h = 0;
function Rand() {
    w = 20;
    rNum = Math.floor(Math.random() * (aSpan.length));
    if (aSpan[rNum].innerHTML == '') {
        aSpan[rNum].innerHTML = arrs[Math.floor(Math.random() * (arrs.length))];
        Lose();
    }
    else {
        return Rand();
    }
    Time2(timer[h], rNum); h++;
}
//随机数出现时的效果
function Time2(time, rNum) {
    time = setInterval(function () {
        w += 10;
        aSpan[rNum].style.lineHeight = aSpan[rNum].style.width = aSpan[rNum].style.height = w + 'px';
        aSpan[rNum].style.marginLeft = aSpan[rNum].style.marginTop = -w / 2 + 'px';
        if (w >= 100) {
            aSpan[rNum].style.lineHeight = aSpan[rNum].style.width = aSpan[rNum].style.height = '100px';
            aSpan[rNum].style.marginLeft = aSpan[rNum].style.marginTop = '-50px';
            clearInterval(time);
        }
    }, 30)
}
//合并时效果
function Time(time, i, k) {
    a = 40;
    ab = 0;//ab防止字体大小在40-50间跳动
    time = setInterval(function () {
        if (a >= 50 || ab) { a -= 2; ab = 1; }
        else { a += 2; }
        if (a <= 40) {
            aBtn[i][k].style.fontSize = '40px';
            clearInterval(time);
        }
        aBtn[i][k].style.fontSize = a + 'px';
    }, 30);
}

// 给数字加背景颜色 及 文字颜色 判断是否出现2048
var win = 1;
function Color() {
    for (i = 0; i < aSpan.length; i++) {
        k = Math.log(aSpan[i].innerHTML) / Math.log(2);
        aSpan[i].style.background = arrC[k];
        aSpan[i].innerHTML >= 8 ? aSpan[i].style.color = '#fff' : aSpan[i].style.color = '#000';
        aSpan[i].style.fontSize = '40px';
        if (aSpan[i].innerHTML == '2048' && win) { win = 0; alert('太棒了！！！你成功了！！继续加油！'); }
    }
}

var arrl=[];
// 判断是否失败
function Lose() {
    var aP = null;
    lose = 1;
    /* for (i = 0; i < aSpan.length; i++) {
        if (aSpan[i].innerHTML == "") { lose = 0; continue; }
    } */
    for (i = 0; i < 4; i++) {
        for (j = 0; j < 4; j++) {
            if (aBtn[i][j].innerHTML == "") { lose = 0; continue; }
            else if (i < 3 && j < 3 && (aBtn[i][j].innerHTML == aBtn[i + 1][j].innerHTML || aBtn[i][j].innerHTML == aBtn[i][j + 1].innerHTML)) {
                lose = 0; continue;
            }
            else if (i == 3 && j < 3 && aBtn[i][j].innerHTML == aBtn[i][j + 1].innerHTML) {
                lose = 0; continue;
            }
            else if (i < 3 && j == 3 && aBtn[i][j].innerHTML == aBtn[i + 1][j].innerHTML) { lose = 0; continue; }

        }
    }
    if (lose) {
        document.onmouseup = null;
        document.onkeydown = null;
        document.onmousedown = null;
        alert('失败！您的分数是:' + score + '      -_-请重新开始~_~');
       /*  aP = document.createElement('p')
        aP.innerHTML = ht + '------' + score;
        oHis.appendChild(aP);
        ht++; */
        localStorage.setItem(ht,score);
        ht++;
        toH();
    }
}
//存储数据到本地
function toH()
{
    arrl=[];
    for(i=0;i<ht;i++)
    {
        arrl[i]=localStorage.getItem(localStorage.key(i));
    }
    arrl.sort(function(x,y){
        return y-x;
    });
    oHis.innerHTML='<span>历史纪录</span>';
    localStorage.clear()
    for(i=0,ht=0;arrl[i];i++,ht++)
    {
        if(i==5){continue;}
        localStorage.setItem(ht,arrl[i]);
        aP = document.createElement('p');
        aP.innerHTML =i+1+'  ---------  '+arrl[i];
        oHis.appendChild(aP);
    }
}
