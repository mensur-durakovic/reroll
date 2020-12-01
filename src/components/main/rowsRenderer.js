import React from "react";
import SwitcherRowRenderer from "../switcher/switcherRowRenderer";

const RowsRenderer = React.memo((props) => {
    const {rowChoices, choiceHandler, lockChoices, calculateWinner} = props;

    const generateRows = () => {

        console.log(rowChoices);
        const rows = [];

        for (let i = 0; i <= rowChoices.length; i++) {
            if (!rowChoices[i]) {
                continue;
            }

            let isLastRow = false;
            if (rowChoices[i].length <= 4) {
                isLastRow = true;
            }

            rows.push(
                <SwitcherRowRenderer rowChoices={rowChoices[i]}
                                     choiceHandler={choiceHandler} lockChoices={lockChoices}
                                     rowLevel={i + 1} calculateWinner={calculateWinner}
                                     isLastRow={isLastRow}/>
            );
        }

        return rows;
    };

    return (
        <>
            {generateRows()}
        </>
    );
});

export default RowsRenderer;