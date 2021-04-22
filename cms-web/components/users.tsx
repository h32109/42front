import React, { useRef, useEffect } from "react";
import { useLazyQuery, useMutation, useReactiveVar } from "@apollo/client";
import UserList, { addUser } from "../store/userStore";
import { ALLUSER_QUERY, ADDUSER_MUTATION } from "../graphql/schema";
import User from "../models/user";
import styles from "../styles/Home.module.scss";

const AllUser: React.FC = () => {
  const [getAllUser, { data, loading, error }] = useLazyQuery<User>(
    ALLUSER_QUERY,
  );
  const [createUser] = useMutation<User>(ADDUSER_MUTATION);
  // createUserResult 사용하면 렌더링 관련 에러 발생
  // const [createUser, createUserResult] = useMutation(ADDUSER_MUTATION);
  const userList = useReactiveVar(UserList);

  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const idRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    console.error(error);
    return null;
  }

  // useEffect(() => {
  //   console.log("aaa", createUserResult.data);
  // }, [createUserResult.data]);

  const onSubmitAddUser = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const userInput = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      id: idRef.current.value,
      password: passwordRef.current.value,
    };
    // store에 있는 UserList에 새로운 user 정보 추가 => useReactiveVar로 데이터 가지고 옴 ( DB에 저장 x )
    addUser(userInput);
    // useMutation으로 DB에 새로운 user 정보 추가 => uesQuery or useLazyQuery로 데이터 가지고 올때 쓰임 ( DB에 저장 o )
    createUser({ variables: { UserInput: userInput } });
  };

  const onClickGetDataBtn = (e: React.MouseEvent) => {
    e.preventDefault();
    // useLazyQuery로 DB 조회
    getAllUser({});
  };

  return (
    <div className={styles.grid}>
      <h3 style={{ width: "100%" }}>Create User</h3>
      <form onSubmit={onSubmitAddUser}>
        <input type="text" ref={nameRef} placeholder="name" />
        <input type="text" ref={emailRef} placeholder="email" />
        <input type="text" ref={idRef} placeholder="id" />
        <input type="text" ref={passwordRef} placeholder="password" />
        <button type="submit">addUser</button>
      </form>
      <h3 style={{ width: "100%" }}>Get & Show User By useLazyQuery</h3>
      <button type="button" onClick={onClickGetDataBtn}>
        getUser
      </button>
      {data !== undefined &&
        data.allUser.length &&
        data.allUser.map((user) => (
          <div key={user.id} className={styles.card}>
            <h3>{user.name}</h3>
            <p>
              {user.id} - {user.email}
            </p>
          </div>
        ))}
      <h3 style={{ width: "100%" }}>Show User By Store ( useReactiveVar )</h3>
      {userList.map((user) => (
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
