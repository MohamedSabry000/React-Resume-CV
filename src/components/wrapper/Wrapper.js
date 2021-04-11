
import { TopLeftSection } from "./topLeftSection/TopLeftSection";
import { AboutSection } from "./aboutSection/AboutSection";

const Wrapper = () => {
  return (
    // Wrapper Start 
    <div className="wrapper">
      <div id="bl-main" className="bl-main">

        <TopLeftSection />
        <AboutSection />
        
      </div>
    </div>
    // Wrapper Ends 
  );
}

export {Wrapper};
