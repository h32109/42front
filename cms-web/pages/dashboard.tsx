import React from 'react';

const Dashboard = ({ id }) => {
  return <div>Login {id}</div>;
};


Dashboard.getInitialProps = async context => {
  return { tag: context.query.tag };
};