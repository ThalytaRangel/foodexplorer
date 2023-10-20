import { Container, LogOutBtn } from "./styles";
import { BtnHeader } from "../BtnHeader";
import { SearchInput } from "../SearchInput";

import { PiReceiptBold, PiSignOut } from "react-icons/pi";
import { AiOutlineSearch } from "react-icons/ai";
import { BsFillHexagonFill } from "react-icons/bs";

export function Header() {
  return (
    <Container>
      <header>
        <div className="logo">
          <BsFillHexagonFill id="icon" />
          <h1>food explorer</h1>
        </div>
        <SearchInput
          placeholder="Busque por pratos ou ingredientes"
          icon={AiOutlineSearch}
        />
        <BtnHeader title="Pedidos (0)" icon={PiReceiptBold} />
        <LogOutBtn>
          <PiSignOut />
        </LogOutBtn>
      </header>
    </Container>
  );
}
