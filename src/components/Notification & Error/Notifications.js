import toast from "react-hot-toast";

export function warning(message) {
  toast(`${message}`, {
    icon: "📣",
    style: { border: "1px solid #c4c4c4" },
  });
}

export function success(message) {
  toast.success(`${message}`, {
    style: { border: "1px solid #c4c4c4" },
  });
}

export function generalError(message) {
  toast.error(`${message}`, {
    style: { border: "1px solid #c4c4c4" },
  });
}

export function specificError(error, message) {
  toast.error(
    `${error.message.substr(error.message.indexOf(" ") + 1)}: ${message}`,
    { style: { border: "1px solid #c4c4c4" } }
  );
}
