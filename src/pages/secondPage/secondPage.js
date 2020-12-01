import React from "react";
import NavigationSecondary from "../../components/navigation/navigationSecondary";
import Footer from "../../components/footer/footer";
import { gameModeClassic } from "../../constants/gameModes";
import randomInt from "../../services/randomInt";
import isActiveRandomizer from "../../services/isActiveRandomizer";
import RowsRenderer from "../../components/main/rowsRenderer";

const SecondPage = React.memo((props) => {
  const {
    setPage,
    gameMode,
    setWinner,
    navChoice,
    choiceHandler,
    rowChoices,
    setRowChoices,
  } = props;

  const generateSwitchers = () => {
    if (rowChoices.length === 0) {
      return;
    }

    return (
        <RowsRenderer rowChoices={rowChoices} choiceHandler={choiceHandler} lockChoices={lockRowPicks} calculateWinner={calculateWinner} />
    );
  };

  const lockRowPicks = () => {
    const newRowChoices = JSON.parse(JSON.stringify(rowChoices));
    const lastElementIndex = newRowChoices.length - 1;
    const lastElementDuplicated = JSON.parse(JSON.stringify(newRowChoices[lastElementIndex]));
    const picks = lastElementDuplicated.filter(
      (item) => item.isActive
    );
    isActiveRandomizer(picks);
    newRowChoices.push(picks);
    setRowChoices(newRowChoices);
  };

  const calculateWinner = () => {
    const lastChoices = rowChoices[rowChoices.length - 1];
    const finalPicks = lastChoices.filter(
      (item) => item.isActive
    );

    const winner = finalPicks[randomInt(0, 1)];
    setWinner(winner);
    setPage(3);
  };

  return (
    <>
      <div
        className={`second-page ${
          gameMode === gameModeClassic
            ? "second-page-classic"
            : "second-page-azeroth"
        }`}
      >
        <div className="animated">
          <div className="animated-shadow"></div>
        </div>
        <NavigationSecondary gameMode={gameMode} navChoice={navChoice} />
        <main>
          <div className="second-page-title">{"Choose a role"}</div>
          {generateSwitchers()}
        </main>
        <Footer />
      </div>
    </>
  );
});

export default SecondPage;
