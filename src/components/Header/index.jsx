import { Container, LogOutBtn } from "./styles";
import { BtnHeader } from "../BtnHeader";
import { SearchInput } from "../SearchInput";
import { ButtonTxt } from "../ButtonTxt";
import { Logo } from "../Logo";
import { useMediaQuery } from "react-responsive";

import { PiReceipt, PiSignOut, PiMagnifyingGlass } from "react-icons/pi";
import { useState } from "react";
import { MenuHamburguer } from "./MenuHamburguer";

export function Header({ isAdmin }) {
  const isDesktop = useMediaQuery({ minWidth: 1024 });
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Container>
      {!isDesktop && (
        <MenuHamburguer
          isAdmin="isAdmin"
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
        />
      )}

      {isDesktop && (
        <>
          <header>
            <Logo type="header" /*isAdmin="isAdmin"*/ />
            {isDesktop && (
              <SearchInput
                placeholder="Busque por pratos ou ingredientes"
                icon={PiMagnifyingGlass}
              />
            )}
            {isDesktop && (
              <ButtonTxt className="favorites" title="Meus favoritos" />
            )}

            {isAdmin ? (
              isDesktop && <BtnHeader title="Novo Prato" />
            ) : (
              <BtnHeader title="Meus pedidos" icon={PiReceipt} />
            )}
            {isDesktop && (
              <LogOutBtn>
                <PiSignOut />
              </LogOutBtn>
            )}
          </header>
        </>
      )}
    </Container>
  );
}
