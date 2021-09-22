import React from "react";
import { useDispatch } from "react-redux";
import styles from "../styles/header-bottom.module.css";
import { Link } from "react-router-dom";
import { logout } from "../../actions/userAction";

import { KeyboardArrowDownOutlined } from "@material-ui/icons";
const HeaderBottom = () => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <div className={styles.header_left}>
          <div className={styles.header_collaspe}>
            <div className={styles.title}>CATEGORIES</div>
            <KeyboardArrowDownOutlined className={styles.down_icon} />
          </div>
          <div className={styles.regular_link}>
            <Link to='/shop'>Shop</Link>
            <Link to='#'>New Arrival</Link>
            <Link to='#'>Hot Deals</Link>
            <Link to='#'>Contact Us</Link>
          </div>
        </div>
        <div className={styles.header_right}>
          {localStorage.getItem("userInfo") ? (
            ""
          ) : (
            <>
              <Link to='/sign-in'>Sign In</Link>
              <Link to='/sign-up'>Join</Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeaderBottom;
