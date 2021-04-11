
const InfoComponent = (props) => {

  const className = props.className;
  const Data = props.data;

  return (
    <div className="col s12 m12 l6 p-none">
        <ul className={className}>

          {Data.map((detail, index) => {
            return <li key={index}><span className="font-weight-600">{detail[0]}: </span>{detail[1]}</li>
          })}

        </ul>
    </div>
  );
}

export {InfoComponent};
