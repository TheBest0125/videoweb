import React, { useState } from "react";
import Pagination from "app/shared-components/Pagination";
import { Link, useParams } from "react-router-dom";
import { useDeepCompareEffect } from "@fuse/hooks";
import axios from "axios";
import FusePageSimple from "@fuse/core/FusePageSimple/FusePageSimple";

export default function ProductsByUser() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(9);
  const [totalPage, setTotalPage] = useState(0);

  const routeParams = useParams();
  const { userId, username } = routeParams;

  const handleChangePage = (val) => {
    setPage(val);
  };
  const fetchProducts = async () => {
    const res = await axios.post("api/productsByUser", {
      userId,
      start: (page - 1) * perPage,
      limit: perPage,
    });
    setData(res.data.data);
    setTotalPage(res.data.total);
  };
  useDeepCompareEffect(() => {
    fetchProducts();
  }, [routeParams, page, perPage]);

  return (
    <FusePageSimple
      header={
        <div className="mt-20 font-bold flex justify-center items-center text-[40px]">
          {username}
        </div>
      }
      content={
        <div className="p-20 w-full mb-32">
          <div className="grid lg:grid-cols-3 md:grid-cols-2">
            {data.map((item) => (
              <div key={item.id}>
                <div className="block m-32 rounded-lg bg-white text-center shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                  <div className="border-b-2 border-neutral-100 px-6 py-12 dark:border-neutral-600 dark:text-neutral-50">
                    {item.name}
                  </div>
                  <Link to={`/products/user/${item.name}/${item.id}`}>
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
      }
    ></FusePageSimple>
  );
}
