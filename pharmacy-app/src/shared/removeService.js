import { remove } from "../http-client/httpClient";
import { errorMessage } from "../notifications/notification";

export const removeService = (requestUrl, navigateTo, message) => {
    remove(requestUrl)
        .then(() => {
            navigateTo();
        })
        .catch(() => {
            errorMessage(message);
        })
}