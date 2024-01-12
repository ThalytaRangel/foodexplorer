import { Container, Content, Form, InputFile, Ingredients } from "./styles";

import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Input } from "../../components/Input";
import { NewTag } from "../../components/NewTag";
import { ButtonTxt } from "../../components/ButtonTxt";

import { IoIosArrowBack } from "react-icons/io";
import { FiUpload } from "react-icons/fi";

import { api } from "../../services/api";

export function NewDish() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [newIngredient, setNewIngredient] = useState([]);
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const [dishImgFile, setDishImgFile] = useState(null);
  const [dishImg, setDishImg] = useState("Selecione imagem");

  function handleBack() {
    navigate(-1);
  }

  function handleAddIngredient() {
    setIngredients(prevState => [...prevState, newIngredient]);
    setNewIngredient("");
  }

  function handleRemoveIngredient(deleted) {
    setIngredients(prevState =>
      prevState.filter(ingredient => ingredient !== deleted),
    );
  }

  function handleUploadImage(event) {
    const file = event.target.files[0];
    setDishImgFile(file);

    setDishImg(file.name);
  }

  async function handleNewDish(e) {
    e.preventDefault();

    if (!name || !price || category === 0) {
      return alert("Você precisa preencher todas as informações");
    }

    if (newIngredient) {
      return alert(
        "Você precisa adicionar o ingrediente ou deixar o campo vazio",
      );
    }

    const newDish = {
      name,
      description,
      price: Number(price.replace(",", ".")),
      category_id: category,
      ingredients,
    };

    try {
      const { data: dishSaved } = await api.post("/dishes", newDish);

      const { dish_id } = dishSaved;

      if (dishImgFile && dish_id) {
        const fileUploadForm = new FormData();
        fileUploadForm.append("image", dishImgFile);

        await api.patch(`/dishes/${dish_id}/image`, fileUploadForm);
      }

      alert("Prato cadastrado com sucesso");
      navigate("/");
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Não foi possível realizar o cadastro do prato");
      }
    }
  }

  return (
    <Container>
      <Header />
      <Content>
        <ButtonTxt
          className="back"
          icon={IoIosArrowBack}
          title="voltar"
          onClick={handleBack}
        />
        <Form>
          <h2>Adicionar prato</h2>
          <div className="infos">
            <InputFile>
              <label htmlFor="image">Imagem do prato</label>
              <label className="input-image">
                <FiUpload /> {dishImg}
                <input id="image" type="file" onChange={handleUploadImage} />
              </label>
            </InputFile>
            <div className="input-wrapper">
              <label htmlFor="name">Nome</label>
              <Input
                className="edit"
                type="text"
                placeholder="Ex.: Salada Ceasar"
                onChange={e => setName(e.target.value)}
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="categoria">Categoria</label>
              <select
                id="categoria"
                onChange={e => setCategory(e.target.value)}
              >
                <option value="0">Selecione</option>
                <option value={1}>Refeição</option>
                <option value={2}>Sobremesa</option>
                <option value={3}>Bebida</option>
              </select>
            </div>
          </div>
          <div className="infos">
            <div id="label">
              <h3>Ingredientes</h3>
              <Ingredients>
                {ingredients.map((ingredient, index) => (
                  <NewTag
                    key={String(index)}
                    value={ingredient}
                    onClick={() => handleRemoveIngredient(ingredient)}
                  />
                ))}
                <NewTag
                  isNew
                  placeholder="Adicionar"
                  value={newIngredient}
                  onChange={e => setNewIngredient(e.target.value)}
                  onClick={handleAddIngredient}
                />
              </Ingredients>
            </div>
            <div className="input-wrapper">
              <label htmlFor="price">Preço</label>
              <Input
                id="price"
                type="text"
                placeholder="R$ 00,00"
                onChange={e => setPrice(e.target.value)}
              />
            </div>
          </div>

          <div className="textarea-wrapper">
            <label htmlFor="description">Descrição</label>
            <textarea
              id="description"
              rows="5"
              placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
              onChange={e => setDescription(e.target.value)}
            ></textarea>
          </div>

          <button className="btn-save" onClick={handleNewDish}>
            Salvar alterações
          </button>
        </Form>
      </Content>
      <Footer />
    </Container>
  );
}
