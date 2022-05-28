import React from 'react';

const AllOrder = ({ order }) => {
  // Delete Button
  //   const handelProductDelete = (id) => {
  //     const proceed = window.confirm('Are you sure you want to delete?');
  //     if (proceed) {
  //       console.log('Deleting Product', id);
  //       const url = `http://localhost:5000/order/${id}`;
  //       fetch(url, {
  //         method: 'DELETE',
  //       }).then((res) =>
  //         res.json().then((data) => {
  //           // console.log(data)
  //           if (data.deletedCount > 0) {
  //             alert('Data Deleted');
  //             const remaining = order.filter((or) => or._id !== id);
  //             console.log('remaining', remaining);
  //             setOrders(remaining);
  //           }
  //         })
  //       );
  //     }
  //   };

  return (
    <tr>
      <td>{order?.email}</td>
      <td>{order?.displayName}</td>
      <td>{order?.name}</td>
      <td>{order?.price}</td>
      <td>{order?.orderQuantity}</td>
      <td>
        <button
          //   onClick={() => handelProductDelete(order._id)}
          className="btn btn-error"
        >
          DELETE
        </button>
      </td>
    </tr>
  );
};

export default AllOrder;
