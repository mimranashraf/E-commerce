import React from "react";
import "../style/Header.css";
import Link from "next/link";
export default function Header() {
  return (
    <header>
      <div className="top-div">
        <div className="top-p">
          <p className="para">
            Sign up and get 20% off to your first order.
            <span className="span">Sign Up Now</span>
          </p>
        </div>
        <div className="heading">
          <div className="name">
            <p>SHOP.CO</p>
          </div>

          <div className="menu">
            <Link href="" className="link">
              Shop
            </Link>
            <Link href="" className="link">
             On Sale
            </Link>
            <Link href="" className="link">
              New Arrivals
            </Link>
            <Link href="" className="link">
              Brands
            </Link>
          </div>

          <input
            type="text"
            placeholder="Search for Products..."
            className="input"
          />
          <div className="icon"></div>
          <div className="icon-img">
            <img src="../images/Vector.png" alt="" />
            <img src="../images/Frame.png" alt="" />
          </div>
        </div>
      </div>
    </header>
  );
}
