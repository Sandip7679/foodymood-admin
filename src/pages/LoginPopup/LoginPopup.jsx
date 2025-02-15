import React, { useContext, useState } from "react";
import "./LoginPopup.css";
import { url } from "../../assets/assets";
// import { assets } from "../../assets/assets";
// import { StoreContext } from "../../Context/StoreContext";
import axios from "axios";
import { toast } from "react-toastify";

const LoginPopup = ({ setShowLogin }) => {
  // const { setToken, url, loadCartData } = useContext(StoreContext);
  const [currState, setCurrState] = useState("Sign Up");
  const [isLoading, setIsLoading] = useState(false);

  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    type: "admin",
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  const onLogin = async (e) => {
    e.preventDefault();

    setIsLoading(true);

    let new_url = url + "/api/user/login";
    // if (currState === "Login") {
    //   new_url += "/api/user/login";
    // } else {
    //   new_url += "/api/user/register";
    // }
    // new_url += "/api/user/login";
    const response = await axios.post(new_url, data);
    if (response.data.success) {
      // setToken(response.data.token);
      localStorage.setItem("token", response.data.token);
      // loadCartData({ token: response.data.token });
      setShowLogin(false);
      toast.success('Logged in successfully!');
    } else {
      toast.error(response.data.message);
    }
    setIsLoading(false);
  };

  return (
    <div className="login-popup">
      <form onSubmit={onLogin} className="login-popup-container">
        <div className="login-popup-title">
          {/* <h2>{currState}</h2>{" "} */}
          <h2>Login</h2>{" "}
          {/* <img
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt=""
          /> */}
        </div>
        <div className="login-popup-inputs">
          {/* {currState === "Sign Up" ? (
            <input
              name="name"
              onChange={onChangeHandler}
              value={data.name}
              type="text"
              placeholder="Your name"
              required
            />
          ) : (
            <></>
          )} */}
          <input
            name="email"
            onChange={onChangeHandler}
            value={data.email}
            type="email"
            placeholder="Your email"
          />
          <input
            name="password"
            onChange={onChangeHandler}
            value={data.password}
            type="password"
            placeholder="Password"
            required
          />
        </div>
        <div className="login-popup-condition">
          <input type="checkbox" name="" id="" required />
          <p>By continuing, i agree to the terms of use & privacy policy.</p>
        </div>
        <button disabled={isLoading}>
          {isLoading ? (
            <span className="loader1"></span>
          ) : (
            <span className="button-text">Login</span>
          )}

          {/* <span className="loader1"></span> */}
          {/* {isLoading && <span class="loader"></span>}
          <span class="button-text">
          Login
          </span> */}
        </button>
      </form>
    </div>
  );
};

export default LoginPopup;
