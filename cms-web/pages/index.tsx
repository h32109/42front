import React, { useState } from "react";
import Head from "next/head"; // 페이지의 Head 수정 가능하게 해주는 모듈
import styles from "../styles/Home.module.scss";
import testRequest from "./api/hello";

export default function Home() {
  const [text, setText] = useState<string>("자바스크립트");
  setTimeout(() => {
    // 이 부분 주석
    // setText(0);
    // 이 부분 주석 해제
    setText("타입스크립트");
  }, 1000);

  const clickTestAPI = () => {
    testRequest();
  };

  return (
    <div className={styles.container}>
      <div>
        <span>{text} 적용 완료</span>
        <button type="button" onClick={clickTestAPI}>
          testAPI
        </button>
      </div>
    </div>
  );
}
