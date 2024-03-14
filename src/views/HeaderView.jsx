import React from "react";
import { Link, NavLink } from "react-router-dom";

const HeaderView = () => {
  return (
    <div className="d-flex justify-content-between p-3 align-items-center">
      <Link
        to={"/home"}
        className="d-flex gap-3 align-items-center text-decoration-none"
      >
        <img height={40} src="/c-logo.png" />
        <span className="text-light">Coinmania</span>
      </Link>

      <nav className="d-flex gap-3">
        <NavLink className={"text-light text-decoration-none"} to={"/"}>
          Giriş Yap
        </NavLink>
        <NavLink className={"text-light text-decoration-none"} to={"/home"}>
          Anasayfa
        </NavLink>
      </nav>
    </div>
  );
};

export default HeaderView;
