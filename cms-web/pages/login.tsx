import React from 'react';

const Login = ({ id }) => {
  return <div>Login {id}</div>;
};

// Component.getInitialProps(ctx) 로 전달된 ctx 여기서 contenxt 이다
Login.getInitialProps = async context => {
  return { tag: context.query.tag };
};