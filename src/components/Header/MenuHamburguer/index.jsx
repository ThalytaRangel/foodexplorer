import { useAuth } from "../../../hooks/auth";
import { Container } from "./styles";
import { BsList, BsX } from "react-icons/bs";
import { PiMagnifyingGlass, PiReceipt } from "react-icons/pi";
import { SearchInput } from "../../SearchInput";
import { ButtonTxt } from "../../ButtonTxt";
import { Logo } from "../../Logo";
import { Footer } from "../../Footer";

export function MenuHamburguer({ isAdmin, isMenuOpen, setIsMenuOpen }) {
  const { signOut } = useAuth();
  return (
    <Container>
      {!isMenuOpen ? (
        <header>
          <BsList className="menu-icon" onClick={() => setIsMenuOpen(true)} />
          <Logo type="header" /*isAdmin="isAdmin"*/ />
          {isAdmin && ( //Adc negação quando conectar o backend
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
            />
            {isAdmin ? (
              <>
                <ButtonTxt className="btn-header" title="Novo prato" />
                <ButtonTxt className="btn-header" title="Meus favoritos" />
              </>
            ) : (
              <ButtonTxt className="btn-header" title="Meus favoritos" />
            )}

            <ButtonTxt className="btn-header" title="Sair" onClick={signOut} />
          </main>
          <Footer />
        </div>
      )}
    </Container>
  );
}
