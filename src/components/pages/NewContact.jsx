import React, { useState } from "react";
import { motion } from "framer-motion";

const Contact = React.forwardRef((props, ref) => {
  const [isFlapOpen, setIsFlapOpen] = useState(false);

  return (
    <section
      ref={ref}
      className="relative flex items-center justify-center min-h-screen bg-[#05353D]"
    >
      <div className="relative grid place-items-center">
        {/* Envelope container */}
        <div className="relative">
          {/* Umschlag klickbar */}
          <div
            className="relative w-[300px] h-[230px] cursor-pointer bg-[#f5edd1] shadow-[0_0_40px_rgba(0,0,0,0.2)]"
            onClick={() => setIsFlapOpen(!isFlapOpen)}
          >
            {/* Flap */}
            <motion.div
              initial={{ rotateX: 0, zIndex: 20 }}
              animate={{ rotateX: isFlapOpen ? 180 : 0, zIndex: isFlapOpen ? 0 : 20 }}
              transition={{ duration: 0.7, delay: isFlapOpen ? 0 : 2.3 }}
              className="absolute top-0 left-0 w-full h-0 border-t-[130px] border-l-[150px] border-r-[150px] border-t-[#ecdeb8] border-l-transparent border-r-transparent origin-top"
              style={{ transformStyle: "preserve-3d" }}
            ></motion.div>

            {/* Envelope cover (statisch) */}
            <div className="absolute w-0 h-0 border-t-[130px] border-r-[150px] border-b-[100px] border-l-[150px] border-t-transparent border-r-[#e6cfa7] border-b-[#e6cfa7] border-l-[#e6cfa7] z-10"></div>
          </div>

          {/* Letter / Zettel (größer, animiert) */}
          <motion.div
            initial={{ x: 0, y: 0, scale: 0.5 }}
            animate={
              isFlapOpen
                ? {
                    y: [-240, -250, -250, 0],
                    x: [0, 0, 360, 360],
                    scale: [0, 0.1, 0.2, 1],
                  }
                : { 
                    y: [0, -240, -240, -240],
                    x: [360, 360, 0, 0],
                    scale: [1, 0.2, 0.1, 0],
                  }
            }
            transition={{
              delay: isFlapOpen ? 0.5 : 0,
              duration: 2,
              times: [0, 0.3, 0.6, 1],
            }}
            className="absolute left-1/2 top-0 w-[500px] h-[705px] -translate-x-1/2 bg-white shadow-[0_0_10px_rgba(0,0,0,0.3)] p-6"
          >
            <form className="flex flex-col gap-3 w-full h-full">
              <h2 className="text-sm font-bold text-gray-700">Contact Me</h2>
              <input
                type="text"
                placeholder="Your Name"
                className="border border-gray-300 p-2 rounded text-xs"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="border border-gray-300 p-2 rounded text-xs"
              />
              <textarea
                placeholder="Your Message"
                className="border border-gray-300 p-2 rounded text-xs flex-1 resize-none"
              ></textarea>
              <button
                type="submit"
                className="bg-[#05353D] text-white text-xs py-2 rounded hover:bg-[#0a4d5a] transition"
              >
                Send
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
});

export default Contact;
