import React from "react";

const Productpage = () => {
  return (
    <div className="pt-20 pl-[40px] shadow-md">
      <div className="p-5">
        <h3>Products</h3>
        <div>
          <table>
            <tbody>
              <tr>
                <th>#</th>
                <th>Product</th>
                <th>Category</th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Productpage;
