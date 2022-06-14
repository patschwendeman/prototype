import "../style/Card.css";

const Card = ({ currentCard }) => {

    

    
        return(
            <>
                <div className="card-inner">
                    <div className="card-front">
                        <div className="cardContent">
                            <p>{currentCard.quest}</p>
                        </div>
                        <div className="cardNavigation">
                        <div className="info">Show Answer</div>
                            
        
                        </div>
                    </div>
                    <div className="card-back">
                        <div className="cardContent">
                            <p>{currentCard.answer}</p>
                        </div>
                        <div className="cardNavigation">
                            <div className="info">Show Question</div>
                            
        
                        </div>
                    </div>
            
                </div>
                
            </>
                
            
        );
    
    

    
}

export { Card };