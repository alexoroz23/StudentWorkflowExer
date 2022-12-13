function countDown(num){
    let counter = setInterval (function() {
        num - 1;
        if (num <= 0) {
            clearInterval(counter);
            console.log('DONE!');
        }
        else {
            console.log(time);
        }
    }, 1000)
}

function randomGame() {
    let num;
    let tries = 0;
    let counter = setInterval(function(){
    num = Math.random();
    tries++
        if (num > .75) {
            clearInterval(counter);
            console.log(tries + ' tries');
        }
    }, 1000)
}
