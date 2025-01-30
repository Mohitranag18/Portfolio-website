import { useEffect, useState, useRef } from 'react';

function Title({ TitleText, color }) {
    const [displayedText, setDisplayedText] = useState('');
    const textRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    let i = 0;
                    const interval = setInterval(() => {
                        if (i <= TitleText.length) {
                            setDisplayedText(TitleText.slice(0, i));
                            i++;
                        } else {
                            clearInterval(interval);
                        }
                    }, 100);
                    observer.disconnect(); // Stop observing after animation starts
                }
            },
            { threshold: 0.5 }
        );

        if (textRef.current) {
            observer.observe(textRef.current);
        }

        return () => observer.disconnect();
    }, [TitleText]);

    return (
        <div>
            <h1
                ref={textRef}
                className="bg-[#1C1C1C] inline-block text-[#F3F0E0] text-7xl p-2"
            >
                <span style={{ color: color }} className="font-bold text-7xl">{'>'}</span>
                {displayedText}
            </h1>
        </div>
    );
}

export default Title;
