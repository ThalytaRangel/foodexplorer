import { Container, LogOutBtn } from "./styles";
import { Logo } from "../Logo";
import { Button } from "../Button";
import { Input } from "../Input";

import { PiReceiptBold, PiSignOut } from "react-icons/pi";
import { AiOutlineSearch } from "react-icons/ai";

export function Header() {
  return (
    <Container>
      <header>
        <Logo />
        <Input
          placeholder="Busque por pratos ou ingredientes"
          icon={AiOutlineSearch}
        />
        <Button title="Pedidos (0)" icon={PiReceiptBold} />
        <LogOutBtn>
          <PiSignOut />
        </LogOutBtn>
      </header>
    </Container>
  );
}
