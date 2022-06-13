import { useState } from "react";
import { QuestContainer } from "./QuestContainer";
import { AnswerContainer } from "./AnswerContainer";
import "../style/Card.css";

const Card = ({ currentCard, showAnsw, handleShowAnsw }) => {

    

    if(showAnsw === "false"){
        return(
            <div className="card">
                <div className="cardContent">
                    <QuestContainer quest={ currentCard.quest } />
                </div>
                <div className="cardNavigation">
                    <button onClick={ handleShowAnsw }>Show</button>
   
                </div>
            </div>
        );
    }
    else {
        return(
            <div className="card">
                <div className="cardContent">
                    <AnswerContainer answer={ currentCard.answer } />
                </div>
                <div className="cardNavigation">
                    <button onClick={ handleShowAnsw }>Show</button>
   
                </div>
            </div>
        );
    }

    
}

export { Card };