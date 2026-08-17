function Footer() {
  return (
    <div className="footer">
      <div className="footer__row">
        <span className="footer__made">
          Made by <strong>Ansh Narsale</strong>
        </span>
        <div className="footer__links">
          <a
            href="https://anshnarsale.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            anshnarsale.netlify.app
          </a>
          <a
            href="https://github.com/anshnarsale"
            target="_blank"
            rel="noreferrer"
          >
            github.com/anshnarsale
          </a>
        </div>
      </div>
      <p className="footer__disclaimer">
        Fan-made tribute · Not affiliated with or endorsed by Salman Khan · No
        copyright claim
      </p>
    </div>
  );
}

export default Footer;
