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

export default function SiteInfo() {
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
            Top Left Logo:
          </Typography>
          <input type="file" accept="image/*" onChange={onTopLeftLogoChange} />
          <Button
            color="secondary"
            variant="outlined"
            startIcon={<UploadIcon />}
          >
            Upload
          </Button>
        </div>
        <div className="mt-48 mb-16">
          <Typography className="mb-24 font-medium text-14">
            Middle Logo:
          </Typography>
          <input type="file" accept="image/*" onChange={onMiddleLogoChange} />
          <Button
            color="secondary"
            variant="outlined"
            startIcon={<UploadIcon />}
          >
            Upload
          </Button>
        </div>
        <div className="mt-48 mb-16"></div>
        <div className="mt-48 mb-16">
          <Typography className="mb-24 font-medium text-14">
            Contact:
          </Typography>
          <TextField label="Contact" variant="outlined" required fullWidth />
        </div>
        <div className="mt-48 mb-16">
          <Typography className="mb-24 font-medium text-14">
            Company:
          </Typography>
          <TextField label="Company" variant="outlined" required fullWidth />
        </div>
        <div className="mt-48 mb-16">
          <Typography className="mb-24 font-medium text-14">
            Ads Banner:
          </Typography>
          <input type="file" accept="image/*" onChange={onAdsBannerChange} />
          <Button
            color="secondary"
            variant="outlined"
            startIcon={<UploadIcon />}
          >
            Upload
          </Button>
          <Switch checked required />
        </div>
        <div className="mt-48 mb-16">
          <Typography className="mb-24 font-medium text-14">
            Logo Text:
          </Typography>
          <TextField
            label="Logo Text"
            variant="outlined"
            required
            multiline
            rows={3}
            fullWidth
          />
        </div>
      </form>
    </div>
  );
}