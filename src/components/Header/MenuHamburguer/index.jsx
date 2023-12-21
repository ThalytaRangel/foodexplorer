import { Container } from "./styles";
import { BsList, BsX, BsFillHexagonFill } from "react-icons/bs";
import { PiMagnifyingGlass, PiReceipt } from "react-icons/pi";
import { SearchInput } from "../../SearchInput";
import { ButtonTxt } from "../../ButtonTxt";
import { Footer } from "../../Footer";

export function MenuHamburguer({ isAdmin, isMenuOpen, setIsMenuOpen }) {
  return (
    <Container>
      {!isMenuOpen ? (
        <header>
          <BsList className="menu-icon" onClick={() => setIsMenuOpen(true)} />
          <div className="logo">
            <BsFillHexagonFill id="icon" />
            <h1>food explorer</h1>
          </div>
          <button className="mobile-button">
            <PiReceipt />
            <div id="quantity">0</div>
          </button>
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
            />
            {isAdmin ? (
              <ButtonTxt title="Novo prato" />
            ) : (
              <ButtonTxt title="Meus favoritos" />
            )}

            <ButtonTxt title="Sair" />
          </main>
          <Footer />
        </div>
      )}
    </Container>
  );
}
