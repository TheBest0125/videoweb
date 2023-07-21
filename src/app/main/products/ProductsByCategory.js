import Pagination from "app/shared-components/Pagination";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useDeepCompareEffect } from "@fuse/hooks";
import FusePageSimple from "@fuse/core/FusePageSimple/FusePageSimple";
import FuseSvgIcon from "@fuse/core/FuseSvgIcon";
import { Box } from "@mui/system";
import { motion } from "framer-motion";
import Input from "@mui/material/Input";
import { styled } from "@mui/material/styles";

const Root = styled(FusePageSimple)(({ theme }) => ({
  "& .FusePageSimple-header": {
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function ProductsByCategory() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [searchText, setSearchText] = useState("");
  const [perPage, setPerPage] = useState(9);
  const [totalPage, setTotalPage] = useState(0);

  const routeParams = useParams();
  const { categoryId, categoryName } = routeParams;

  const fetchProducts = async () => {
    const res = await axios.post("api/productsByCategory", {
      categoryId,
      start: (page - 1) * perPage,
      limit: perPage,
      searchText,
    });
    setData(res.data.data);
    setTotalPage(res.data.total);
  };
  useDeepCompareEffect(() => {
    fetchProducts();
  }, [routeParams, page, perPage, searchText]);
  const handleChangePage = (val) => {
    setPage(val);
  };
  return (
    <Root
      header={
        <>
          <div className="mt-20 font-bold flex justify-center items-center text-[40px]">
            {categoryName}
          </div>
          <Box
            component={motion.div}
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1, transition: { delay: 0.2 } }}
            className="flex flex-1 w-full sm:w-auto items-center px-16 mx-8 border-1 rounded-full my-[30px]"
          >
            <FuseSvgIcon color="action" size={20}>
              heroicons-outline:search
            </FuseSvgIcon>

            <Input
              placeholder={`Search ${categoryName} by video name.`}
              className="flex flex-1 px-16"
              disableUnderline
              fullWidth
              value={searchText}
              inputProps={{
                "aria-label": "Search",
              }}
              onChange={(e) => setSearchText(e.target.value)}
            />
          </Box>
        </>
      }
      content={
        <div className="p-20 w-full mb-32">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
            {data.map((item) => (
              <div key={item.id}>
                <div className="block m-32 rounded-lg bg-white text-center shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                  <div className="truncate  border-b-2 border-neutral-100 px-[70px] py-12 dark:border-neutral-600 dark:text-neutral-50">
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
      }
    ></Root>
  );
}
