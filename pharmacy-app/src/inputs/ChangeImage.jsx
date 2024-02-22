const ChangeImage = ({ data, changeImage }) => {
    return (
        <div className="hero-image">
            <img className="image" src={'data:image/jpeg;base64,' + data} alt="Entity"/>
            <div id="input-file-button">
                <label className="lbl-upload">
                    <input type="file" onChange={(e) => changeImage(e)} />
                    input
                </label>
            </div>
        </div>
    );
}

export default ChangeImage;