import React from 'react';
import '../Herosection/Herosection.css';
import {motion}  from 'framer-motion';

export default function Herosection() {
    const sentence = "Turn your passion into greatness with Forza Football Academy";
    const words = sentence.split(" ");

    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.12,
                delayChildren: 0.3
            }
        }
    };

    const wordVariants = {
        hidden: { 
            opacity: 0, 
            y: 50,
            rotateX: -30
        },
        visible: { 
            opacity: 1, 
            y: 0,
            rotateX: 0,
            transition: {
                duration: 0.8,
                ease: [0.6, 0.01, 0.05, 0.95]
            }
        }
    };

    return (
        <section className='herosection'>
            <div className="contentlayer">
                <motion.h1
                    className='text-intro'
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                >
                    {words.map((word, index) => (
                        <motion.span
                            key={index}
                            className="word d-inline-block me-1"
                            variants={wordVariants}
                        >
                            {word}
                        </motion.span>
                    ))}
                </motion.h1>

                <motion.p
                    className='paragraph-intro'
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ 
                        delay: 1.8,
                        duration: 1.2,
                        ease: "easeOut"
                    }}
                >
                    From training to triumph — we take you from interest to{' '}
                    <motion.span 
                        className="action"
                        animate={{ 
                            scale: [1, 1.1, 1],
                        }}
                        transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "easeOut"
                        }}
                    >
                        action.
                    </motion.span>
                </motion.p>
            </div>
        </section>
    );
}