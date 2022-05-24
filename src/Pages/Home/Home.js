import React from 'react';
import PageTitle from '../Shared/PageTitle';
import Tools from './Tools';

const Home = () => {
  return (
    <div className="home">
      <PageTitle title={'Home'}></PageTitle>
      <h1>This is home</h1>
      <div>
        <Tools></Tools>
      </div>
    </div>
  );
};

export default Home;
