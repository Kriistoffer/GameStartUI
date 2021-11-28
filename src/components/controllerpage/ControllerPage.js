import React from "react";
import CategoryCard from "../categorycard/CategoryCard";
import Container from "react-bootstrap/Container";
import "./ControllerPage.css";
import axios from "axios";
import { useEffect, useState } from "react";

const ControllerPage = () => {
  const [info, setInfo] = useState([]);
  const getAllControllerData = () => {
    axios
      .get(`https://localhost:7024/api/products/categoryproducts?CategoryId=3`)
      .then((response) => {
        const allControllerData = response.data.products;
        console.log(allControllerData);
        setInfo(allControllerData);
      })
      .catch((error) => console.error(`Error: ${error}`));
  };

  const displayInfo = info.map((info) => (
    <CategoryCard
      cardTitleText={info.name}
      infoText={info.description}
      infoImage={info.id}
      priceText={info.price + " €"}
    />
  ));

  useEffect(() => {
    getAllControllerData();
  }, []);

  return (
    <Container className="top-container">
      <Container className="game-container">
        <h1 className="categoryFont"> CONTROLLERS </h1>

        <div className="row">
          <div className="col category-card card-padding">{displayInfo}</div>
        </div>
      </Container>
    </Container>
  );
};
export default ControllerPage;
