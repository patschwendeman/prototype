import "../style/FeedbackBar.css";

const FeedbackBar = ({ handleNext }) => {
    return(
        <div className="FeedbackBar">
            <button onClick={ handleNext }>Right</button>
            <button onClick={ handleNext }>Wrong</button>
        </div>
    );
}

export { FeedbackBar };