import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import AllOrder from './AllOrder';

const AllOrders = () => {
  const {
    data: orders,
    isLoading,
    refetch,
  } = useQuery('orders', () =>
    fetch('https://ztools-a12.herokuapp.com/allorder', {
      method: 'GET',
      headers: {
        authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <h2 className="text-2xl">All orders: {orders?.length}</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Email</th>
              <th>User Name</th>
              <th>Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Control</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <AllOrder
                key={order._id}
                order={order}
                refetch={refetch}
              ></AllOrder>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllOrders;
