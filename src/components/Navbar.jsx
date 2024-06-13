import { FiMenu } from "react-icons/fi";
import NavLinks from "./NavLinks";
import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import { useSelector } from "react-redux";
import avatar from "../assets/image-avatar.png"
import New from "./New";

function Navbar() {
  const {value,cartItem} = useSelector((state) => state.counter);
  
 

  return (
    <div
      className="navbar con-align py-8 border-b border-base-300 mb-9 flex
    items-center"
    >
      {/* start */}
      <div className="flex gap-2 items-center mr-16">
        <div className="drawer lg:hidden flex z-10">
          <input id="my-drawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            {/* Page content here */}
            <label htmlFor="my-drawer" className="drawer-button ">
              <FiMenu className="text-2xl  mt-2 text-base-content" />
            </label>
          </div>
          <div className="drawer-side ">
            <label
              htmlFor="my-drawer"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content  ">
              {/* Sidebar content here */}
              <label htmlFor="my-drawer" className="w-4">
                <IoMdClose className="w-5 h-5" />
              </label>
              <div className="mt-6">
                <NavLinks />
              </div>
            </ul>
          </div>
        </div>

        <Link to="/">
          <h1 className="font-bold text-3xl md:text-4xl ">sneakers</h1>
        </Link>
      </div>
      {/* center */}
      <div className=" hidden lg:flex mr-auto">
        <ul className="">
          <NavLinks />
        </ul>
      </div>
      {/* end */}

      <div className="flex gap-8">
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <div className="indicator">
              <FiShoppingCart className="w-6 h-6" />
              <span className="badge badge-sm indicator-item bg-orange-500 text-white">
                {value}
              </span>
            </div>
          </div>
          <div
            tabIndex={0}
            className="menu menu-lg dropdown-content mt-3 z-[1] p-4 shadow bg-base-100 rounded-box w-80 "
          >
            <h4 className="font-bold mb-5">Cart</h4>
            <hr />
            <div>
              {cartItem &&
                cartItem.map((item) => {
                  return <New key={item.image} cartItem={cartItem} />;
                })}
            </div>
          </div>
        </div>
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img src={avatar} alt="" />
            </div>
          </div>
          <div
            tabIndex={0}
            className="menu menu-lg dropdown-content mt-3 z-[1] p-4 shadow bg-base-100 rounded-box w-80 "
          >
            <h4 className="font-bold mb-5">Cart</h4>
            <hr />
           
            <div>
              {cartItem &&
                cartItem.map((item) => {
                  return <New key={item.image} cartItem={cartItem} />;
                })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
