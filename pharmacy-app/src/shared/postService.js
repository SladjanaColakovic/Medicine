import { post } from "../http-client/httpClient";
import { errorMessage } from "../notifications/notification";

export const postService = (requestUrl, data, dataName, file, onSuccess, message) => {
    const formData = new FormData();
    if (data !== null && file !== null) {
        formData.append(dataName, new Blob([JSON.stringify(data)], { type: "application/json" }));
        formData.append("image", file, file.name);
        post(requestUrl, formData)
            .then(() => {
                onSuccess();
            })
            .catch(() => {
                errorMessage(message);
            })

    }
}