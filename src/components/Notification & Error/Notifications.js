import toast from "react-hot-toast";

export function warning(message) {
  toast(`${message}`, {
    icon: "📣",
    style: { borderRadius:"0", background:'#fff45e', color:"black" },
  });
}

export function success(message) {
  toast.success(`${message}`, {
    style: {borderRadius:"0", background:'#222', color:"white" },
  });
}

export function generalError(message) {
  toast.error(`${message}`, {
    style: { borderRadius:"0", background:'#222', color:"white" },
  });
}

export function specificError(error, message) {
  toast.error(
    `${error.message.substr(error.message.indexOf(" ") + 1)}: ${message}`,
    { style: { borderRadius:"0", background:'#222', color:"white" } }
  );
}
