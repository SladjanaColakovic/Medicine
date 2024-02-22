const ImageContainer = ({entity}) => {
    return (
        <div className="col-5">
            <img style={{ width: "270px", height: "auto" }} src={'data:image/jpeg;base64,' + entity.image.data} alt="Entity" />
        </div>
    );
}

export default ImageContainer;