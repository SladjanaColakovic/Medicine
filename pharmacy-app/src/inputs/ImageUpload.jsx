import noImage from "../images/no_image.jpg"

const ImageUpload = ({ selectedFile, changeImage }) => {
    return (
        <div className="hero-image">
            <img className="image" src={(selectedFile !== null) ? URL.createObjectURL(selectedFile) : noImage} alt="Centar" />
            <div id="input-file-button">
                <label className="lbl-upload">
                    <input type="file" onChange={changeImage} />
                    input
                </label>
            </div>
        </div>
    );
}

export default ImageUpload;