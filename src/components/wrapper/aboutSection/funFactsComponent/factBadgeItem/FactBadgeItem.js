
const FactBadgeItem = (props) => {

  const Fa = props.data.fa;
  const Num = props.data.num;
  const Title = props.data.title;

  return (
    // Fact Badge Item Starts 
    <div className="col s12 m4 l4 center-align">
        <h3>
            <i className={Fa}></i>
            <span className="font-weight-700">{Num}</span>
        </h3>
        <h6 className="uppercase font-weight-500">{Title}</h6>
    </div>
    // Fact Badge Item Ends 
  );
}

export {FactBadgeItem};
