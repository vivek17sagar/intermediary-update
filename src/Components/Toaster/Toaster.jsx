import { toast as _toast } from "react-toastify";

const toastOptions = {
  position: "top-center",
  autoClose: 2000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "light",
};

class Toast {
  success(subject) {
    return _toast.success(subject, toastOptions);
  }
  info(subject) {
    return _toast.info(subject, toastOptions);
  }
  warn(subject) {
    return _toast.warn(subject, toastOptions);
  }
  error(subject) {
    return _toast.error(subject, toastOptions);
  }
}

export const toast = new Toast();
