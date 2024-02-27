import { remove } from "../http-client/httpClient";
import { errorMessage } from "../notifications/notification";

export const removeService = (requestUrl, onSuccess, message) => {
    remove(requestUrl)
        .then(() => {
            onSuccess();
        })
        .catch(() => {
            errorMessage(message);
        })
}