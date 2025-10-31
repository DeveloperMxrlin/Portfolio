import { useState, useRef } from "react";
import Popup from "./Popup";
import { sendEmail } from "@/libraries/SendMail";

function HoldButton({ name, company, email, message }) {
    const [progress, setProgress] = useState(0);
    const [isHover, setIsHover] = useState(false);
    const [popupMsg, setPopupMsg] = useState(null);
    const [isPopupOpen, setPopupOpen] = useState(false);
    const intervalRef = useRef(null);

    const openPopup = (content) => {
        setPopupMsg(content);
        setPopupOpen(true);
    };

    const maxWidth = 100;
    const hoverWidth = 25;

    const canSendEmail = () => {
        const lastSent = localStorage.getItem("sentEmailAt");
        if (!lastSent) return true;
        const diffDays = (Date.now() - new Date(lastSent)) / (1000 * 60 * 60 * 24);
        return diffDays >= 2;
    };

    const markEmailSent = () => {
        localStorage.setItem("sentEmailAt", new Date().toISOString());
    };

    const isValidEmail = (email) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    const startHold = () => {

        if (!canSendEmail()) {
            openPopup(
                <div className="text-start">
                    <h2 className="text-red-500 text-lg font-semibold">Cooldown Active</h2>
                    <p className="text-gray-300 mt-2">You are currently on cooldown sending emails.</p>
                </div>
            );
            return;
        }

        if (!name || !email || !message) {
            openPopup(
                <div className="text-start">
                    <h2 className="text-red-500 text-lg font-semibold">Missing Information</h2>
                    <p className="text-gray-300 mt-2">Please fill out Name, Email, and Message.</p>
                </div>
            );
            return;
        }

        if (!isValidEmail(email)) {
            openPopup(
                <div className="text-start">
                    <h2 className="text-red-500 text-lg font-semibold">Invalid Email</h2>
                    <p className="text-gray-300 mt-2">Please enter a valid email address.</p>
                </div>
            );
            return;
        }


        if (intervalRef.current) return;
        intervalRef.current = setInterval(() => {
            setProgress((prev) => {
                if (prev + hoverWidth >= maxWidth) {
                    clearInterval(intervalRef.current);
                    intervalRef.current = null;

                    sendEmail({ name, company, email, message })
                        .then(() => {
                            openPopup(
                                <div className="text-start">
                                    <h2 className="text-xl font-semibold text-green-500">Message sent!</h2>
                                    <p className="text-gray-300 mt-2">Thanks for reaching out. I'll get back to you soon.</p>
                                </div>
                            );
                            markEmailSent();
                        })
                        .catch(() => openPopup(
                            <div className="text-start">
                                <h2 className="text-xl font-semibold text-red-500">Message couldn't be sent.</h2>
                                <p className="text-gray-300 mt-2">Please try again later or try contacting me manually via email.</p>
                            </div>
                        ));

                    return maxWidth - hoverWidth;
                }
                return prev + 1;
            });
        }, 10);
    };

    const stopHold = () => {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
        setProgress(0);
    };

    return (
        <>
            {/* Button */}
            <button
                type="button"
                className="relative flex-1 px-6 py-2 border border-gray-600 rounded-lg text-left overflow-hidden"
                onMouseDown={startHold}
                onMouseUp={stopHold}
                onMouseEnter={() => setIsHover(true)}
                onMouseLeave={() => {
                    stopHold();
                    setIsHover(false);
                }}
            >
                <div
                    className="absolute top-0 left-0 h-full bg-white z-0 pointer-events-none"
                    style={{
                        width: isHover ? `${hoverWidth}%` : "0%",
                        transition: "width 0.6s ease",
                    }}
                ></div>

                {progress > 0 && (
                    <div
                        className="absolute top-0 left-0 h-full bg-white z-0"
                        style={{ width: `${hoverWidth + progress}%` }}
                    ></div>
                )}

                {/* Text */}
                <span
                    className="relative z-10 font-medium"
                    style={{ mixBlendMode: "difference", color: "white" }}
                >
                    Send →
                </span>
            </button>

            <Popup isOpen={isPopupOpen} onClose={() => setPopupOpen(false)}>
                {popupMsg}
            </Popup>
        </>
    );
}

export default HoldButton;
