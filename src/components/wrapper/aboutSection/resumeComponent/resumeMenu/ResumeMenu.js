import { ResumeMenuItem } from "./resumeMenuItem/ResumeMenuItem";
import Data from "../../../../../data/AboutMe.json";

const ResumeMenu = () => {

    const Types = Data.resumeContent;

  return (
    // <!-- Resume Menu Starts -->
    <div className="resume-list col l4">
        {Types.map((element, index) => {
            return <ResumeMenuItem key={index} num={index} fa={element[0]} title={element[1]}/>
        })}
        
    </div>
    // <!-- Resume Menu Ends -->                     
  );
}

export {ResumeMenu};
