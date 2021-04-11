
import { ContentType } from "./contentType/ContentType";

import ResumeContentData from "../../../../../data/AboutMe.json";

const ResumeContent = () => {

    const ResumeContentHead = ResumeContentData.resumeContent;

  return (
    // <!-- Resume Content Starts -->
    <div className="col s12 m12 l8 resume-cards-container">
        <div className="resume-cards">
            
            {/* Experience */}
            {/* Education  */}
            {/* Skills     */}
            {ResumeContentHead.map((element, index) => {
                return <ContentType key={index} num={index} fa={element[0]} title={element[1]} content={element[2]} />
            })}
            

        </div>
    </div>
    // <!-- Resume Content Ends -->                  
  );
}

export {ResumeContent};
