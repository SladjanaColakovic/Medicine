export const addImageService = (e) => {
    if (!e.target.files[0] || e.target.files[0].length == 0) {
        return;
    }

    if (e.target.files[0].type.match(/image\/*/) == null) {
        return;
    }
    return e.target.files[0];
}