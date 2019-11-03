function stopwatch() {
    let outputBox = document.getElementById("time");
    let startBtn = document.getElementById("startBtn");
    let stopBtn = document.getElementById("stopBtn");
    startBtn.addEventListener("click",start);
    stopBtn.addEventListener("click",stop);
    let timer = null;
    
    function stop() {
            
        stopBtn.disabled = true;
        startBtn.disabled = false;
        clearInterval(timer);
            
        }

    function start() {                        
        startBtn.disabled = true;
        stopBtn.disabled = false;
        let seconds = 0;
        timer = setInterval(timing,1000);

        function timing(params) {
            seconds++;

            let currentSecond = 0;
            let currentMinute = 0;
            if(seconds/60===1){
                currentMinute++;
            }
            if(seconds<=9){
                currentSecond = `0`+`${seconds}`;
            }
            else{
                currentSecond = seconds;
            }
            if(currentMinute<=0){
                currentMinute = `0`+`${currentMinute}`;
            }
            outputBox.textContent = `${currentMinute}:${currentSecond}`;
        }
        }
       

}
  
