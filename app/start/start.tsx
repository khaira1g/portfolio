import React from "react";
import { Helmet } from "react-helmet"
import BlurText from "../BlurText";
import LetterGlitch from "../LetterGlitch";
import Aurora from '../Aurora';

export function Start() {
    const handleAnimationComplete = () => {
        console.log('Animation completed!');
    };

    return (
        <>
          <Helmet>
             <title>this is a title</title>
          </Helmet>
          <div>
              <Aurora
                colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
                blend={0.5}
                amplitude={1.0}
                speed={1.8} 
              />
              <div className="p-8">
              <div className="name">
                <h1>Gurveer Khaira</h1>
              </div>
              <BlurText
                text="balls baller"
                delay={150}
                animateBy="words"
                direction="top"
                onAnimationComplete={handleAnimationComplete}
                className="text-2xl mb-8"
              />
            </div>
          </div>
        </>
    );
};