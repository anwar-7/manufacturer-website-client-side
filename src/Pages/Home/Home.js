import React from 'react';
import Footer from '../Shared/Footer';
import PageTitle from '../Shared/PageTitle';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import Client from './Client';
import Reviews from './Reviews';
import Subscribe from './Subscribe';
import Tools from './Tools';

const Home = () => {
  return (
    <div className="home">
      <PageTitle title={'Home'}></PageTitle>
      {/* <h1>This is home</h1> */}
      <div>
        <Banner></Banner>
        <Tools></Tools>
        <BusinessSummary></BusinessSummary>
        <Reviews></Reviews>
        <Subscribe></Subscribe>
        <Client></Client>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Home;
