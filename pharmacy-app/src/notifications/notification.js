import { NotificationManager } from "react-notifications";

export const errorMessage = (message) => {
    NotificationManager.error(message, '', 5500);
}

export const successMessage = (message) => {
    NotificationManager.success(message, '', 5500);
}