import { Container, LogOutBtn, Menu } from "./styles";
import { BtnHeader } from "../BtnHeader";
import { SearchInput } from "../SearchInput";

import { PiReceipt, PiSignOut, PiMagnifyingGlass } from "react-icons/pi";
import { BsFillHexagonFill, BsList, BsX } from "react-icons/bs";

export function Header() {
  return (
    <Container>
      <header>
        <Menu>
          <BsList />
        </Menu>
        <div className="logo">
          <BsFillHexagonFill id="icon" />
          <h1>food explorer</h1>
        </div>
        <SearchInput
          placeholder="Busque por pratos ou ingredientes"
          icon={PiMagnifyingGlass}
        />
        <button className="mobile-button">
          <PiReceipt />
          <div id="quantity">0</div>
        </button>
      </header>
    </Container>
  );
}
