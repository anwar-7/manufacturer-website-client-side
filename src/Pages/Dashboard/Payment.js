import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
// import { Elements } from '@stripe/react-stripe-js';
import Loading from '../Shared/Loading';

const Payment = () => {
  const { id } = useParams();
  const url = `https://ztools-a12.herokuapp.com/order/${id}`;

  const { data: order, isLoading } = useQuery(['order', id], () =>
    fetch(url, {
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
      <div className="card w-50 max-w-md bg-base-100 shadow-xl my-12">
        <div className="card-body">
          <p className="text-success font-bold">Hello, {order.patientName}</p>
          <h2 className="card-title">Please Pay for {order.treatment}</h2>
          <p>
            Your order: <span className="text-orange-700">{order.date}</span> at{' '}
            {order.slot}
          </p>
          <p>Please pay: ${order.price}</p>
        </div>
      </div>
      <div className="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
        <div className="card-body">
          {/* <Elements stripe={stripePromise}>
                <CheckoutForm order={order} />
            </Elements> */}
        </div>
      </div>
    </div>
  );
};

export default Payment;
