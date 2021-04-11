import ImageSource from "../../../../../images/photo-about.jpg";

const PictureComponent = () => {
  return (
    // Picture Starts
    <div className="col s12 m5 l4 xl3 profile-picture">
        <img src={ImageSource} className="responsive-img my-picture" alt="My Photo" />
    </div>
    // Picture Ends 
  );
}

export {PictureComponent};
