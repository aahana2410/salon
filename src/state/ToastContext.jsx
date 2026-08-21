import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from "react";

const ToastContext = createContext(() => {});

export function ToastProvider({ children }) {
  const [message, setMessage] = useState("");
  const timer = useRef();

  useEffect(() => () => window.clearTimeout(timer.current), []);

  const flash = useCallback((text) => {
    setMessage(text);
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setMessage(""), 2400);
  }, []);

  const value = useMemo(() => flash, [flash]);

  return (
    <ToastContext.Provider value={value}>
      {children}
      <div className="toast-slot" aria-live="polite">
        {message && <p className="toast">{message}</p>}
      </div>
    </ToastContext.Provider>
  );
}

export const useToast = () => useContext(ToastContext);
