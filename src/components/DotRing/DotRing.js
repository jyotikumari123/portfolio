import React, { useContext,useEffect,useRef } from "react";
import "./DotRing.css";
import useMousePosition from "../../hooks/useMousePosition";
import { MouseContext } from "../../context/mouse-context";

const DotRing = () => {
   const { cursorType } = useContext(MouseContext);
    const dotRef = useRef(null);
    const ringRef = useRef(null);

    useEffect(() => {
        const moveCursor = (e) => {
            const { clientX: x, clientY: y } = e;
            if (dotRef.current && ringRef.current) {
                dotRef.current.style.left = `${x}px`;
                dotRef.current.style.top = `${y}px`;
                ringRef.current.style.left = `${x}px`;
                ringRef.current.style.top = `${y}px`;
            }
        };
        window.addEventListener('mousemove', moveCursor);
        return () => {
            window.removeEventListener('mousemove', moveCursor);
        };
    }, []);

    return (
        <>
            <div ref={dotRef} className={`dot ${cursorType}`}></div>
            <div ref={ringRef} className={`ring ${cursorType}`}></div>
        </>
    );
};

export default DotRing;
