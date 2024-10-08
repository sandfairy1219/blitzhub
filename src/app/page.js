import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (

    <div className={styles.page}>
      <h1 id="title">경험치 계산기</h1>
      <div className={styles.container1}>
        <Image 
          src="https://raw.githubusercontent.com/tresabhi/blitzkit-assets/refs/heads/main/icons/boosters/battle-xp.webp" 
          alt="CXP" 
          width={35} 
          height={50} 
          />
        <div>경험치 부스터</div>
        <select>
          <option value="0">없음</option>
          <option value="common">경험치 부스터 (일반) </option>
          <option value="rare">경험치 부스터 (희귀)</option>
          <option value="epic">경험치 부스터 (에픽)</option>
        </select>
      </div>
      <div className={styles.container}>
        <Image 
          src="https://raw.githubusercontent.com/tresabhi/blitzkit-assets/main/icons/currencies/xp.webp" 
          alt="CXP" 
          width={50} 
          height={50} 
          />
        <input id="averagexp" placeholder="평균 경험치 입력"></input>
      </div>
    </div>
  );
}