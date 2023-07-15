import { TextField, Typography } from "@mui/material";
import React, { useState } from "react";
export default function Profile() {
  return (
    <div className="container">
      <h1 className="mt-32 flex justify-center">Profile</h1>
      <form className="w-1/2">
        <div className="mt-48 mb-16">
          <Typography className="mb-24 font-medium text-14">
            Username:
          </Typography>
          <TextField label="Username" variant="outlined" disabled fullWidth />
        </div>
        <div className="mt-48 mb-16">
          <Typography className="mb-24 font-medium text-14">
            Password:
          </Typography>
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            required
            fullWidth
          />
        </div>
        <div className="mt-48 mb-16">
          <Typography className="mb-24 font-medium text-14">Email:</Typography>
          <TextField
            label="Email"
            type="email"
            variant="outlined"
            required
            fullWidth
          />
        </div>
        <div className="mt-48 mb-16">
          <Typography className="mb-24 font-medium text-14">
            Product Number:
          </Typography>
          <TextField
            label="Product Number"
            variant="outlined"
            disabled
            fullWidth
          />
        </div>
        <Typography className="mt-24 font-medium text-18">Payment</Typography>
        <div className="mt-12 mb-16">
          <Typography className="mb-24 font-medium text-14">
            Coinbase Account:
          </Typography>
          <TextField
            label="Coinbase Account"
            variant="outlined"
            disabled
            fullWidth
          />
        </div>
        <div className="mt-48 mb-16">
          <Typography className="mb-24 font-medium text-14">
            Paypal Account:
          </Typography>
          <TextField
            label="Paypal Account"
            variant="outlined"
            disabled
            fullWidth
          />
        </div>
      </form>
    </div>
  );
}
