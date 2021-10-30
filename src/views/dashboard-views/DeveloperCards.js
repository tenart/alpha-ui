// Import CSS
// Import major dependencies
// Import components
import Card from "../../components/Card";
import Button from "../../components/Button";
// Import icons
import { IoIosAirplane } from "react-icons/io";
// Import API and static content

const DeveloperCards = (props) => {
    return (
        <>
            <Card>
                <p>
                    Pick up where you left off...
                </p>
                <p>
                    You last modified this Log Name
                </p>
                <p className="text-sm">
                    Date and Time | Template Name
                </p>
                <div className="h-5"/>
                <Button 
                    icon={IoIosAirplane}
                >
                    Hello world I am a very big button
                </Button>
            </Card>

            

            {/* <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card> */}
        </>
    )
}

export default DeveloperCards;