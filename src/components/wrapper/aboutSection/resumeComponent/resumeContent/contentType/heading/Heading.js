
const Heading = (props) => {

  const HeadTitle = props.title;
  const HeadFontAwesome = props.fa;

  return (
        
    //  Header Title Starts 
    <div className="resume-card-header">
        <div className="resume-card-name"><i className={HeadFontAwesome}></i> {HeadTitle}</div>
    </div>
    //  Header Title Starts         

  );
}

export {Heading};
