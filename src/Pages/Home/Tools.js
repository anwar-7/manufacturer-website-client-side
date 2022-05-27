import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import Tool from './Tool';

const Tools = () => {
  const {
    isLoading,
    error,
    data: tools,
  } = useQuery('tools', () =>
    fetch('http://localhost:5000/tools').then((res) => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <h1 className=" text-center text-3xl font-bold my-8 uppercase text-primary">
        Our Tools
      </h1>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {tools?.slice(-3)?.map((tool) => (
          <Tool key={tool._id} tool={tool}></Tool>
        ))}
      </div>
    </div>
  );
};

export default Tools;
