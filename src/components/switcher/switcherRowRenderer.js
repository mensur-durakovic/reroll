import React, { useState } from "react";
import TwoOptionsSwitcher from "./twoOptionsSwitcher";
import getOptionImage from "../classes/choiceImageProvider";
import ThreeOptionsSwitcher from "./threeOptionsSwitcher";
import ContinueButtonRenderer from "../button/continueButtonRenderer";

const SwitcherRowRenderer = React.memo((props) => {
  const {
    rowChoices,
    choiceHandler,
    lockChoices,
    isLastRow,
    rowLevel,
    calculateWinner,
  } = props;
  const [isDisabled, setIsDisabled] = useState(false);

  const generateSwitchers = () => {
    const switchers = [];

    const rowChoicesCount = rowChoices.length;
    for (let i = 0; i < rowChoicesCount; i += 2) {
      const firstOption = rowChoices[i];
      const secondOption = rowChoices[i + 1];

      if (
        rowChoices.hasOwnProperty(i + 2) &&
        !rowChoices.hasOwnProperty(i + 3)
      ) {
        const thirdOption = rowChoices[i + 2];
        switchers.push(
          <ThreeOptionsSwitcher
            key={`switcher-${Math.random()}`}
            activeOption={firstOption.isActive ? 1 : 2}
            firstOptionTitle={firstOption.name}
            firstOptionImg={getOptionImage(firstOption.name)}
            firstOptionImageAltText={`logo ${firstOption.name}`}
            secondOptionTitle={secondOption.name}
            secondOptionImg={getOptionImage(secondOption.name)}
            secondOptionImageAltText={`logo ${secondOption.name}`}
            thirdOptionTitle={thirdOption.name}
            thirdOptionImg={getOptionImage(thirdOption.name)}
            thirdOptionImageAltText={`logo ${thirdOption.name}`}
            choiceHandler={choiceHandler}
          />
        );
        break;
      }

      switchers.push(
        <TwoOptionsSwitcher
          key={`switcher-${Math.random()}`}
          activeOption={firstOption.isActive ? 1 : 2}
          firstOptionTitle={firstOption.name}
          firstOptionImg={getOptionImage(firstOption.name)}
          firstOptionImageAltText={`logo ${firstOption.name}`}
          secondOptionTitle={secondOption.name}
          secondOptionImg={getOptionImage(secondOption.name)}
          secondOptionImageAltText={`logo ${secondOption.name}`}
          choiceHandler={choiceHandler}
          choiceHandlerDisabled={isDisabled}
        />
      );
    }

    return switchers;
  };

  const optionsDisabler = () => {
    lockChoices();
    setIsDisabled(true);
  };

  return (
    <section className="second-page-final">
      {rowLevel !== 1 && <div className="second-page-final-divider"></div>}
      <div className="second-page-container">{generateSwitchers()}</div>
      {!isDisabled && (
        <div className="second-page-final-button">
          <ContinueButtonRenderer
            isLastRow={isLastRow}
            calculateWinner={calculateWinner}
            optionsDisabler={optionsDisabler}
          />
        </div>
      )}
    </section>
  );
});

export default SwitcherRowRenderer;
