import { motion } from "motion/react";
import React from "react";

export const AnimatedText = ({ text, className = "", delay = 0, as: Tag = "div", style = {} }: { text: string, className?: string, delay?: number, as?: any, style?: React.CSSProperties }) => {
   const regex = /(\s+)/;
   const parts = typeof text === "string" ? text.split(regex) : [];
   
   let wordCount = 0;

   return (
    <Tag className={className} style={style}>
       {parts.map((part, i) => {
          if (part.match(/\n/)) {
             return <br key={i} />;
          } else if (part.match(/\s+/)) {
             return <span key={i} className="inline-block">&nbsp;</span>;
          }
          
          const currentWordCount = wordCount;
          wordCount++;
          
          return (
             <span key={i} className="inline-block align-bottom" style={{ perspective: "1000px" }}>
                <motion.span
                   className="inline-block origin-bottom-left"
                   initial={{ y: 40, opacity: 0, rotateZ: 5, rotateY: 10, scale: 0.9 }}
                   whileInView={{ y: 0, opacity: 1, rotateZ: 0, rotateY: 0, scale: 1 }}
                   viewport={{ once: true, margin: "-50px" }}
                   transition={{ duration: 0.9, delay: delay + (currentWordCount * 0.04), ease: [0.16, 1, 0.3, 1] }}
                >
                   {part}
                </motion.span>
             </span>
          );
       })}
    </Tag>
   );
}
