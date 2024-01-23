import { Container, Content } from "./styles";
import { Header } from "../../components/Header";
import { Banner } from "../../components/Banner";
import { Sections } from "../../components/Sections";
import { Card } from "../../components/Card";
import { Footer } from "../../components/Footer";

import { useState, useEffect } from "react";
import { api } from "../../services/api";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useMediaQuery } from "react-responsive";
import { useSearch } from "../../hooks/search";

export function Home() {
  const isDesktop = useMediaQuery({ minDeviceWidth: 1024 });

  const [dishes, setDishes] = useState();
  const [deserts, setDeserts] = useState();
  const [drinks, setDrinks] = useState();
  const { search } = useSearch();

  async function markFavorites(dishes) {
    const { data: favorites } = await api.get(`/favorites`);

    const favoriteIds = favorites.map(dish => dish.dish_id); // 4 5 3 9 11 2

    return dishes.map(dish => ({
      ...dish,
      is_favorite: favoriteIds.includes(dish.id),
    }));
  }

  async function fetchDishes() {
    const searchQuery = search ? `?name=${search}` : "";
    let { data } = await api.get(`/dishes${searchQuery}`);

    data = await markFavorites(data);

    setDishes(data.filter(dish => dish.category_id === 1));
    setDeserts(data.filter(desert => desert.category_id === 2));
    setDrinks(data.filter(drink => drink.category_id === 3));
  }

  useEffect(() => {
    fetchDishes();
  }, [search]);

  return (
    <Container>
      <Header />
      <Content>
        <Banner />
        <Sections title="Refeições">
          <Swiper
            slidesPerView={isDesktop ? 3 : 2}
            spaceBetween={isDesktop ? 27 : 16}
            autoplay={true}
            loop={true}
            navigation={isDesktop ? true : false}
            modules={[Navigation]}
            className="carrossel"
          >
            {!dishes ? <p>Não há pratos cadastradas</p> : ""}
            {dishes &&
              dishes.map(dish => (
                <SwiperSlide key={String(dish.id)}>
                  <Card
                    dishId={dish.id}
                    dishImg={`${api.defaults.baseURL}/files/${dish.image}`}
                    title={dish.name}
                    description={dish.description}
                    price={`R$ ${dish.price.toFixed(2)}`}
                    isFavorite={dish.is_favorite}
                  />
                </SwiperSlide>
              ))}
          </Swiper>
        </Sections>
        <Sections title="Sobremesas">
          <Swiper
            slidesPerView={isDesktop ? 3 : 2}
            spaceBetween={isDesktop ? 27 : 16}
            autoplay={true}
            loop={true}
            navigation={isDesktop ? true : false}
            modules={[Navigation]}
            className="carrossel"
          >
            {!deserts ? <p>Não há sobremesas cadastradas</p> : ""}
            {deserts &&
              deserts.map(desert => (
                <SwiperSlide key={String(desert.id)}>
                  <Card
                    dishId={desert.id}
                    dishImg={`${api.defaults.baseURL}/files/${desert.image}`}
                    title={desert.name}
                    description={desert.description}
                    price={`R$ ${desert.price.toFixed(2)}`}
                    isFavorite={desert.is_favorite}
                  />
                </SwiperSlide>
              ))}
          </Swiper>
        </Sections>
        <Sections title="Bebidas">
          <Swiper
            slidesPerView={isDesktop ? 3 : 2}
            spaceBetween={isDesktop ? 27 : 16}
            autoplay={true}
            loop={true}
            navigation={isDesktop ? true : false}
            modules={[Navigation]}
            className="carrossel"
          >
            {!drinks ? <p>Não há bebidas cadastradas</p> : ""}
            {drinks &&
              drinks.map(drink => (
                <SwiperSlide key={String(drink.id)}>
                  <Card
                    dishId={drink.id}
                    dishImg={`${api.defaults.baseURL}/files/${drink.image}`}
                    title={drink.name}
                    description={drink.description}
                    price={`R$ ${drink.price.toFixed(2)}`}
                    isFavorite={drink.is_favorite}
                  />
                </SwiperSlide>
              ))}
          </Swiper>
        </Sections>
      </Content>
      <Footer />
    </Container>
  );
}
