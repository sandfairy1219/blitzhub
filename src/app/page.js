'use client';

import React, { useEffect, useState } from "react";
import Image from "next/image";
import desktopStyles from "./styles/page.module.css";
import mobileStyles from "./styles/page.mobile.module.css";
import { calculatexp, calculatefreexp } from "./function.js";

export default function Home() {
  const [isMobileMode, setIsMobileMode] = useState(false);
  const styles = isMobileMode ? mobileStyles : desktopStyles;

  useEffect(() => {
    const calculate = document.getElementById("calculate");
    const freexp = document.getElementById("freexp");
    const totalfreexp = document.getElementById("totalfreexp");

    if (calculate) {
      calculate.addEventListener("click", () => {
        calculatexp();
        if (freexp && freexp.checked) {
          totalfreexp.style.display = "block";
          calculatefreexp();
        } else {
          totalfreexp.style.display = "none";
        }
      });
    }
  }, []);

  useEffect(() => {
    const nxp = document.getElementById("nxp");
    const xdisplay = document.querySelector("#xdisplay");
    if (nxp) {
      nxp.addEventListener("change", () => {
        if (nxp.value === "10x") {
          xdisplay.innerHTML = "10";
        } else if (nxp.value === "5x") {
          xdisplay.innerHTML = "5";
        } else if (nxp.value === "4x") {
          xdisplay.innerHTML = "4";
        } else if (nxp.value === "3x") {
          xdisplay.innerHTML = "3";
        } else if (nxp.value === "0") {
          xdisplay.innerHTML = "n";
        }
      });
    }
  }, []);

  useEffect(() => {
    // Bootstrap JavaScript 파일 추가
    const script = document.createElement('script');
    script.src = "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleToggle = () => {
    setIsMobileMode(!isMobileMode);
  };

  return (
    <div className={styles.page}>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Navbar</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
              <a className="nav-link" href="/db">db</a>
              <a className="nav-link" href="https://wotb-simulator.vercel.app/">상자깡 시뮬레이터</a>
              <button
                type="button"
                id="mobileModeButton"
                className={`btn ${isMobileMode ? 'btn-secondary' : 'btn-primary'}`}
                onClick={handleToggle}
              >
                모바일 모드
              </button>
            </div>
          </div>
        </div>
      </nav>
      <h1 id="title" style={{ marginTop: '20px' }}>경험치 계산기</h1> {/* title 요소를 내려줌 */}
      <div className={styles.container1}>
        <div className={styles.containertitle}>
          <h3 style={{ display: 'block', marginBottom: '10px' }}>경험치 도구</h3> {/* container1의 맨 윗부분에 경험치도구 추가 */}
        </div>
        <div className={styles.containerxp}>
          <Image
            src="https://raw.githubusercontent.com/tresabhi/blitzkit-assets/main/icons/boosters/battle-xp.webp"
            alt="CXP"
            width={35} 
            height={50} 
          />
          <div>경험치 부스터</div>
          <select id="booster" >
            <option value="0">없음</option>
            <option value="common">경험치 부스터 (일반)</option>
            <option value="rare">경험치 부스터 (희귀)</option>
            <option value="epic">경험치 부스터 (에픽)</option>
          </select>
        </div>
        
        <div className={styles.containerpr}>
          <Image 
            src="https://catoolwebdav-net-cdn.gcdn.co/catool/3e6f15d528ae683e19e1769f621c6c7d.png" 
            alt="premium" 
            width={70} 
            height={70} 
          />
          <div>프리미엄 계정</div>
          <input type="checkbox" id="premium" name="premium" value="premium" width='20px' height='20px' ></input>
        </div>
        
        <div className={styles.containern}>
          <div
            style={{
              width: '100px', // CSS 변수는 직접 값으로 대체
              backgroundImage: 'url(https://i.imgur.com/7hDltb4.png)',
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              cursor: 'pointer',
              fontSize: '25px',
              color: 'white',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            className="rt-Flex rt-r-ai-center rt-r-jc-center rt-r-pt-1 rt-r-pl-1 rt-r-w"
          >
            <span>
              x<b id="xdisplay">n</b>
            </span>
          </div>
          <div>경험치 n배 증서</div>
          <select id="nxp" >
            <option value="0">없음</option>
            <option value="3x">3배</option>
            <option value="4x">4배</option>
            <option value="5x">5배</option>
            <option value="10x">10배</option>
          </select>
        </div>
        
        <div className={styles.containerbd}>
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '1em', height: '1em' }}>
        <path d="M63 25V43L48 51H60C58.5 53.6667 51.6 59 36 59L62 25H63Z" fill="currentColor"></path>
        <path d="M48 3L60 18L54 27L48 3Z" fill="currentColor"></path>
        <path d="M3 25V43L18 51H6C7.5 53.6667 14.4 59 30 59L4 25H3Z" fill="currentColor"></path>
        <path d="M18 3L6 18L12 27L18 3Z" fill="currentColor"></path>
        </svg>
          <span>운용 보너스</span>
          <input type="checkbox" id="birthday"></input>
        </div>
        

        
      </div>

      <div className={styles.container2}>
      <div className={styles.containertitle}>
      <h3 style={{ display: 'block', marginBottom: '10px' }}>자유경험치 도구</h3> {/* container2의 맨 윗부분에 경험치 계산 추가 */}
      </div>
        <div className={styles.containerfxp}>
          <svg className={styles.starIcon} viewBox="0 0 24 24">
           <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.4 8.168L12 18.896l-7.334 3.869 1.4-8.168L.132 9.21l8.2-1.192z"/>
          </svg>
          <span>자유경험치 계산하기</span>
          <input type="checkbox" id="freexp"></input>
        </div>
        <div className={styles.containerwin}>
          <span>승패 여부 (체크시 승리)</span>
          <input type="checkbox" id="win"></input>
        </div>
        <div className={styles.containerfxpb}>
          <Image 
            src="https://raw.githubusercontent.com/tresabhi/blitzkit-assets/main/icons/boosters/battle-xp.webp" 
            alt="CXP" 
            width={35} 
            height={50} 
          />
          <div>자유 경험치 부스터</div>
          <select id="fxpbooster" >
            <option value="0">없음</option>
            <option value="common">자유 경험치 부스터 (일반)</option>
            <option value="rare">자유 경험치 부스터 (희귀)</option>
            <option value="epic">자유 경험치 부스터 (에픽)</option>
          </select>
        </div>
      </div>
      
      <div className={styles.container}>
        <Image 
          src="https://raw.githubusercontent.com/tresabhi/blitzkit-assets/main/icons/currencies/xp.webp" 
          alt="CXP" 
          width={50} 
          height={50} 
        />
        <input id="averagexp" placeholder="경험치량 입력"></input>
      </div>
      
      <button type="button" className="btn btn-success" id="calculate">계산하기</button>
      
      <div className={styles.containertotal}>
      <div id="totalxp">총 경험치</div>

      <div id="totalfreexp" style={{ display: 'none' }}>총 자유경험치</div>
      </div>
    </div>
  );
}