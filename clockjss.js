setInterval(()=>
{
    let date=new Date()
    console.log(date)
    let hour=date.getHours()
    let minute=date.getMinutes()
    let second=date.getSeconds()
    console.log(second)
    let hrotation=30*hour+minute/2
    let mrotation=6*minute;
    let rot=6*second
    document.getElementsByClassName("hours")[0].style.transform=`rotate(${hrotation}deg)`;
    document.getElementsByClassName("minutes")[0].style.transform=`rotate(${mrotation}deg)`;
    document.getElementsByClassName("seconds")[0].style.transform=`rotate(${rot}deg)`;



},1000)