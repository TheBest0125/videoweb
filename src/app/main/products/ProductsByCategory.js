import Pagination from "app/shared-components/Pagination";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const mock = [1, 2, 3, 4, 55, 6, , 7, 43, 4, 4];
export default function ProductsByCategory() {
  const [page, setPage] = useState(1);
  const handleChangePage = (val) => {
    setPage(val);
  };
  return (
    <div className="container">
      <h1 className="flex justify-center my-32 text-bold">Category</h1>
      <div className="mx-96 mb-32">
        <div className="grid lg:grid-cols-3 md:grid-cols-2">
          {mock.map((item) => (
            <div className="block m-32 rounded-lg bg-white text-center shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
              <div className="border-b-2 border-neutral-100 px-6 py-12 dark:border-neutral-600 dark:text-neutral-50">
                Video Name
              </div>
              <Link to="/products/id" role="button">
                <img
                  className="rounded-lg py-3"
                  src="/assets/images/backgrounds/1.jpg"
                  alt=""
                />
              </Link>
              <Link to="/productsByUser/:username" role="button">
                <div className="border-t-2 border-neutral-100 px-6 py-12 dark:border-neutral-600 dark:text-neutral-50">
                  User Name
                </div>
              </Link>
            </div>
          ))}
        </div>
        <div className="flex justify-end">
          <Pagination
            page={page}
            count={mock.length}
            handleChangePage={handleChangePage}
          />
        </div>
      </div>
    </div>
  );
}
