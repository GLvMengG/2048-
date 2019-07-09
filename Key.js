
//方向键
function popkey(ev) {
    var ev = ev || event;
    ev.preventDefault(); //禁止上下键使页面滚动
    num3 = oBox.innerHTML;
    key = ev.keyCode;
    switch (key) {
        case 37: toLeft(); break;
        case 38: toTop(); break;
        case 39: toRight(); break;
        case 40: toBottom(); break;
        default: break;
    }
    if (oBox.innerHTML != num3) { Rand(); }
    Color();
    oSpan.innerHTML = score;
}
function toLeft() {
    for (i = 0; i < 4; i++) {
        num = aBtn[i][0].innerHTML;
        k = 0;
        ic = 1;
        for (j = 1; j < 4; j++) {
            // console.log(num);
            if (aBtn[i][j].innerHTML != '') {
                if (aBtn[i][j].innerHTML != num) {
                    if (ic && num) { k++; ic = 0; }//4020
                    aBtn[i][k].innerHTML = aBtn[i][j].innerHTML;
                    // to01(i,k,j);
                    k++; ic = 0;
                    num = aBtn[i][j].innerHTML;
                }
                else {
                    if (ic == 0) { k--; ic = 1; }//2020
                    aBtn[i][k].innerHTML = 2 * num;
                    // to01(i,k,j);
                    Time(timerL, i, k);
                    k++;
                    score += 2 * num;
                    num = '';//2222
                    ic = 0;
                }
            }

        }
        if (num != '' && ic)//2000
        {
            k++;
        }
        ClearXL(i, k);
    }
}
function toRight() {
    for (i = 0; i < 4; i++) {
        num = aBtn[i][3].innerHTML;
        k = 3;
        ic = 1;
        for (j = 2; j >= 0; j--) {
            // console.log(num);
            if (aBtn[i][j].innerHTML != '') {
                if (aBtn[i][j].innerHTML != num) {
                    if (ic && num) { k--; ic = 0; }
                    // ic&&num ? k++:0;
                    aBtn[i][k].innerHTML = aBtn[i][j].innerHTML;
                    // to02(i,k,j);
                    k--; ic = 0;
                    num = aBtn[i][j].innerHTML;
                }
                else {
                    if (ic == 0) { k++; ic = 1; }
                    aBtn[i][k].innerHTML = 2 * num;
                    // to02(i,k,j);
                    Time(timerR, i, k);
                    k--;
                    score += 2 * num;
                    num = '';
                    ic = 0;
                }
            }

        }
        if (num != '' && ic) {
            k--;
        }
        ClearXR(i, k);
    }
}
function toTop() {
    for (j = 0; j < 4; j++) {
        num = aBtn[0][j].innerHTML;
        k = 0;
        ic = 1;
        for (i = 1; i < 4; i++) {
            // console.log(num);
            if (aBtn[i][j].innerHTML != '') {
                if (aBtn[i][j].innerHTML != num) {
                    if (ic && num) { k++; ic = 0; }
                    // ic&&num ? k++:0;
                    aBtn[k][j].innerHTML = aBtn[i][j].innerHTML; k++; ic = 0;
                    // to03(j,k,i);
                    num = aBtn[i][j].innerHTML;
                }
                else {
                    if (ic == 0) { k--; ic = 1; }
                    aBtn[k][j].innerHTML = 2 * num;
                    // to03(j,k,i);
                    Time(timerT, k, j);
                    k++;
                    score += 2 * num;
                    num = '';
                    ic = 0;
                }
            }

        }
        if (num != '' && ic) {
            k++;
        }
        ClearYT(k, j);
    }
}
function toBottom() {
    for (j = 0; j < 4; j++) {
        num = aBtn[3][j].innerHTML;
        k = 3;
        ic = 1;
        for (i = 2; i >= 0; i--) {
            // console.log(num);
            if (aBtn[i][j].innerHTML != '') {
                if (aBtn[i][j].innerHTML != num) {
                    if (ic && num) { k--; ic = 0; }
                    // ic&&num ? k++:0;
                    aBtn[k][j].innerHTML = aBtn[i][j].innerHTML;
                    // to04(j,k,i);
                    k--; ic = 0;
                    num = aBtn[i][j].innerHTML;
                }
                else {
                    if (ic == 0) { k++; ic = 1; }
                    aBtn[k][j].innerHTML = 2 * num;
                    // to04(j,k,i);
                    Time(timerB, k, j);
                    k--;
                    score += 2 * num;
                    num = '';
                    ic = 0;
                }
            }

        }
        if (num != '' && ic) {
            k--;
        }
        ClearYB(k, j);
    }
}

// 移动调整后清除后面的数字
function ClearXL(i, k) {
    for (n = k; n < 4; n++) {
        aBtn[i][n].innerHTML = '';
        aBtn[i][n].style.background = '#CDC1B3';
    }
}
function ClearXR(i, k) {
    for (n = k; n >= 0; n--) {
        aBtn[i][n].innerHTML = '';
        aBtn[i][n].style.background = '#CDC1B3';
    }
}
function ClearYT(k, j) {
    for (n = k; n < 4; n++) {
        aBtn[n][j].innerHTML = '';
        aBtn[n][j].style.background = '#CDC1B3';
    }
}
function ClearYB(k, j) {
    for (n = k; n >= 0; n--) {
        aBtn[n][j].innerHTML = '';
        aBtn[n][j].style.background = '#CDC1B3';
    }
}

/* function to01(a,k,j)
{
    for(l=j;l>k;l--)
    {
        aBtn[a][l].innerHTML=aBtn[a][j].innerHTML;
        setTimeout(function(l){
            return function(){
                aBtn[a][l].innerHTML='';
                aBtn[a][l].style.background='#CDC1B3';
            }
        }(l),100)
    }
}
function to02(a,k,j)
{
    for(l=j;l<k;l++)
    {
        aBtn[a][l].innerHTML=aBtn[a][j].innerHTML;
        setTimeout(function(l){
            return function(){
                aBtn[a][l].innerHTML='';
                aBtn[a][l].style.background='#CDC1B3';
            }
        }(l),100)
    }
}
function to03(a,k,i)
{
    for(l=i;l>k;l--)
    {
        aBtn[l][a].innerHTML=aBtn[i][a].innerHTML;
        setTimeout(function(l){
            return function(){
                aBtn[l][a].innerHTML='';
                aBtn[l][a].style.background='#CDC1B3';
            }
        }(l),100)
    }
}
function to04(a,k,i)
{
    for(l=i;l<k;l++)
    {
        aBtn[l][a].innerHTML=aBtn[i][a].innerHTML;
        setTimeout(function(l){
            return function(){
                aBtn[l][a].innerHTML='';
                aBtn[l][a].style.background='#CDC1B3';
            }
        }(l),100)
    }
} */