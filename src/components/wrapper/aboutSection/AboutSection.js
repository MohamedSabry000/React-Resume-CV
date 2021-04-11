import CloseButton from "../../../images/close-button.png";

import { HeadingComponent } from "./headingComponent/HeadingComponent";
import { PersonalInfoComponent } from "./personalInfoComponent/PersonalInfoComponent";
import { ResumeComponent } from "./resumeComponent/ResumeComponent";
import { FunFactsComponent } from "./funFactsComponent/FunFactsComponent";

const AboutSection = () => {
  return (
    // <!-- About Section Starts -->
    <section>
      {/* <!-- About Title Starts --> */}
      <div className="bl-box valign-wrapper">
        <div className="page-title center-align">
          <span className="title-bg">Resume</span>
          <h2 className="center-align">
            <span data-hover="About">About </span>
            <span data-hover="Me">Me</span>
          </h2>
        </div>
      </div>
      {/* <!-- About Title Ends --> */}
      {/* <!-- About Expanded Starts --> */}
      <div className="bl-content">

        <HeadingComponent />
        <PersonalInfoComponent />
        <ResumeComponent />
        <FunFactsComponent />
        
      </div>
      {/* <!-- End Expanded About --> */}
      <img alt="close" src={CloseButton} className="bl-icon-close" />

    </section>
  );
}

export {AboutSection};
