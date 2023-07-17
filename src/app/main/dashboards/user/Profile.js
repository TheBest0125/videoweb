import { TextField, Typography, Button } from "@mui/material";
import React, { useState } from "react";
import { selectUser } from "app/store/userSlice";
import { useSelector, useDispatch } from "react-redux";
import SaveIcon from "@mui/icons-material/Save";
import axios from "axios";
import { showMessage } from "app/store/fuse/messageSlice";
import { setUser } from "app/store/userSlice";

export default function Profile() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const [password, setPassword] = useState("");
  const [email, setEmail] = useState(user.data.email);

  const handleChangePassword = async (e) => {
    e.preventDefault();

    await axios.post("api/profile/changePassword", {
      id: user.data.id,
      password,
    });
    dispatch(showMessage({ message: "Password changed successfully." }));
    setPassword("");
  };
  const handleChangeEmail = async (e) => {
    e.preventDefault();
    const response = await axios.post("api/profile/changeEmail", {
      id: user.data.id,
      email,
    });
    dispatch(setUser(response.data.user));
    dispatch(showMessage({ message: "Email changed successfully." }));
  };
  return (
    <div className="container">
      <h1 className="mt-32 flex justify-center">Profile</h1>
      <div className="w-1/2">
        <div className="mt-48 mb-16">
          <Typography className="mb-24 font-medium text-14">
            Username:
          </Typography>
          <TextField
            value={user.data.name}
            label="Username"
            variant="outlined"
            disabled
            fullWidth
          />
        </div>
        <div className="mt-48 mb-16">
          <form onSubmit={handleChangePassword}>
            <Typography className="mb-24 font-medium text-14">
              Password:
            </Typography>
            <TextField
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              label="Password"
              type="password"
              inputProps={{ minLength: 8 }}
              variant="outlined"
              required
              fullWidth
            />
            <Button
              className="mt-8"
              color="secondary"
              variant="outlined"
              type="submit"
              startIcon={<SaveIcon />}
            >
              Change
            </Button>
          </form>
        </div>

        <div className="mt-48 mb-16">
          <form onSubmit={handleChangeEmail}>
            <Typography className="mb-24 font-medium text-14">
              Email:
            </Typography>
            <TextField
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              label="Email"
              type="email"
              variant="outlined"
              required
              fullWidth
            />
            <Button
              className="mt-8"
              color="secondary"
              variant="outlined"
              type="submit"
              startIcon={<SaveIcon />}
            >
              Change
            </Button>
          </form>
        </div>
        <div className="mt-48 mb-16">
          <Typography className="mb-24 font-medium text-14">
            Product Number:
          </Typography>
          <TextField
            value={user.data.productNumber}
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
            value={user.data.coinbaseAccount}
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
            value={user.data.paypalAccount}
            label="Paypal Account"
            variant="outlined"
            disabled
            fullWidth
          />
        </div>
      </div>
    </div>
  );
}
