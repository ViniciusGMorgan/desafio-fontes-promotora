import Projetos from "../pages/projetos/Projetos";
import Home from "../pages/home/Home";

const Pages = [
  {
    name: "home",
    menuName: "Home",
    route: "/",
    component: Home,
    icone: "FiHome",
  },
  {
    name: "projetos",
    menuName: "Projetos",
    route: "/projetos",
    component: Projetos,
    icone: "FiUserPlus",
  },
];

export default Pages;
