import React, { useState } from "react";
import "./Sidebar.css";
import { assets } from "../../assets/assets";
import { NavLink,useLocation } from "react-router-dom";
import { useEffect } from "react";

const Sidebar = () => {
  const [currItem, setCurrItem] = useState("add");
  const location = useLocation();

  useEffect(()=>{
    console.log('location...',location)
  },[])
  return (
    <div className="sidebar">
      <div className="sidebar-options">
        <NavLink
          to="/add"
          className={`sidebar-option ${location.pathname == '/'?"active":""}`}
          // onClick={() => setCurrItem("add")}
        >
          <img src={assets.add_icon} alt="" />
          <p>Add Items</p>
        </NavLink>
        <NavLink
          to="/list"
          className={`sidebar-option `}
          // onClick={() => setCurrItem("list")}
        >
          <img src={assets.order_icon} alt="" />
          <p>List Items</p>
        </NavLink>
        <NavLink
          to="/orders"
          className={`sidebar-option`}
          // onClick={() => setCurrItem("orders")}
        >
          <img src={assets.order_icon} alt="" />
          <p>Orders</p>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
