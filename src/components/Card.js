// Import CSS
import "./css/Card.css";
// Import major dependencies
// Import components
// Import icons
// Import API and static content

const Card = (props) => {

    return(
        <div className="card">
            {props.children}
        </div>
    )

}

export default Card;