import NavbarBrand from "./navbar/NavbarBrand";
import logoEdited from "../../media/logo.webp";
import LanguageDropdown from "./navbar/LanguageDropdown";

export default function Navbar() {
  return (
    <nav
      className="navbar navbar-dark navbar-expand-lg static-top"
      style={{ backgroundColor: "rgba(0, 0, 0, .8)" }}
    >
      <div className="container-fluid">
        <NavbarBrand img={logoEdited} text="PoE Fanpage" />
        <LanguageDropdown />
      </div>
    </nav>
  );
}
