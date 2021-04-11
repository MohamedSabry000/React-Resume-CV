import { FactBadgeItem } from "./factBadgeItem/FactBadgeItem";

import FactBadges from "../../../../data/AboutMe.json";

const FunFactsComponent = () => {
  
  const Facts = FactBadges.factBadges;

  return (
    // <!-- Fun Facts Starts 
    <div className="container badges">
        <div className="row">

          {Facts.map((element, index) => {
            return <FactBadgeItem key={index} data={element} />
          })}

        </div>
      </div>
    // Fun Facts Ends 
  );
}

export {FunFactsComponent};
