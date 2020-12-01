import React from "react";
import Coin from "../../assets/images/coin.svg";

const ContinueButtonRenderer = React.memo((props) => {
    const {isLastRow, calculateWinner, optionsDisabler} = props;

    if (isLastRow) {
        return (
            <div
                className="second-page-final-button-wrapper"
                onClick={calculateWinner}
            >
                <div className="second-page-final-button-image">
                    <img src={Coin} alt="coin"></img>
                </div>
                <div className="second-page-final-button-text">{"Check"}</div>
            </div>
        );
    }

    return (
        <div className="second-page-final-button-wrapper">
            <div className="second-page-toss-it" onClick={optionsDisabler}>
                <div className="second-page-toss-it-image"></div>
            </div>
        </div>
    );
});

export default ContinueButtonRenderer;