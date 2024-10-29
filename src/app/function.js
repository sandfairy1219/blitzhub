'use client';

export function calculatexp() {

    console.log("calculating xp");

    const booster = document.getElementById("booster").value;
    const premium = document.getElementById("premium").checked;
    const averagexp = document.getElementById("averagexp").value;
    const nxp = document.getElementById("nxp").value;
    const birthday = document.getElementById("birthday").checked;
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
    
    document.getElementById("totalxp").innerHTML = "총 경험치: " + totalxp;
}

export function calculatefreexp(){
    console.log("calculating freexp");

    const averagexp = document.getElementById("averagexp").value;
    const win = document.getElementById("win").checked;
    const fxpbooster = document.getElementById("fxpbooster").value;
    const premium = document.getElementById("premium").checked;
    const totalfreexp = document.getElementById("totalfreexp");

    let totalfxp = 0;
    if (win) {
        totalfxp = averagexp * 0.1492537313432836;
        totalfxp = Math.round(totalfxp);
    } else {
        totalfxp = averagexp * 0.05;
        totalfxp = Math.round(totalfxp);
    }
    if (fxpbooster === "common") {
        totalfxp = 1.5 * totalfxp;
    } else if (fxpbooster === "rare") {
        totalfxp = 3.5 * totalfxp;
    } else if (fxpbooster === "epic") {
        totalfxp = 5 * totalfxp;
    }
    if (premium) {
        totalfxp = 1.5 * totalfxp;
    }
    totalfreexp.innerHTML = "총 자유 경험치: " + totalfxp;
}