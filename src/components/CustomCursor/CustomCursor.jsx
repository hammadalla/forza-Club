import React, { useEffect } from 'react';
import './CustomCusror.css';

export default function CustomCursor() {
    useEffect(() => {
        const cursor = document.getElementById('custom-cursor');

        const moveCursor = (e) => {
            cursor.style.top = `${e.clientY}px`;
            cursor.style.left = `${e.clientX}px`;
        };

        const addHover = () => cursor.classList.add('hovered');
        const removeHover = () => cursor.classList.remove('hovered');

        // Follow mouse
        window.addEventListener('mousemove', moveCursor);

        // Detect hoverable elements
        const hoverables = document.querySelectorAll('button, a, .hoverable');
        hoverables.forEach(el => {
            el.addEventListener('mouseenter', addHover);
            el.addEventListener('mouseleave', removeHover);
        });

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            hoverables.forEach(el => {
                el.removeEventListener('mouseenter', addHover);
                el.removeEventListener('mouseleave', removeHover);
            });
        };
    }, []);
    return (
        <>
            <div id="custom-cursor"></div>

        </>
    );
}
