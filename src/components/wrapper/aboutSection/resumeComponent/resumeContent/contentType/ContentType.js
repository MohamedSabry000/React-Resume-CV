import { Heading } from "./heading/Heading";
import { SinglePieceOfContent } from "./singlePieceOfContent/SinglePieceOfContent";

const ContentType = (props) => {
  const Index = props.num;
  const Fa = props.fa;
  const Title = props.title;
  const ContentData = props.content;

  const CardClassName = "resume-card resume-card-"+Index;

  return (
    // `Experience, Education, kills` Starts 
    <div className={CardClassName} data-index={Index}>

        {/* Heading */}
        <Heading fa={Fa} title={Title}/>

        {/* Content */}
        <div className="resume-card-body experience">
            <div className="resume-card-body-container second-font">
              
              {ContentData.map((element, i) => {
                return <SinglePieceOfContent key={i} content={element}/>
              })}

            </div>  
        </div> 
        
    </div>
    // `Experience, Education, kills` Ends                
  );
}

export {ContentType};
