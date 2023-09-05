

const TestNav = () => {


  return (
    <nav>
      <div className="container">
        <a href="/" className="navbar-brand">My Website</a>
        <ul className="nav nav-pills">
        <li className="nav-item">
            <a href="/home" className="nav-link">Home</a>
        </li>
        <li className="nav-item">
            <a href="/about" className="nav-link">About</a>
        </li>
        <li className="nav-item dropdown">
            <a href="#" className="nav-link dropdown-toggle" id="profileMenu" data-toggle="dropdown">Profile</a>
            <div className="dropdown-menu" aria-labelledby="profileMenu">
            <a href="/profile" className="dropdown-item">My Profile</a>
            <a href="/settings" className="dropdown-item">Settings</a>
            <a href="/logout" className="dropdown-item">Logout</a>
            </div>
        </li>
        </ul>
    </div>
    </nav>
  );
};

export default TestNav;