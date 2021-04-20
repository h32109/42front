import { gql } from "@apollo/client";
import client from "../lib/apolloClient";
import Header from "../components/Header";
import styles from "../styles/Home.module.scss";

const StaticPage = ({ allUser }) => {
  return (
    <div>
      <Header />
      <div className={styles.grid}>
        {allUser.map((user) => (
          <div key={user.id} className={styles.card}>
            <h3>{user.name}</h3>
            <p>
              {user.id} - {user.email}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
      query allUser {
        allUser {
          name
          id
          password
          email
        }
      }
    `,
  });

  return {
    props: {
      allUser: data.allUser,
    },
  };
}

export default StaticPage;
