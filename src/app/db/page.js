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





        
    </div>
    
  );
}