import { Container, Content, Form, InputFile, Ingredients } from "./styles";

import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Input } from "../../components/Input";
import { NewTag } from "../../components/NewTag";
import { ButtonTxt } from "../../components/ButtonTxt";
import { IoIosArrowBack } from "react-icons/io";
import { FiUpload } from "react-icons/fi";

import { api } from "../../services/api";

export function EditDish() {
  const params = useParams();
  const navigate = useNavigate();

  const [name, setName] = useState();
  const [category, setCategory] = useState();
  const [ingredients, setIngredients] = useState([]);
  const [newIngredient, setNewIngredient] = useState("");
  const [price, setPrice] = useState();
  const [description, setDescription] = useState();

  const [dishImgFile, setDishImgFile] = useState(null);
  const [dishImg, setDishImg] = useState("Selecione imagem");

  function handleBack() {
    navigate(-1);
  }

  async function handleRemoveDish() {
    const confirm = window.confirm(
      "Tem certeza que deseja deletar esse prato?",
    );

    if (confirm) {
      await api.delete(`/dishes/${params.id}`);
      alert("Prato deletado com sucesso");
      navigate("/");
    }
  }

  function handleAddIngredient() {
    if (!newIngredient) {
      alert("Você não pode deixar o campo vazio");
    } else {
      setIngredients(prevState => [...prevState, newIngredient]);
    }
    setNewIngredient("");
  }

  function handleRemoveIngredient(deleted) {
    const filteredIngredients = ingredients.filter(i => i !== deleted);
    setIngredients(filteredIngredients);
  }

  function handleUploadImage(event) {
    const file = event.target.files[0];
    setDishImgFile(file);

    setDishImg(file.name);
  }

  async function handleUpdate(e) {
    e.preventDefault();

    const updatedDish = {
      name,
      description,
      price: Number(price.replace(",", ".")),
      category_id: category,
      ingredients,
    };

    try {
      await api.put(`/dishes/${params.id}`, updatedDish);

      if (dishImgFile) {
        const fileUploadForm = new FormData();
        fileUploadForm.append("image", dishImgFile);

        await api.patch(`/dishes/${params.id}/image`, fileUploadForm);
      }

      alert("Prato atualizado com sucesso");
      navigate("/");
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Não foi possível atualizar o prato");
      }
    }
  }

  useEffect(() => {
    async function fetchDish() {
      const { data: dishInfo } = await api.get(`/dishes/${params.id}`);
      setName(dishInfo.name);
      setDescription(dishInfo.description);
      setCategory(dishInfo.category_id);
      setIngredients(dishInfo.ingredients);
      setPrice(dishInfo.price);
    }
    fetchDish();
  }, [params.id]);

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
          <h2>Editar prato</h2>
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
                value={name}
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
                {ingredients?.map((ingredient, index) => (
                  <NewTag
                    key={String(index)}
                    value={ingredient.name || ingredient}
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
              <label htmlFor="price">Preço (R$)</label>
              <Input
                id="price"
                type="number"
                placeholder={`25,50`}
                value={price}
                onChange={e => setPrice(e.target.value)}
              />
            </div>
          </div>

          <div className="textarea-wrapper">
            <label htmlFor="description">Descrição</label>
            <textarea
              id="description"
              rows="5"
              placeholder={`Descreva brevemente o prato`}
              value={description}
              onChange={e => setDescription(e.target.value)}
            ></textarea>
          </div>

          <div className="btn-form">
            <button id="btn-delete" onClick={handleRemoveDish}>
              Excluir prato
            </button>
            <button className="btn-save" onClick={handleUpdate}>
              Salvar alterações
            </button>
          </div>
        </Form>
      </Content>
      <Footer />
    </Container>
  );
}
