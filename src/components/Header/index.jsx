import { Container, LogOutBtn } from "./styles";
import { BtnHeader } from "../BtnHeader";
import { SearchInput } from "../SearchInput";
import { ButtonTxt } from "../ButtonTxt";
import { useMediaQuery } from "react-responsive";

import { PiReceipt, PiSignOut, PiMagnifyingGlass } from "react-icons/pi";
import { BsFillHexagonFill } from "react-icons/bs";
import { useState } from "react";
import { MenuHamburguer } from "./MenuHamburguer";

export function Header({ isAdmin }) {
  const isDesktop = useMediaQuery({ minWidth: 1024 });
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Container>
      {!isDesktop && (
        <MenuHamburguer isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      )}

      {isDesktop && (
        <>
          <header>
            <div className="logo">
              <BsFillHexagonFill id="icon" />
              <h1>food explorer</h1>
            </div>
            {isDesktop && (
              <SearchInput
                placeholder="Busque por pratos ou ingredientes"
                icon={PiMagnifyingGlass}
              />
            )}
            {isDesktop && <ButtonTxt title="Meus favoritos" />}

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
