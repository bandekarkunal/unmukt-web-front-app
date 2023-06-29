import { toastSettings } from "@/src/config/toastSettings";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const ErrorToast = (errorObj: any, bulkUpload?: boolean) => {
  if (errorObj.status === 401 || errorObj.status === 403) {
    localStorage.clear();
    window.location.href = "/";
  } else {
    if (errorObj?.body?.length > 0) {
      if (bulkUpload) {
        let errorMessageArr: any = [];
        errorObj?.body?.forEach((error: any) => {
          if (errorMessageArr.indexOf(error.message) === -1) {
            errorMessageArr.push(error.message);
          }
        });
        let errorMessageString: string = "";
        errorMessageArr.forEach((message: string) => {
          errorMessageString += `${message} \n`;
        });

        toast.error(errorMessageString, toastSettings);
        return;
      }
      let message: string = "";
      errorObj.body.forEach((error: any) => {
        message += error.message + "\n";
      });
      toast.error(message, toastSettings);
    } else {
      toast.error(errorObj.message, toastSettings);
    }
  }
};

export const SuccessToast = (message: string) => {
  toast.success(message, toastSettings);
};

export const WarningToast = (message: string) => {
  toast.warning(message, toastSettings);
};
