import Pagination from "app/shared-components/Pagination";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useDeepCompareEffect } from "@fuse/hooks";

export default function ProductsByCategory() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(9);
  const [totalPage, setTotalPage] = useState(0);

  const routeParams = useParams();
  const { categoryId, categoryName } = routeParams;

  const fetchProducts = async () => {
    const res = await axios.post("api/productsByCategory", {
      categoryId,
      start: (page - 1) * perPage,
      limit: perPage,
    });
    setData(res.data.data);
    setTotalPage(res.data.total);
  };
  useDeepCompareEffect(() => {
    fetchProducts();
  }, [routeParams, page, perPage]);
  const handleChangePage = (val) => {
    setPage(val);
  };
  return (
    <div className="container">
      <h1 className="flex justify-center my-32 text-bold">{categoryName}</h1>
      <div className="mb-32">
        <div className="grid lg:grid-cols-3 md:grid-cols-2">
          {data.map((item) => (
            <div key={item.id}>
              <div className="block m-32 rounded-lg bg-white text-center shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                <div className="border-b-2 border-neutral-100 px-6 py-12 dark:border-neutral-600 dark:text-neutral-50">
                  {item.name}
                </div>
                <Link
                  to={`/products/category/${item.name}/${item.id}`}
                  role="button"
                >
                  <div
                    className="flex justify-center items-center"
                    style={{ backgroundColor: "black" }}
                  >
                    <img
                      className="rounded-lg py-3 h-[200px]"
                      src={`${process.env.REACT_APP_SERVER_URL}/uploads/${item.imageURL}`}
                      alt="image"
                    />
                  </div>
                </Link>
                <Link
                  to={`/productsByUser/${item.username}/${item.userId}`}
                  role="button"
                >
                  <div className="border-t-2 border-neutral-100 px-6 py-12 dark:border-neutral-600 dark:text-neutral-50">
                    {item.username}
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-end">
          <Pagination
            page={page}
            count={totalPage}
            handleChangePage={handleChangePage}
          />
        </div>
      </div>
    </div>
  );
}
