

const SinglePieceOfContent = (props) => {

  const UpperCase = props.content.upperCase;
  const Date = props.content.date;
  const Data = props.content.data;


  return (
    <div>
      {/* `Experience, Education, kills` Single Piece Content Starts */}
      <div className="resume-content">
            <h6 className="uppercase"><span>{UpperCase.bold}</span>{UpperCase.normal}</h6>
            <span className="date"><i className="fa fa-calendar-o"></i> {Date}</span>
            <p>{Data}</p>
        </div>
      {/* `Experience, Education, kills` Single Piece Content Ends  */}
      <span className="separator"></span>
    </div>         
  );
}

export {SinglePieceOfContent};
  