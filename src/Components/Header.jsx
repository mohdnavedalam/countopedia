import logo from "../images/logo192.png";
import "../CSS/style.css";
const Header = () => {
  return (
    <div>
      <div className="banner-style py-2 pt-4">
        <img src={logo} className="logo-style px-3" />
        <h1 className="heading1">React Course - Countopedia</h1>
      </div>
      <hr style={{ color: "white" }} />
    </div>
  );
};

export default Header;
