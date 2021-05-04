import React from 'react';

const Login = ({ id }) => {
  return <div>Login {id}</div>;
};


Login.getInitialProps = async context => {
  return { tag: context.query.tag };
};