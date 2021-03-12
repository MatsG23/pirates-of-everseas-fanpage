import NavbarBrand from "./NavbarBrand";
import NavLinks from "./NavLinks";
import logoEdited from "../../../media/logo.webp";

export function Navbar() {
  return (
    <nav
      className="navbar navbar-dark navbar-expand-lg static-top"
      style={{ backgroundColor: "rgba(0, 0, 0, .8)" }}
    >
      <div className="container-fluid">
        <NavbarBrand img={logoEdited} text="PoE Fanpage" />
        <NavLinks />
      </div>
    </nav>
  );
}
