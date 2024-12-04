"use client"

import PropTypes from 'prop-types';
import { animate, useInView } from "framer-motion";
import React, { useEffect, useRef } from "react"

const Counter = ({ from = 0, to, duration = 1.5 }) => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true });    

    useEffect(() => {
        const element = ref.current;
        if( !element ) return;
        if( !inView ) return;

        element.textContent = String(from);

        if ( window.matchMedia('(prefers-reduced-motion)' ).matches ){
            element.textContent = String(to);
            return;
        }

        const controls = animate( from, to, {
            duration,
            ease: 'easeOut',
            onUpdate(value) {
                element.textContent = value.toFixed(0);
            }
        });

        return () => {
            controls.stop();
        }
    }, [ from, to, duration, inView ])

    return <div ref={ref} />
    
}

Counter.propTypes = {
    from: PropTypes.number.isRequired,
    to: PropTypes.number.isRequired,
    duration: PropTypes.number.isRequired,
};

export default Counter