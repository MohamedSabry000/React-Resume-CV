
import { PictureComponent } from "./pictureComponent/PictureComponent";
import { PersonalDataComponent } from "./personalDataComponent/PersonalDataComponent";

const PersonalInfoComponent = () => {
  return (
    <div className="container infos">
      {/* <!-- Divider Starts --> */}
      <div className="divider center-align">
          <span className="outer-line"></span>
          <span className="fa fa-vcard" aria-hidden="true"></span>
          <span className="outer-line"></span>
      </div>
      {/* <!-- Divider Ends --> */}
      {/* <!-- Personal Informations Starts --> */}
      <div className="row">

        <PictureComponent />
        <PersonalDataComponent />

      </div>
      {/* <!-- Personal Informations Ends --> */}
    </div>
  );
}

export {PersonalInfoComponent};
