import {
  Button,
  IconButton,
  Switch,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Controller } from "react-hook-form";
import UploadIcon from "@mui/icons-material/Upload";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

export default function AddProduct() {
  const [topLeftLogo, setTopLeftLogo] = useState();
  const [middleLogo, setMiddleLogo] = useState();
  const [adsBanner, setAdsBanner] = useState();

  const onTopLeftLogoChange = (e) => {
    setTopLeftLogo(e.target.files[0]);
  };
  const onMiddleLogoChange = (e) => {
    setMiddleLogo(e.target.files[0]);
  };
  const onAdsBannerChange = (e) => {
    setAdsBanner(e.target.files[0]);
  };
  return (
    <div className="container">
      <h1 className="mt-32 flex justify-center">Site Information</h1>
      <form className="w-1/2">
        <div className="mt-48 mb-16">
          <Typography className="mb-24 font-medium text-14">
            Video Name:
          </Typography>
          <TextField label="Video name" variant="outlined" required fullWidth />
        </div>
        <div className="mt-48 mb-16">
          <Typography className="mb-24 font-medium text-14">
            Video thumbnail:
          </Typography>
          <input type="file" accept="image/*" onChange={onTopLeftLogoChange} />
        </div>
        <div className="mt-48 mb-16">
          <Typography className="mb-24 font-medium text-14">Video:</Typography>
          <input type="file" accept="video/*" onChange={onMiddleLogoChange} />
        </div>
        <div className="mt-48 mb-16"></div>

        <div className="mt-48 mb-16">
          <Typography className="mb-24 font-medium text-14">
            Category:
          </Typography>
          <Select variant="outlined" fullWidth>
            <MenuItem value="10">Ten (10)</MenuItem>
            <MenuItem value="20">Twenty (20)</MenuItem>
            <MenuItem value="30">Thirty (30)</MenuItem>
          </Select>
          <div className="mt-12">
            <span className="font-medium text-14">Peak Video:</span>
            <Switch checked required />
          </div>
        </div>
        <div className="mt-48 mb-16">
          <Typography className="mb-24 font-medium text-14">
            Description:
          </Typography>
          <TextField
            label="Description"
            variant="outlined"
            required
            multiline
            rows={5}
            fullWidth
          />
        </div>
      </form>
      <Button
        className="my-32"
        color="secondary"
        variant="outlined"
        startIcon={<UploadIcon />}
      >
        Upload
      </Button>
    </div>
  );
}
