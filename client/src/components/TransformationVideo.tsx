import React from "react";
import { motion } from "framer-motion";

export function TransformationVideo() {
  return (
    <div className="max-w-4xl mx-auto py-8">
      <motion.div 
        className="rounded-xl overflow-hidden shadow-2xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="relative" style={{ paddingBottom: "56.25%" }}>
          <iframe 
            src="https://www.youtube.com/embed/0_bDS3rDG64?autoplay=0" 
            title="Xpert AI Solutions Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              border: 0
            }}
          ></iframe>
        </div>
      </motion.div>
    </div>
  );
}