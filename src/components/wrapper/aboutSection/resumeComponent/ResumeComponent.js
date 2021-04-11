import { ResumeMenu } from "./resumeMenu/ResumeMenu";
import { ResumeContent } from "./resumeContent/ResumeContent";
const ResumeComponent = () => {
  return (
    // <!-- Resume Starts -->
    <div className="resume-container">
      <div className="container">
        <div className="valign-wrapper row">

            <ResumeMenu />
            <ResumeContent />

          </div>
      </div>
    </div>
    // <!-- Resume Content Ends -->                        
  );
}

export {ResumeComponent};
