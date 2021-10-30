// Import CSS
// Import major dependencies
// Import components
import Card from "../../components/Card";
import Button from "../../components/Button";
// Import icons
import { IoIosAirplane } from "react-icons/io";
import { FaThumbsUp } from "react-icons/fa";
// Import API and static content

const DeveloperCards = (props) => {
    return (
        <>
            <Card>
                
                <div className="flex">
                    <Button>Recent Logs</Button>
                    <Button>New Logs</Button>
                </div>
                <div className="h-5"/>
                <p>See logs you've been working on</p>
                <div className="h-5"/>

                <div className="bg-gray-500 bg-opacity-5 p-5 rounded">
                    <div className="flex items-center">
                        <FaThumbsUp className="h-4 w-4 mr-2 text-gray-400"/>
                        <div className="ml-2 pl-4 border-l-2 border-gray-200">
                            <p>Nothing to see here...</p>
                            <p className="subtitle">
                                No recent logs
                            </p>
                        </div>
                    </div>
                </div>

                <div className="h-5"/>
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