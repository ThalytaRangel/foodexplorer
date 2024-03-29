import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { useAuth } from "../../hooks/auth";

import { Container, LogOutBtn } from "./styles";
import { BtnHeader } from "../BtnHeader";
import { SearchInput } from "../SearchInput";
import { ButtonTxt } from "../ButtonTxt";
import { Logo } from "../Logo";
import { MenuHamburguer } from "./MenuHamburguer";

import { PiReceipt, PiSignOut, PiMagnifyingGlass } from "react-icons/pi";
import { useSearch } from "../../hooks/search";

export function Header() {
  const isDesktop = useMediaQuery({ minWidth: 1024 });
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { setSearch } = useSearch();

  const { signOut, user } = useAuth();

  const navigate = useNavigate();

  const isAdmin = Boolean(user.admin);

  function handleSignOut() {
    signOut();
    navigate("/");
  }

  return (
    <Container>
      {!isDesktop && (
        <MenuHamburguer isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      )}

      {isDesktop && (
        <>
          <header>
            <Link to="/">
              <Logo type="header" isAdmin={isAdmin} />
            </Link>
            {isDesktop && (
              <SearchInput
                placeholder="Busque por pratos ou ingredientes"
                icon={PiMagnifyingGlass}
                onChange={e => setSearch(e.target.value)}
              />
            )}
            {isDesktop && (
              <ButtonTxt
                className="favorites"
                title="Meus favoritos"
                onClick={() => {
                  navigate("/favorites");
                }}
              />
            )}

            {user?.admin ? (
              isDesktop && (
                <BtnHeader
                  title="Novo Prato"
                  onClick={() => {
                    navigate("/new");
                  }}
                />
              )
            ) : (
              <BtnHeader title="Meus pedidos" icon={PiReceipt} />
            )}
            {isDesktop && (
              <LogOutBtn onClick={handleSignOut}>
                <PiSignOut />
              </LogOutBtn>
            )}
          </header>
        </>
      )}
    </Container>
  );
}
