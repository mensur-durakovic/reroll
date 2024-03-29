import React from "react";

const TwoOptionsSwitcher = React.memo((props) => {
  const {
    activeOption,
    firstOptionTitle,
    firstOptionImg,
    firstOptionImageAltText,
    secondOptionTitle,
    secondOptionImg,
    secondOptionImageAltText,
    choiceHandler,
    choiceHandlerDisabled,
  } = props;

  const firstOptionActive = activeOption === 1;
  const secondOptionActive = activeOption === 2;

  const toggleChoiceHandler = (optionType) => {
    if (optionType === "firstOption" && firstOptionActive) {
      return;
    } else if (optionType === "secondOption" && secondOptionActive) {
      return;
    } else if (choiceHandlerDisabled) {
      return;
    }

    activeOption === 1
      ? choiceHandler(firstOptionTitle, secondOptionTitle)
      : choiceHandler(secondOptionTitle, firstOptionTitle);
  };

  const elementMouseDecryptor = (isActive) => {
    if (choiceHandlerDisabled) {
      return "not-allowed";
    }

    if (!isActive) {
      return "clickable";
    }

    return "";
  };

  return (
    <section className="switcher">
      <div className="switcher-head">
        <div
          className={`switcher-card ${elementMouseDecryptor(
            firstOptionActive
          )}`}
          onClick={() => toggleChoiceHandler("firstOption")}
        >
          <div
            className={`${
              firstOptionActive
                ? "switcher-card-shadow-active"
                : "switcher-card-shadow"
            }`}
          ></div>
          <div
            className={`switcher-card-image ${
              !firstOptionActive ? "switcher-card-image-gray" : ""
            }`}
          >
            <img src={firstOptionImg} alt={firstOptionImageAltText}></img>
          </div>
          <div
            className={`${
              firstOptionActive
                ? "switcher-card-shadow-active"
                : "switcher-card-shadow"
            }`}
          ></div>
          <div
            className={`${
              firstOptionActive
                ? "switcher-card-title-active"
                : "switcher-card-title"
            }`}
          >
            {firstOptionTitle}
          </div>
        </div>
        <div
          className={`switcher-card ${elementMouseDecryptor(
            secondOptionActive
          )}`}
          onClick={() => toggleChoiceHandler("secondOption")}
        >
          <div
            className={`${
              secondOptionActive
                ? "switcher-card-shadow-active"
                : "switcher-card-shadow"
            }`}
          ></div>
          <div
            className={`switcher-card-image ${
              !secondOptionActive ? "switcher-card-image-gray" : ""
            }`}
          >
            <img src={secondOptionImg} alt={secondOptionImageAltText}></img>
          </div>
          <div
            className={`${
              secondOptionActive
                ? "switcher-card-shadow-active"
                : "switcher-card-shadow"
            }`}
          ></div>
          <div
            className={`${
              secondOptionActive
                ? "switcher-card-title-active"
                : "switcher-card-title"
            }`}
          >
            {secondOptionTitle}
          </div>
        </div>
      </div>
      <div className="switcher-body">
        <div className="switcher-body-left">
          <div
            className={`${
              firstOptionActive
                ? "switcher-body-left-vertical-active"
                : "switcher-body-left-vertical"
            }`}
          ></div>
          <div
            className={`${
              firstOptionActive
                ? "switcher-body-left-horizontal-active"
                : "switcher-body-left-horizontal"
            }`}
          ></div>
        </div>
        <div
          className={`switcher-body-central ${
            choiceHandlerDisabled ? "not-allowed" : ""
          }`}
          onClick={toggleChoiceHandler}
        >
          <div className="switcher-body-central-arrows"></div>
        </div>
        <div className="switcher-body-right">
          <div
            className={`${
              secondOptionActive
                ? "switcher-body-right-horizontal-active"
                : "switcher-body-right-horizontal"
            }`}
          ></div>
          <div
            className={`${
              secondOptionActive
                ? "switcher-body-right-vertical-active"
                : "switcher-body-right-vertical"
            }`}
          ></div>
        </div>
      </div>
      <div className="switcher-body-footer">
        <div className="switcher-body-footer-vertical"></div>
      </div>
      <div className="switcher-footer">
        <div className="switcher-footer-card">
          <div className="switcher-footer-card-image">
            <img
              src={firstOptionActive ? firstOptionImg : secondOptionImg}
              alt={
                firstOptionActive
                  ? firstOptionImageAltText
                  : secondOptionImageAltText
              }
            ></img>
          </div>
          <div className="switcher-footer-card-title">
            {firstOptionActive ? firstOptionTitle : secondOptionTitle}
          </div>
          <div className="switcher-footer-card-shadow">
            <div className="switcher-footer-card-shadow-image"></div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default TwoOptionsSwitcher;
