import React from "react";
import NavigationSecondary from "../../components/navigation/navigationSecondary";
import Footer from "../../components/footer/footer";
import { gameModeClassic } from "../../constants/gameModes";
import getOptionImage from "../../components/classes/choiceImageProvider";

const FourthPage = React.memo((props) => {
  const { gameMode, winner, navChoice, redirectToPage } = props;

  const getCharacteristics = () => {
    const characteristics = winner.characteristics.map((c) => (
      <div
        className="third-page-result-body-right-item"
        key={`${c}-${Math.random()}`}
      >
        <div className="third-page-result-body-right-item-coin"></div>
        <div>{c}</div>
      </div>
    ));
    return characteristics;
  };

  return (
    <div
      className={`third-page ${
        gameMode === gameModeClassic
          ? "third-page-classic"
          : "third-page-azeroth"
      }`}
    >
      <NavigationSecondary gameMode={gameMode} navChoice={navChoice} />
      <main>
        <div className="third-page-result">
          <div className="third-page-result-title">{"You are a"}</div>
          <div className="third-page-result-body">
            <div className="third-page-result-body-left">
              <div className="third-page-result-card">
                <div className="third-page-result-card-image">
                  <img src={getOptionImage(winner.name)} alt={winner.name}></img>
                </div>
                <div className="third-page-result-card-title">
                  {winner.name}
                </div>
                <div className="third-page-result-card-shadow">
                  <div className="third-page-result-card-shadow-image"></div>
                </div>
              </div>
            </div>
            <div className="third-page-result-body-right">
              {getCharacteristics()}
            </div>
          </div>
          <div className="third-page-result-footer">
            <div
              className="third-page-result-footer-repeat"
              onClick={() => redirectToPage(1)}
            >
              <div className="third-page-result-footer-repeat-button"></div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
});

export default FourthPage;
