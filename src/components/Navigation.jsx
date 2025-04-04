export default function Navigation() {
  return (
    <nav className="container">
      <div className="logo">
        <img src="/brand_logo.png" alt="logo" />
      </div>
      <ul>
        <li>
          <a href="#">Menu</a>
        </li>
        <li>
          <a href="#">Location</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
      <button>Login</button>
    </nav>
  );
}
