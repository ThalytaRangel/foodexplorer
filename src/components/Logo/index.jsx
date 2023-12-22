import { Container } from "./styles";
import { BsFillHexagonFill } from "react-icons/bs";

export function Logo({ type, isAdmin }) {
  return (
    <Container>
      {type === "header" ? (
        <div className="logo-header">
          <div id="brand">
            <BsFillHexagonFill className="icon" />
            <h1>food explorer</h1>
          </div>
          {isAdmin && <p>admin</p>}
        </div>
      ) : (
        <div className="logo">
          <BsFillHexagonFill className="icon" />
          <h1>food explorer</h1>
        </div>
      )}
    </Container>
  );
}
