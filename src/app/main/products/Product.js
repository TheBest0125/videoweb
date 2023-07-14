import Button from "@mui/material/Button";
import React from "react";
import { Link } from "react-router-dom";

const mock = [1, 2, 3, 4, 55, 6, , 7, 43, 4, 4];
export default function Product() {
  return (
    <div className="container">
      <div className="mx-[60px]">
        <div className="flex mt-12 h-128">
          <div className="grow text-center">
            <h1>Video Name</h1>
            <h3>User Name</h3>
          </div>

          <img
            className="w-256 rounded-lg mb-20"
            src="/assets/images/backgrounds/1.jpg"
            alt=""
          />
        </div>
        <div>
          <div>
            <video
              class="shadow-lg w-full md:h-[650px] h-[480px]"
              autoplay
              loop
              controls
              muted
            >
              {/* <source src="/assets/videos/1.mp4" type="video/mp4" /> */}
            </video>
          </div>
          <div className="relative">
            <Button
              component={Link}
              to="/productsByCategory/category"
              class="absolute p-12 rounded-lg bg-cyan-500 hover:bg-cyan-600 text-white left-0 top-10"
              role="button"
            >
              Back to Last Page
            </Button>
            <button class="absolute p-12 rounded-lg bg-cyan-500 hover:bg-cyan-600 text-white right-0 top-10">
              Next Random Video
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
