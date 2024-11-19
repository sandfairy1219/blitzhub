'use client';

import React from 'react';
import styles from "../styles/page.module.css";

export default function DbPage() {
  return (
    <div>

    <div className={styles.container}>
      <h1 id='dbtitle'>DB Page</h1>
    </div>
      <div className={styles.buttonContainer}>
      </div>
        <button className={styles.button}>미국</button>
        <button className={styles.button}>독일</button>
        <button className={styles.button}>소련</button>
        <button className={styles.button}>영국</button>
        <button className={styles.button}>일본</button>
        <button className={styles.button}>중국</button>
        <button className={styles.button}>프랑스</button>
        <button className={styles.button}>유럽</button>
        <div></div>

        <div className={styles.usatanks}>

          <div className={styles.techtreecontainer}>
            <div>T110E4 트리</div>
          </div>
          <div className={styles.techtreecontainer}>
            <div>T110E3 트리</div>    
          </div>
          <div className={styles.techtreecontainer}>
            <div>T110E5 트리</div>
          </div>
          <div className={styles.techtreecontainer}>
            <div>M-VI-Yoh 트리</div>
          </div>
          <div className={styles.techtreecontainer}>
            <div>M48 Patton 트리</div>
          </div>
          <div className={styles.techtreecontainer}>
            <div>T57 Heavy 트리</div>
          </div>
          <div className={styles.techtreecontainer}>
            <div>Sheridan 트리</div>
          </div>
        </div>

        <div className='germantanks'>

          </div>




    </div>
    
  );
}