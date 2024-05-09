const Images = ({ imageList }) => {

    function binaryToBlob(imageData, imageType) {
        const byteArray = new Uint8Array(imageData);
        const blob = new Blob([byteArray], { type: imageType });
        return blob;
    }
    if (imageList == null) {
        return <div>Sorry, this gallery is empty</div>;
      }

    return (
      <div className="images">
        {imageList.map(image => (
          <div className="image" key={image.id} >
                <img key={image._id} src={URL.createObjectURL(binaryToBlob(image.image.data, image.imageType))} alt={image.fileName} />
          </div>
        ))}
      </div>
    );
  }
   
  export default Images;