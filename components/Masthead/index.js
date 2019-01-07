const Masthead = () => (
  <header className="masthead">
    <div className="superheader">
      <ul className="contact">
        <li>Telefono:
          <span itemProp="telephone">
            <a href="tel:+390461525388">+39 0461 525388</a>
          </span>
        </li>
        <li>Email:
          <span itemProp="email">
            <a href="mailto">info@frazionamento.it</a>
          </span>
        </li>
      </ul>
      <div className="social-media">
        <ul className="social-media">
          <li><a href="#" title="Facebook">Facebook</a></li>
          <li><a href="https://twitter.com/frazionamentoit" title="Tweeter">Twitter</a></li>
          <li><a href="#" title="YouTube">YouTube</a></li>
          <li><a href="#" title="G+">G+</a></li>
        </ul>
      </div>
      <div className="preventivo">
        <a href="/preventivo">Preventivo</a>
      </div>
    </div>
    <h1 itemProp="name" className="page-title">Frazionamento.it</h1>
    <h2 className="page-subtitle">Rileviamo tutto il Trentino Alto-Adige</h2>    
  </header>
);


export default Masthead;

// itemProp="geo"
// itemProp="logo"
// itemProp="address"
// itemProp="hasMap"
// itemProp="areaServed"
// contactPoint
// url