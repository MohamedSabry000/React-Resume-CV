
const ResumeMenuItem = (props) => {

    const Num = props.num;
    const Fa = props.fa;
    const Title = props.title;

    const ItemId = "resume-list-item-"+Num;
    let ItemClassName;
    if(Num===0){
        ItemClassName = "resume-list-item is-active";
    } else {
        ItemClassName = "resume-list-item";
    }

  return (
    <div className={ItemClassName} data-index={Num} id={ItemId}>
        <div className="resume-list-item-inner">
            <h6 className="resume-list-item-title uppercase"><i className={Fa}></i> {Title}</h6>
        </div>
    </div>       
  );
}

export {ResumeMenuItem};
