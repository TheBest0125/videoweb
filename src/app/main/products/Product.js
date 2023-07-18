import Button from "@mui/material/Button";
import React, { useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useDeepCompareEffect } from "@fuse/hooks";
import axios from "axios";

export default function Product() {
  const [product, setProduct] = useState(null);
  const routeParams = useParams();
  const navigate = useNavigate();
  const { type, id, name } = routeParams;

  const getProduct = async () => {
    const res = await axios.post("api/products/get", { id });
    setProduct(res.data);
  };
  const handleNextRandomVideo = async () => {
    const res = await axios.post("api/products/getNextRandomVideo", {
      categoryId: product.categoryId,
      id,
    });
    navigate(`/products/0/${name}/${res.data}`);
  };
  useDeepCompareEffect(() => {
    getProduct();
  }, [routeParams]);
  return (
    <div className="container">
      {product && (
        <div className="mx-[60px]">
          <div className="flex mt-12 h-128">
            <div className="grow text-center">
              <h1>{product.name}</h1>
              <h3>{product.username}</h3>
            </div>

            <img
              className="w-256 rounded-lg mb-20"
              src={`${process.env.REACT_APP_SERVER_URL}/uploads/${product.imageURL}`}
              alt=""
            />
          </div>
          <div>
            <div>
              <video
                className="shadow-lg w-full md:h-[650px] h-[480px]"
                autoplay
                loop
                controls
                muted
              >
                <source
                  src={`${process.env.REACT_APP_SERVER_URL}/uploads/${product.videoURL}`}
                  type="video/mp4"
                />
              </video>
            </div>
            <div className="relative">
              <Button
                onClick={(e) => navigate(-1)}
                className="absolute p-12 rounded-lg bg-cyan-500 hover:bg-cyan-600 text-white left-0 top-10"
                role="button"
              >
                Back to Last Page
              </Button>
              {type === "category" && (
                <button
                  className="absolute p-12 rounded-lg bg-cyan-500 hover:bg-cyan-600 text-white right-0 top-10"
                  onClick={handleNextRandomVideo}
                >
                  Next Random Video
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
