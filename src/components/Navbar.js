import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useNavigate, useLocation } from "react-router-dom";
import { Container } from "react-bootstrap";

const Navbar = ({ authenticate, setAuthenticate }) => {
  const menuList = ["Best", "Men", "Women", "Acc"];
  const navigate = useNavigate();
  const location = useLocation();

  const goToLogin = () => {
    navigate("/login");
  };

  const goToHome = () => {
    navigate("/");
  };

  const goToMyShop = () => {
    navigate("/shop");
  };

  const search = (event) => {
    if (event.key === "Enter") {
      let keyword = event.target.value;
      navigate(`/?q=${keyword}`);
    }
  };

  return (
    <div>
      <div className="login-button" onClick={goToLogin}>
        {authenticate ? (
          <div onClick={() => setAuthenticate(false)}>
            <FontAwesomeIcon icon={faUser} />
            <span style={{ cursor: "pointer" }}>로그아웃</span>
          </div>
        ) : (
          <div onClick={() => navigate("/login")}>
            <FontAwesomeIcon icon={faUser} />
            <span style={{ cursor: "pointer" }}>로그인</span>
          </div>
        )}
      </div>
      {/* <div className="my-shop-button" onClick={goToMyShop}>
        내상점
      </div> */}

      <div className="img-logo" onClick={goToHome}>
        <img
          width={170}
          src="https://cdn.vectorstock.com/i/preview-2x/01/25/yh-logo-monogram-with-shield-shape-designs-vector-38150125.webp"
        />
      </div>

      <Container>
        {/* login 페이지에서는 메뉴 영역 숨기기 */}
        {location.pathname !== "/login" && (
          <div className="menu-area">
            <ul className="menu-list">
              {menuList.map((menu) => (
                <li className="menu" key={menu}>
                  <a href={menu}>{menu}</a>
                </li>
              ))}
            </ul>

            <div className="search-area">
              <FontAwesomeIcon icon={faSearch} />
              <input
                type="text"
                placeholder="Search.."
                onKeyPress={(event) => search(event)}
              />
            </div>
          </div>
        )}
      </Container>
    </div>
  );
};

export default Navbar;
