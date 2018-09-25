var number1, number2, sum, sumrand2, sumrand3, sumrand4;

//Random num//
randomSum();
function randomSum () {
    number1 = Math.floor(10*Math.random()) + 1;
    number2 = Math.floor(10*Math.random()) + 1;
    sum = number1 * number2;
    document.getElementById('num1').innerHTML = number1;
    document.getElementById('num2').innerHTML = number2;

    console.log(sum);

    sumrand2 = sum + Math.floor(10*Math.random()) +1;
    sumrand3 = sum + Math.floor(10*Math.random()) +1;
    sumrand4 = sum + Math.floor(10*Math.random()) +1;

    var a = [];
    a[0] = sum;
    a[1] = sumrand2;
    a[2] = sumrand3;
    a[3] = sumrand4;
    function compareRandom() {
        return Math.random() - 0.4;
    }
    a.sort(compareRandom);
    console.log(a);

    document.getElementById('num3').innerHTML = a[0];
    document.getElementById('num4').innerHTML = a[1];
    document.getElementById('num5').innerHTML = a[2];
    document.getElementById('num6').innerHTML = a[3];

    var p = document.getElementsByTagName('p');
    for (var i=0; i<p.length; i++) {
        p[i].onclick = f1
    }
}
var pnt = document.getElementById('points').innerHTML;
function f1 () {
    var f = (this).innerHTML;
    document.getElementById('points').innerHTML = pnt ;
    if (f == sum) {
        pnt += 100;
        randomSum ();
    }
    else if (pnt < 0) {
        pnt = 0;
    }
    else {
        pnt -= 100;
    }
}


var close = document.getElementById('close');
var popup = document.getElementById('modal-window');
close.onclick = function () {
    popup.style.opacity = '0';
    window.location.reload();
};

//Timer//
function startTimer() {
    var my_timer = document.getElementById("my_timer");
    var time = my_timer.innerHTML;
    var arr = time.split(":");
    var h = arr[0];
    var m = arr[1];
    var s = arr[2];
    if (s == 0) {
        if (m == 0) {
            if (h == 0) {
                popup.style.opacity = '1';
                return;
            }
            h--;
            m = 60;
            if (h < 10) h = "0" + h;
        }
        m--;
        if (m < 10) m = "0" + m;
        s = 59;
    }
    else s--;
    if (s < 10) s = "0" + s;
    document.getElementById("my_timer").innerHTML = h+":"+m+":"+s;
    setTimeout(startTimer, 1000);
}
startTimer ();

