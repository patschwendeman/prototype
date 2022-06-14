import "../style/FeedbackBar.css";

const FeedbackBar = ({ handleNext }) => {
    return(
        <div className="FeedbackBar">
            <button id="correct" onClick={ handleNext }>Correct</button>
            <button id="wrong" onClick={ handleNext }>Wrong</button>
        </div>
    );
}

export { FeedbackBar };