import React, { useRef } from 'react';

const HeroWithScrollEffect = () => {
    const scrollRef = useRef(null);

    const handleBtnClick = () => {
    scrollRef.current.scrollIntoView({ behavior: 'smooth' });
    };

  return (
    <>
    <div className="hero min-h-screen" 
        <div className="hero-content text-center text-neutral-content">
            <div 
            className="max-w-md">
                <h1 
                className="mb-5 text-5xl font-bold"
                >Heading</h1>

                <button 
                className="btn btn-primary"
                onClick={handleBtnClick}
                >Button</button>
            </div>
        </div>
    </div>

    <div
    ref={scrollRef}>
    </div>
    </>
  );
};

export default HeroWithScrollEffect;
