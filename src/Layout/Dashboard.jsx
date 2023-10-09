import { NavLink, Outlet } from "react-router-dom";
import {
  FaHome,
  FaWallet,
  FaUsers,
  FaCalendarAlt,
  FaBookOpen,
  FaHotTub,
  FaInbox,
  FaBars,
  FaRegCalendarCheck,
  FaRegCalendarPlus,
  FaReceipt,
  FaShoppingCart,
} from "react-icons/fa";
import useAdmin from "../hooks/useAdmin";
// import useInstructor from "../hooks/useInstructor";

const Dashboard = () => {
  const { isAdmin } = useAdmin();
  // const { isInstructor } = useInstructor();

  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button">
        <FaBars />
      </label>
      <div className="drawer-content">
        <Outlet></Outlet>
      </div>
      <div className="drawer-side bg-primary">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80">
          {isAdmin && (
            <>
              <li>
                <NavLink to="/dashboard/admin-home">
                  <FaHome></FaHome> Admin Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/all-users">
                  <FaUsers></FaUsers> All Users
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/add-product">
                  <FaRegCalendarPlus></FaRegCalendarPlus> Add Product
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/all-product">
                  <FaBookOpen></FaBookOpen> All Product
                </NavLink>
              </li>
              <div className="divider"></div>
            </>
          )}
          <li>
            <NavLink to="/">
              <FaHome></FaHome> Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/my-purses">
              <FaCalendarAlt></FaCalendarAlt> My purses
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/wishlist">
              <FaShoppingCart></FaShoppingCart> Wishlist Classes
            </NavLink>
            <NavLink to="/dashboard/payment-history">
              <FaWallet></FaWallet> Payment History
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
