import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import { Container, Content, Card } from "./styles";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";

import { api } from "../../services/api";

export function Favorites() {
  const [favorites, setFavorites] = useState();
  const navigate = useNavigate();

  async function handleRemoveFavorite(favorite) {
    const id = Number(favorite.id);
    const confirm = window.confirm(
      "Você tem certeza que deseja remover esse prato dos seus favoritos?",
    );

    if (confirm) {
      await api.delete(`/favorites/${id}`);
      navigate("/");
    }
  }

  useEffect(() => {
    async function fetchFavorites() {
      const response = await api.get("/favorites");
      setFavorites(response.data);
    }
    fetchFavorites();
  }, []);

  return (
    <Container>
      <Header />
      <Content>
        <main>
          <h2>Meus favoritos</h2>
          <div className="favorites">
            {favorites &&
              favorites.map(favorite => (
                <Card key={String(favorite.dish_id)}>
                  <Link to={`/details/${favorite.dish_id}`}>
                    <img
                      src={`${api.defaults.baseURL}/files/${favorite.image}`}
                      alt={favorite.name}
                    />
                  </Link>
                  <div className="text">
                    <Link to={`/details/${favorite.dish_id}`}>
                      <h3>{favorite.name}</h3>
                    </Link>
                    <button onClick={handleRemoveFavorite}>
                      Remover dos Favoritos
                    </button>
                  </div>
                </Card>
              ))}
          </div>
        </main>
      </Content>
      <Footer />
    </Container>
  );
}
