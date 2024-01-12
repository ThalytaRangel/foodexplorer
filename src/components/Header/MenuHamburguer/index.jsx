import { useAuth } from "../../../hooks/auth";
import { useSearch } from "../../../hooks/search";
import { useNavigate, Link } from "react-router-dom";
import { Container } from "./styles";
import { BsList, BsX } from "react-icons/bs";
import { PiMagnifyingGlass, PiReceipt } from "react-icons/pi";
import { SearchInput } from "../../SearchInput";
import { ButtonTxt } from "../../ButtonTxt";
import { Logo } from "../../Logo";
import { Footer } from "../../Footer";

export function MenuHamburguer({ isMenuOpen, setIsMenuOpen }) {
  const { signOut, user } = useAuth();
  const navigate = useNavigate();
  const { setSearch } = useSearch();

  const isAdmin = Boolean(user.admin);

  function handleSignOut() {
    signOut();
    navigate("/");
  }

  function handleKeyPress(e) {
    if (e.key === "Enter") {
      setIsMenuOpen(false);
    }
  }

  return (
    <Container>
      {!isMenuOpen ? (
        <header>
          <BsList className="menu-icon" onClick={() => setIsMenuOpen(true)} />
          <Link to="/">
            <Logo type="header" isAdmin={isAdmin} />
          </Link>
          {!isAdmin && (
            <button className="mobile-button">
              <PiReceipt />
              <div id="quantity">0</div>
            </button>
          )}
        </header>
      ) : (
        <div id="open-menu">
          <div className="header">
            <BsX onClick={() => setIsMenuOpen(false)} />
            <span>Menu</span>
          </div>
          <main>
            <SearchInput
              placeholder="Busque por pratos ou ingredientes"
              icon={PiMagnifyingGlass}
              onChange={e => setSearch(e.target.value)}
              onKeyPress={e => handleKeyPress(e)}
            />
            {isAdmin ? (
              <>
                <ButtonTxt
                  className="btn-header"
                  title="Novo prato"
                  onClick={() => {
                    navigate("/new");
                  }}
                />
                <ButtonTxt
                  className="btn-header"
                  title="Meus favoritos"
                  onClick={() => {
                    navigate("/favorites");
                  }}
                />
              </>
            ) : (
              <ButtonTxt
                className="btn-header"
                title="Meus favoritos"
                onClick={() => {
                  navigate("/favorites");
                }}
              />
            )}

            <ButtonTxt
              className="btn-header"
              id="logout"
              title="Sair"
              onClick={handleSignOut}
            />
          </main>
          <Footer />
        </div>
      )}
    </Container>
  );
}
