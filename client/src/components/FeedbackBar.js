import "../style/FeedbackBar.css";

const FeedbackBar = ({ handleNext }) => {
    return(
        <div className="FeedbackBar">
            <button onClick={ handleNext }>Correct</button>
            <button onClick={ handleNext }>Wrong</button>
        </div>
    );
}

export { FeedbackBar };