import React from 'react';

const Dashboard = ({ id }) => {
  return <div>Login {id}</div>;
};

// Component.getInitialProps(ctx) 로 전달된 ctx 여기서 contenxt 이다
Dashboard.getInitialProps = async context => {
  return { tag: context.query.tag };
};