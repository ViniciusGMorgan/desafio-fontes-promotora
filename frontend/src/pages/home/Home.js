import React from "react";
import { Link, useHistory } from "react-router-dom";
import routes from "../../routes/pages";
import * as FeatherIcons from "react-icons/fi";
import "./HomeStyle.css";

const CardItem = ({ item }) => {
  const Icon = FeatherIcons[item.icone];
  return (
    <div>
      <Link
        title={`Ir para ${item.menuName}`}
        className="card-shortcurt"
        to={`/${item.name}`}
        id={item.name}
      >
        <div className="card-icon">
          {item.icone ? (
            <Icon size="30" color={"#ff5806"} />
          ) : (
            <FeatherIcons.FiAlignLeft size="30" color={"#ff5806"} />
          )}
        </div>
        <span>{item.menuName}</span>
      </Link>
    </div>
  );
};

const Home = () => {
  const menuList = routes;

  return (
    <div
      className="container-shortcurt"
      style={{ alignSelf: "center", justifySelf: "center" }}
    >
      {menuList.map(
        (item) =>
          item.menuName !== "Home" && <CardItem item={item} key={item.id} />
      )}
    </div>
  );
};

export default Home;
