const Footer = () => {
  return (
    <footer className="page-footer blue darken-2">
      <div className="footer-copyright">
        <div className="container">
        © {new Date().getFullYear()}
        <a className="grey-text text-lighten-4 right" rel="noreferrer" target="_blank" href="https://github.com/Onfire22/movies">GitHub Repo</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
