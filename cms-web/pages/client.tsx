import React from "react";
import ClientOnly from "../components/client-only";
import AllUser from "../components/users";
import Header from "../components/Header";
import styles from "../styles/Home.module.scss";

const ClientSide: React.FC = () => {
  return (
    <div>
      <Header />
      <div className={styles.container}>
        <ClientOnly>
          <AllUser />
        </ClientOnly>
      </div>
    </div>
  );
};

export default ClientSide;
