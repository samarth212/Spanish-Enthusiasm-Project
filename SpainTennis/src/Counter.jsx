import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const Counter = ({ start, end, duration, unit}) => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <div ref={ref}>
            {inView && <CountUp start={start} end={end} duration={duration} style={{color:"white"}}/>}{unit}
        </div>
    );
};

export default Counter;
