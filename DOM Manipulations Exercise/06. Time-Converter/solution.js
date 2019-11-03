function attachEventsListeners() {

    const convertFrom = {
        'days':(days)=>{
        const hours = days *24;
        const minutes = hours *60;
        const seconds = minutes * 60;
        return [hours,minutes,seconds]
        },
        'hours':(hours)=>{
            const days = hours/24;
            const minutes = hours*60;
            const seconds = minutes*60;

            return [days,minutes,seconds]
        },
        'minutes':(minutes)=>{
            const hours = minutes/60;
            const days = hours /24;
            const seconds = minutes*60;
            return [days,hours,seconds]

        },
        'seconds':(seconds)=>{
            const minutes=seconds/60;
            const hours = minutes/60;
            const days = hours/24;
            return [days,hours,minutes]
        }
    }

    let daysInput = document.getElementById("days");
    let hoursInput = document.getElementById("hours");
    let minutesInput = document.getElementById("minutes");
    let secondsInput = document.getElementById("seconds");

    function inputHandler(currentInput,unit,firstInp,secondInp,thirdInp) {
        const value = Number(currentInput.value);
        let [firstUnit,secondUnit,thirdUnit] = convertFrom[unit](value);
        firstInp.value = firstUnit;
        secondInp.value = secondUnit;
        thirdInp.value = thirdUnit;
    }
    document.getElementById("daysBtn")
    .addEventListener("click",()=>inputHandler(daysInput,'days',hoursInput,minutesInput,secondsInput))
    document.getElementById("hoursBtn")
    .addEventListener("click",()=>inputHandler(hoursInput,'hours',daysInput,minutesInput,secondsInput))
    document.getElementById("minutesBtn")
    .addEventListener("click",()=>inputHandler(minutesInput,'minutes',daysInput,hoursInput,secondsInput))
    document.getElementById("secondsBtn")
    .addEventListener("click",()=>inputHandler(secondsInput,'seconds',daysInput,hoursInput,minutesInput))

}