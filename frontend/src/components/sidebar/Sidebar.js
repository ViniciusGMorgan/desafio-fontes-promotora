import React, { useEffect, useRef, useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { Auth } from "../../config/storage";
import * as FeatherIcons from "react-icons/fi";

import routes from "../../routes/pages";

import "./Sidebar.css";

export default function Sidebar({ location }) {
  const history = useHistory();
  const wrapperRef = useRef(null);
  const isOpen = false;
  const [unhover, setUnhover] = useState(false);

  const handleToggleMenuItem = async () => {
    await setUnhover(true);
    setTimeout(() => setUnhover(false), 1500);
  };

  useEffect(() => {
    handleToggleMenuItem();
  }, [location]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        closeMenu(isOpen);
      }
    }

    function closeMenu(statusMenu) {
      if (statusMenu) {
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef, isOpen]);

  function logout() {
    sessionStorage.removeItem(Auth);
    history.replace("/login");
  }

  const SideBarItem = (item) => {
    const Icon = FeatherIcons[item.item.icone];
    return (
      <Link className="sideBarItem" to={item.item.route}>
        <Icon size="25" />

        <span className={`navbar__brand ${isOpen && "displayBlock"}`}>
          {item.item.menuName}
        </span>
      </Link>
    );
  };

  const SideBarLogo = ({ isOpen }) => {
    return (
      <div className="sideBarLogoContainer">
        <div className={`sideBarLogo logoClose ${isOpen && "displayNone"}`} />
        <div className={`sideBarLogo logoOpen ${!isOpen && "displayNone"}`} />
      </div>
    );
  };

  const UnhoverBlock = () => {
    return (
      <div
        style={{
          display: "flex",
          height: "100vh",
          width: 300,
          zIndex: 4,
          backgroundColor: "transparent",
          position: "fixed",
        }}
      />
    );
  };
  return (
    <>
      {unhover && <UnhoverBlock />}
      <div
        ref={wrapperRef}
        className={`sideBarContainer ${isOpen && "show displayBlock"}`}
      >
        <div
          onClick={() => handleToggleMenuItem()}
          style={{ cursor: "pointer" }}
        >
          <SideBarLogo isOpen={isOpen} />
        </div>
        <div className="sideBarScroll">
          {routes.map((item) => (
            <SideBarItem item={item} />
          ))}
        </div>

        {!routes && isOpen && (
          <p className="text-white margin-left">Sem opções disponíveis</p>
        )}

        <Link
          onClick={() => logout()}
          to=""
          id="sair"
          className="sideBarItem out"
        >
          <FeatherIcons.FiLogOut size="20" />
          <span className={`navbar__brand ${isOpen && "displayBlock"}`}>
            Sair
          </span>
        </Link>
      </div>
    </>
  );
}
