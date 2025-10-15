import React, { forwardRef, useState } from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import Waves2D from "../particle/Waves";
import HoldButton from "../SendButton";

const Contact = forwardRef((props, ref) => {
    const [formVisible, setFormVisible] = useState(false);
    const [name, setName] = useState("");
    const [company, setCompany] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleButtonClick = () => {
        if (!formVisible) {
            setFormVisible(true);
        } else {
            window.location.href = "mailto:youremail@example.com";
        }
    };

    // Mobile-only shortened email
    const mobileEmail = "marlineichelmann@gmail.com";
    const displayEmail = mobileEmail.length > 10 ? mobileEmail.slice(0, 10) + "..." : mobileEmail;

    return (
        <section
            ref={ref}
            id="contact"
            className="relative flex flex-col justify-between min-h-screen max-h-screen w-full text-gray-200"
        >
            {/* Wellen */}
            <Waves2D />

            {/* Oberer Bereich */}
            <div className="flex flex-col items-center justify-center flex-grow w-full bg-gradient-to-b from-transparent to-black px-4 text-center">
                <motion.div
                    animate={{ y: formVisible ? -40 : 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col items-center w-full max-w-2xl"
                >
                    <h2 className="text-3xl md:text-4xl font-semibold mb-3">
                        Have a project in mind? Let&apos;s talk.
                    </h2>
                    <p className="text-gray-400 mb-6 hidden md:block">
                        I usually respond within 24 hours.
                    </p>

                    {/* Button */}
                    {!formVisible && (
                        <motion.button
                            style={{ "--x": "100%", "--primary": "#3b82f6" }}
                            initial={{ "--x": "100%" }}
                            animate={{ "--x": "-100%" }}
                            transition={{
                                repeat: Infinity,
                                repeatType: "loop",
                                repeatDelay: 1,
                                type: "spring",
                                stiffness: 20,
                                damping: 15,
                                mass: 2,
                            }}
                            className="relative cursor-pointer px-6 py-3 border border-gray-600 rounded-lg uppercase tracking-wide font-medium text-white bg-black/30 hover:bg-black/50 backdrop-blur-md transition-all duration-300 overflow-hidden hover:scale-[1.05] mb-4"
                            onClick={() => setFormVisible(true)}
                        >
                            <span
                                className="relative block z-10"
                                style={{
                                    maskImage:
                                        "linear-gradient(-75deg, var(--primary) calc(var(--x) + 20%), transparent calc(var(--x) + 30%), var(--primary) calc(var(--x) + 100%))",
                                }}
                            >
                                Say hi.
                            </span>
                        </motion.button>
                    )}

                    {/* Kontaktformular */}
                    <AnimatePresence>
                        {formVisible && (
                            <motion.form
                                initial={{ opacity: 0, y: 40 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 40 }}
                                transition={{ duration: 0.5 }}
                                className="w-full flex flex-col gap-4 mt-4 max-w-3xl"
                            >
                                {/* Zweispaltige Inputs: Your Name + Your Company */}
                                <div className="flex flex-col md:flex-row gap-4">
                                    {["Your Name", "Your Company"].map((label, idx) => (
                                        <div key={idx} className="relative w-full">
                                            <input
                                                type="text"
                                                id={`input-${idx}`}
                                                placeholder=" "
                                                className="peer w-full p-4 rounded-lg bg-black text-white border border-gray-600 focus:outline-none focus:border-white"
                                                onChange={(e) =>
                                                    idx === 0 ? setName(e.target.value) : setCompany(e.target.value)
                                                }
                                            />
                                            <label
                                                htmlFor={`input-${idx}`}
                                                className="absolute left-4 -top-2 bg-black px-1 text-gray-400 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:text-base peer-focus:-top-2 peer-focus:text-sm peer-focus:text-white"
                                            >
                                                {label}
                                            </label>
                                        </div>
                                    ))}
                                </div>

                                {/* E-Mail Input */}
                                <div className="relative w-full">
                                    <input
                                        type="email"
                                        id="input-email"
                                        placeholder=" "
                                        className="peer w-full p-4 rounded-lg bg-black text-white border border-gray-600 focus:outline-none focus:border-white"
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                    <label
                                        htmlFor="input-email"
                                        className="absolute left-4 -top-2 bg-black px-1 text-gray-400 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:text-base peer-focus:-top-2 peer-focus:text-sm peer-focus:text-white"
                                    >
                                        Your Email
                                    </label>
                                </div>

                                {/* Message Textarea */}
                                <div className="relative w-full" data-scrollable>
                                    <textarea
                                        id="input-message"
                                        rows={5}
                                        placeholder=" "
                                        className="peer w-full p-4 rounded-lg bg-black text-white border border-gray-600 focus:outline-none focus:border-white resize-none"
                                        onChange={(e) => setMessage(e.target.value)}
                                    />
                                    <label
                                        htmlFor="input-message"
                                        className="absolute left-4 -top-2 bg-black px-1 text-gray-400 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:text-base peer-focus:-top-2 peer-focus:text-sm peer-focus:text-white"
                                    >
                                        Your Message
                                    </label>
                                </div>

                                {/* Footer Row: Template Email + Send Button */}
                                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 w-full">
                                    <a
                                        href="mailto:template@example.com"
                                        className="relative text-gray-500 text-sm whitespace-nowrap group"
                                    >
                                        marlineichelmann@gmail.com
                                        {/* Animierter Unterstrich */}
                                        <span className="absolute left-0 -bottom-1 h-[1px] w-0 bg-white transition-all duration-1000 group-hover:w-full"></span>
                                    </a>
                                    <HoldButton name={name} company={company} email={email} message={message} />
                                </div>
                            </motion.form>
                        )}
                    </AnimatePresence>
                </motion.div>
            </div>

            {/* Footer */}
            <footer className="w-full bg-black py-4 md:py-6 px-6 flex flex-col md:flex-row justify-between items-center">
                <span className="text-gray-400 text-sm mb-4 md:mb-0">&copy; 2025 Mxrlin</span>
                <div className="flex space-x-6 text-2xl">
                    <a
                        href="https://github.com/yourusername"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-gray-400 transition-colors"
                    >
                        <FaGithub />
                    </a>
                    <a
                        href="https://linkedin.com/in/yourusername"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-gray-400 transition-colors"
                    >
                        <FaLinkedin />
                    </a>
                    <a
                        href="https://instagram.com/yourusername"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-gray-400 transition-colors"
                    >
                        <FaInstagram />
                    </a>
                </div>
            </footer>
        </section>
    );
});

Contact.displayName = "Contact";
export default Contact;
