import { Link } from "react-router-dom";
import "../../styles/Footer.css";

export function Footer() {
  return (
    <div id="footer">
      <div
        className="d-flex flex-column justify-content-between align-content-center"
        style={{ height: "100%" }}
      >
        <div className="text-light d-flex flex-grow-1 justify-content-between align-content-center">
          <div>
            <h1>Div1</h1>
          </div>
          <div>
            <h1>Div2</h1>
          </div>
          <div>
            <h1>Div3</h1>
          </div>
        </div>
        <div>
          <Link to="/about" className="link-primary">
            Impressum
          </Link>
          <Link to="/privacy" className="link-primary ms-2">
            Datenschutz
          </Link>
        </div>
      </div>
    </div>
  );
}
