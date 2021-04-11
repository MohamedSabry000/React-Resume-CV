import { InfoComponent } from "./infoComponent/InfoComponent";

import PersonalData from "../../../../../data/AboutMe.json";

const PersonalDataComponent = () => {

  const P_Data = PersonalData.personalInfo;
  return (
    <div className="col s12 m7 l8 xl9 personal-info">
      <h6 className="uppercase"><i className="fa fa-user"></i> Personal Informations</h6>
      <div className="col m12 l7 xl7 p-none">
          <p className="second-font">{P_Data.appr}</p>
      </div>
      
      <InfoComponent data={P_Data.data.left} className="second-font list-1" />
      <InfoComponent data={P_Data.data.right} className="second-font list-2" />

      <a href={P_Data.resumeLink} className="col s12 m12 l4 xl4 waves-effect waves-light btn font-weight-500">
        Download Resume <i className="fa fa-file-pdf-o"></i>
      </a>
      <a href="blog-dark.html" className="col s12 m12 l4 xl4 btn btn-blog font-weight-500">
        My Blog <i className="fa fa-edit"></i>
      </a>
  </div>
  );
}

export {PersonalDataComponent};
