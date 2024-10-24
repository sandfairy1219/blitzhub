'use client';

export function calculatexp() {

    console.log("calculating xp");

    const booster = document.getElementById("booster").value;
    const premium = document.getElementById("premium").checked;
    const averagexp = document.getElementById("averagexp").value;
    const nxp = document.getElementById("nxp").value;
    const birthday = document.getElementById("birthday").checked;
    const freexp = document.getElementById("freexp").checked;
    const win = document.getElementById("win").checked;
    if (freexp) {
        const totalfreexp = document.getElementById("totalfreexp")
        totalfreexp.style.display = "block";  
    }else{
        const totalfreexp = document.getElementById("totalfreexp")
        totalfreexp.style.display = "none";  
    }
    let totalxp = 0;
    if (booster === "common") {
        totalxp = 1.25 * averagexp;
    } else if (booster === "rare") {
        totalxp = 1.6 * averagexp;
    } else if (booster === "epic") {
        totalxp = 1.9 * averagexp;
    } else {
        totalxp = averagexp;
    }
    if (premium) {
        totalxp = 1.5 * totalxp;
    }
    if (nxp === "10x") {
        totalxp = 10 * totalxp;
    } else if (nxp === "5x") {
        totalxp = 5 * totalxp;
    } else if (nxp === "4x") {
        totalxp = 4 * totalxp;
    } else if (nxp === "3x") {
        totalxp = 3 * totalxp;
    }
    if (birthday) {
        totalxp = 5 * totalxp;
    }
    
    if(win){
        let totalfxp = averagexp * 0.1492537313432836
        totalfxp = Math.round(totalfxp);
        document.getElementById("totalfreexp").innerHTML = "총 자유 경험치: " + totalfxp;
    }else{
        let totalfxp = averagexp * 0.05
        totalfxp = Math.round(totalfxp);
        document.getElementById("totalfreexp").innerHTML = "총 자유 경험치: " + totalfxp;

    }
    document.getElementById("totalxp").innerHTML = "총 경험치: " + totalxp;
}

