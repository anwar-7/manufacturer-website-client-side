import React from 'react';
import { useNavigate } from 'react-router-dom';
import found from '../../assets/images/found.png';

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url(${found})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold uppercase">
            Go to Home Please
          </h1>

          <button onClick={() => navigate('/')} className="btn btn-primary">
            HOME
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
