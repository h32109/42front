import React from "react";
import { useQuery } from "@apollo/client";
import ALLUSER_QUERY from "../graphql/schema";
import styles from "../styles/Home.module.scss";

const AllUser: React.FC = () => {
  const { data, loading, error } = useQuery(ALLUSER_QUERY);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    console.error(error);
    return null;
  }

  return (
    <div className={styles.grid}>
      {data.allUser.length &&
        data.allUser.map((user) => (
          <div key={user.id} className={styles.card}>
            <h3>{user.name}</h3>
            <p>
              {user.id} - {user.email}
            </p>
          </div>
        ))}
    </div>
  );
};

export default AllUser;
