import React from 'react';
import CategoryCard from '../categorycard/CategoryCard'
import Container from 'react-bootstrap/Container';
import "./GamePage.css";
import EldenRing from '../../pictures/EldenRingPic.png';

const GamePage = () => {
    return(
        <Container>
            <h1 className="textToImgrMargin"> Games </h1>

        <div className="row">
          <div className="col-md-3">
            <CategoryCard infoText="Fett svårt spel!" infoImage={EldenRing}></CategoryCard>
          </div>
          <div className="col-md-3">
            <CategoryCard infoText="Fett svårt spel!" infoImage={EldenRing}></CategoryCard>
          </div>
          <div className="col-md-3">
            <CategoryCard infoText="Fett svårt spel!" infoImage={EldenRing}></CategoryCard>
          </div>
          <div className="col-md-3">
            <CategoryCard infoText="Fett svårt spel!" infoImage={EldenRing}></CategoryCard>
          </div>
        </div>
        </Container>
    );
};
export default GamePage;