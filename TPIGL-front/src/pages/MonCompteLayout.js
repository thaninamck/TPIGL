import { Outlet, Link } from "react-router-dom";

import MenuBar from "../components/MenuBar";

const MonCompteLayout = () => {
  return (
    <>
      <MenuBar />
      <Outlet />
    </>
  )
};

export default MonCompteLayout;