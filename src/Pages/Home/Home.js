import React from 'react';
import PageTitle from '../Shared/PageTitle';
import Reviews from './Reviews';
import Tools from './Tools';

const Home = () => {
  return (
    <div className="home">
      <PageTitle title={'Home'}></PageTitle>
      {/* <h1>This is home</h1> */}
      <div>
        <Tools></Tools>
        <Reviews></Reviews>
      </div>
    </div>
  );
};

export default Home;
