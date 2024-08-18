const Header = () => {
  return (
    <nav className="blue darken-1">
      <div className="nav-wrapper">
        <a href="collapsible.html" className="brand-logo">Movies</a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <a href="https://github.com/Onfire22/movies" rel="noreferrer" target="_blank">GitHub Repo</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
