import { Container, Content } from "./styles";
import { Header } from "../../components/Header";
import { Banner } from "../../components/Banner";
import { Sections } from "../../components/Sections";
import { Card } from "../../components/Card";
import { Footer } from "../../components/Footer";
import spagietti from "../../assets/spaguetti.png";
import torradas from "../../assets/torradas.png";
import salada from "../../assets/salada.png";
import expresso from "../../assets/expresso.png";
import macarrons from "../../assets/macarrons.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useMediaQuery } from "react-responsive";

export function Home({ isAdmin = true }) {
  const isDesktop = useMediaQuery({ minDeviceWidth: 1024 });

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
            isAdmin={isAdmin}
            className="carrossel"
          >
            <SwiperSlide>
              <Card
                isAdmin
                dishImg={spagietti}
                title={"Spaguetti Gambe >"}
                description={"Massa fresca com camarões e pesto."}
                price={"R$ 79,97"}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Card
                isAdmin
                dishImg={torradas}
                title={"Torradas de Parma >"}
                description={
                  "Presunto de parma e rúcula em um pão com fermentação natural."
                }
                price={"R$ 25,97"}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Card
                dishImg={salada}
                title={"Salada Ravanello >"}
                description={
                  "Rabanetes, folhas verdes e molho agridoce salpicados com gergelim."
                }
                price={"R$ 25,00"}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Card
                dishImg={spagietti}
                title={"Spaguetti Gambe >"}
                description={"Massa fresca com camarões e pesto."}
                price={"R$ 79,97"}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Card
                dishImg={torradas}
                title={"Torradas de Parma >"}
                description={
                  "Presunto de parma e rúcula em um pão com fermentação natural."
                }
                price={"R$ 25,97"}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Card
                dishImg={salada}
                title={"Salada Ravanello >"}
                description={
                  "Rabanetes, folhas verdes e molho agridoce salpicados com gergelim."
                }
                price={"R$ 25,00"}
              />
            </SwiperSlide>
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
            <SwiperSlide>
              <Card
                dishImg={macarrons}
                title={"Macarons >"}
                description={"Farinha de amêndoas, manteiga, claras e açúcar."}
                price={"R$ 32,97"}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Card
                dishImg={macarrons}
                title={"Macarons >"}
                description={"Farinha de amêndoas, manteiga, claras e açúcar."}
                price={"R$ 32,97"}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Card
                dishImg={macarrons}
                title={"Macarons >"}
                description={"Farinha de amêndoas, manteiga, claras e açúcar."}
                price={"R$ 32,97"}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Card
                dishImg={macarrons}
                title={"Macarons >"}
                description={"Farinha de amêndoas, manteiga, claras e açúcar."}
                price={"R$ 32,97"}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Card
                dishImg={macarrons}
                title={"Macarons >"}
                description={"Farinha de amêndoas, manteiga, claras e açúcar."}
                price={"R$ 32,97"}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Card
                dishImg={macarrons}
                title={"Macarons >"}
                description={"Farinha de amêndoas, manteiga, claras e açúcar."}
                price={"R$ 32,97"}
              />
            </SwiperSlide>
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
            <SwiperSlide>
              <Card
                dishImg={expresso}
                title={"Expresso >"}
                description={
                  "Café cremoso feito na temperatura e pressões perfeita"
                }
                price={"R$ 15,97"}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Card
                dishImg={expresso}
                title={"Expresso >"}
                description={
                  "Café cremoso feito na temperatura e pressões perfeita"
                }
                price={"R$ 15,97"}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Card
                dishImg={expresso}
                title={"Expresso >"}
                description={
                  "Café cremoso feito na temperatura e pressões perfeita"
                }
                price={"R$ 15,97"}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Card
                dishImg={expresso}
                title={"Expresso >"}
                description={
                  "Café cremoso feito na temperatura e pressões perfeita"
                }
                price={"R$ 15,97"}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Card
                dishImg={expresso}
                title={"Expresso >"}
                description={
                  "Café cremoso feito na temperatura e pressões perfeita"
                }
                price={"R$ 15,97"}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Card
                dishImg={expresso}
                title={"Expresso >"}
                description={
                  "Café cremoso feito na temperatura e pressões perfeita"
                }
                price={"R$ 15,97"}
              />
            </SwiperSlide>
          </Swiper>
        </Sections>
      </Content>
      <Footer />
    </Container>
  );
}
