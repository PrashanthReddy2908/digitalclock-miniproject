function digitalwatch(){

    const time = new Date();
    const hours = time.getHours().toString().padStart(2, '0');
    const minutes = time.getMinutes().toString().padStart(2, '0');
    const seconds = time.getSeconds().toString().padStart(2, '0');
    document.getElementById('clock').textContent=`${hours}:${minutes}:${seconds}`;


    const dd = String(now.getDate()).padStart(2, '0');
    const mm = String(now.getMonth() + 1).padStart(2, '0');
    const yyyy = now.getFullYear();
    document.getElementById('date').textContent = `${dd}-${mm}-${yyyy}`;
}

setInterval(digitalwatch,1000);
digitalclock();