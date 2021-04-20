import React from "react";
// import Head from "next/head"; // 페이지의 Head 수정 가능하게 해주는 모듈
import Header from "../components/Header";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <div>
      <Header />
      <div className={styles.container}>HOME</div>
    </div>
  );
}
