import userEvent from '@testing-library/user-event';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';

const Purchase = () => {
  const [user] = useAuthState(auth);
  const { toolId } = useParams();
  const [tool, setTool] = useState({});
  const [userOrderQuantity, setUserOrderQuantity] = useState({});

  // console.log(quantity);

  useEffect(() => {
    fetch(`http://localhost:5000/tools/${toolId}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setTool(data);
        setUserOrderQuantity(data);
      });
  }, [toolId]);

  // const [user, setUser] = useState({
  //     name: 'Akbar The Great',
  //     email: 'akbar@momo.taj',
  //     address: 'Tajmohol Road Md.pur',
  //     phone: '01711111111'
  // });

  // const handleAddressChange = event =>{
  //     console.log(event.target.value);
  //     const {address, ...rest} = user;
  //     const newAddress = event.target.value;
  //     const newUser = {address: newAddress, ...rest};
  //     console.log(newUser);
  //     setUser(newUser);
  // }
  const handleChangeQuantity = (e) => {
    console.log(e.target.value);
    setUserOrderQuantity(e.target.value);
    const { quantity, ...rest } = userOrderQuantity;
    const newQuantity = parseInt(e.target.value);
    const newTool = { quantity: newQuantity, ...rest };
    setUserOrderQuantity(newTool);
  };

  // const handleChangeAvailableQuantity = (e) => {
  //   console.log(e.target.value);
  //   setTool(e.target.value);
  // };

  const formSubmit = (e) => {
    e.preventDefault();
    const userQuantity = userOrderQuantity.quantity;
    const toolQuantity = tool.quantity;
    const toolStock = tool.stock;
    const order = {};
    if (userQuantity > toolStock) {
      toast.error('Minimum Quantity cannot be greater than Available Quantity');
      return false;
    } else if (userQuantity < toolQuantity) {
      toast.error(`Minimum Quantity cannot be less than ${tool.quantity} Unit`);
      return false;
    } else if (isNaN(userQuantity)) {
      toast.error(
        `Please input your order Quantity at least ${toolQuantity} Unit`
      );
      return false;
    } else {
      toast.success(
        `Order Quantity ${userQuantity} unit is placed successfully`
      );
      return true;
    }
  };
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content grid grid-cols-1 lg:grid-cols-2">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">User Information</h1>
            <p className="py-3 text-xl font-semibold">
              User Name: {user?.displayName}
            </p>
            <p className="py-1 text-xl font-semibold">
              User Email: {user?.email}
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <form onSubmit={formSubmit} className="form-control">
                <label className="label">
                  <span className="label-text">Minimum Order Quantity</span>
                </label>
                <input
                  type="number"
                  onChange={handleChangeQuantity}
                  value={userOrderQuantity.quantity}
                  className="input input-bordered mb-3"
                />
                <label className="label">
                  <span className="label-text">Available Quantity</span>
                </label>
                <input
                  type="text"
                  // onChange={handleChangeAvailableQuantity}
                  name="stock"
                  value={tool.stock}
                  className="input input-bordered mb-3"
                  disabled
                />
                <input
                  id="placeOrder"
                  disabled={
                    userOrderQuantity.quantity < tool.quantity ||
                    userOrderQuantity.quantity > tool.stock
                  }
                  className="btn btn-primary"
                  type="submit"
                  value="Place Order"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Purchase;
