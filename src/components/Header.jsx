const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://th.bing.com/th/id/OIP.cFnOXfOaKfWAWWhxWLUE-gHaHa?rs=1&pid=ImgDetMain"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Name</li>
          <li>About us</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
