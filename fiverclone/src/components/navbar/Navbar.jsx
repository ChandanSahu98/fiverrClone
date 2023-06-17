import React, { useEffect, useState } from "react";
import "./navbar.scss";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);

  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", isActive);

    return () => {
      window.removeEventListener("scroll", isActive);
    };
  });

  const currentUser = {
    id: 1,
    username: "chandan",
    isSeller: true,
  };

  return (
    <div className={active ? "navbar active" : "navbar"}>
      <div className="container">
        <div className="logo">
          <span className="text">fiverr</span>
          <span className="dot">.</span>
        </div>
        <div className="links">
          <span>Fiverr Business</span>
          <span>Explore</span>
          <span>English</span>
          {!currentUser && <span>Sing In</span>}
          {!currentUser?.isSeller && <span>Become a Seller</span>}
          {!currentUser && <button>Join</button>}
          {
            <div className="user" onClick={() => setOpen(!open)}>
              <img
                src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=740&t=st=1687019889~exp=1687020489~hmac=b82193b5e17c3dc5a9a9eae69413e397d83123699e75a703149f418ac9368932"
                alt="userImage"
              />
              <span> {currentUser?.username} </span>
              {open && (
                <div className="options">
                  {currentUser?.isSeller && (
                    <>
                      <span>Gigs</span>
                      <span>Add gigs</span>
                    </>
                  )}
                  <span>Orders</span>
                  <span>Messages</span>
                  <span>Logout</span>
                </div>
              )}
            </div>
          }
        </div>
      </div>
      {active && (
        <>
          <hr />
          <div className="menu">
            <span>Test1</span>
            <span>Test2</span>
          </div>
        </>
      )}
    </div>
  );
};

export default Navbar;
