import React, { useState, useEffect } from "react";
import FirstPage from "./pages/firstPage/firstPage";
import SecondPage from "./pages/secondPage/secondPage";
import ThirdPage from "./pages/thirdPage/thirdPage";
import { gameModeClassic } from "./constants/gameModes";
import {fetchNavigationClasses} from "./api/navigationClasses";
import {fetchClassesData} from "./api/classes";

function App() {
  const [page, setPage] = useState(1);
  const [gameMode, setGameMode] = useState(gameModeClassic);
  const [navChoice, setNavChoice] = useState("");
  const [navOptions, setNavOptions] = useState([]);
  const [rowChoices, setRowChoices] = useState([]);
  const [winner, setWinner] = useState({
    name: "Warlock",
    isActive: true,
    characteristics: [
      "Warlock - 2 ranged and 1 melee specs",
      "Warlock - Can have a pet companion",
      "Warlock - Very mobile character",
      "Warlock - Can not be interrupted",
    ],
  });

  useEffect(() => {
    const fetchNavClasses = async () => {
      const response = await fetchNavigationClasses();
      setNavOptions(response);
    };
    fetchNavClasses();
  }, []);

  const navChoiceHandler = (itemName) => {
    setNavChoice(itemName);
    navOptions.forEach((element) => {
      element.isActive = element.name === itemName;
    });
  };

  const choiceHandler = (prevActive, newActive) => {
    const newRowChoices = JSON.parse(JSON.stringify(rowChoices));
    const newRowChoicesLength = newRowChoices.length - 1;
    newRowChoices[newRowChoicesLength].forEach((element) => {
      if (element.name === prevActive) {
        element.isActive = false;
      } else if (element.name === newActive) {
        element.isActive = true;
      }
    });
    setRowChoices(newRowChoices);
  };

  const gameVersionHandler = () => {
    const fetchClasses = async () => {
      const response = await fetchClassesData(gameMode, navChoice);
      setRowChoices([response.pickingClasses]);
      setPage(2);
    };
    fetchClasses();
  };

  const redirectToPage = (page) => {
    if (page === 1) {
      setRowChoices([]);
    }
    setPage(page);
  };

  const activePage = () => {
    switch (page) {
      case 1:
        return (
          <FirstPage
            gameMode={gameMode}
            setGameMode={setGameMode}
            navChoiceHandler={navChoiceHandler}
            navOptions={navOptions}
            gameVersionHandler={gameVersionHandler}
          />
        );
      case 2:
        return (
          <SecondPage
            setPage={setPage}
            gameMode={gameMode}
            navChoice={navChoice}
            choiceHandler={choiceHandler}
            setWinner={setWinner}
            rowChoices={rowChoices}
            setRowChoices={setRowChoices}
          />
        );
      case 3:
        return (
          <ThirdPage
            gameMode={gameMode}
            navChoice={navChoice}
            winner={winner}
            redirectToPage={redirectToPage}
          />
        );
      default:
        return null;
    }
  };

  return activePage();
}

export default App;
