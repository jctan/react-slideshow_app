import React, { useState } from 'react';

function Slides({slides}) {

    const [activeIndex, setActiveIndex] = useState(0);
    const [currentSlide, setCurrentSlide] = useState(slides[0]);
    const [disabledPrev, setDisabledPrev] = useState(true);
    const [disabledNext, setDisabledNext] = useState(false);
    const [disabledRestart, setDisabledRestart] = useState(true);


    const onClickNext = () => {
        var currSlideIndex = activeIndex;

        if(currSlideIndex < slides.length - 1){
            currSlideIndex++;
            setActiveIndex(currSlideIndex);
            setCurrentSlide(slides[currSlideIndex]);
            setDisabledPrev(false);
            setDisabledRestart(false);
        }
        if(currSlideIndex === slides.length - 1){
            setDisabledNext(true);
        }
    }

    const onClickPrev = () => {
        var currSlideIndex = activeIndex;

        if (currSlideIndex > 0){
            currSlideIndex--;
            setActiveIndex(currSlideIndex);
            setCurrentSlide(slides[currSlideIndex]);
            setDisabledNext(false);
        }
        if(currSlideIndex === 0){
            setDisabledPrev(true);
            setDisabledRestart(true);
        }
    }

    const onClickRestart = () => {
        setActiveIndex(0);
        setCurrentSlide(slides[0]);
        setDisabledPrev(true);
        setDisabledRestart(true);
        setDisabledNext(false);
    }


    return (
        <div>
            <div id="navigation" className="text-center">
                <button data-testid="button-restart" className="small outlined" onClick={() => onClickRestart()} disabled={disabledRestart}>Restart</button>
                <button data-testid="button-prev" className="small" onClick={() => onClickPrev()} disabled={disabledPrev}>Prev</button>
                <button data-testid="button-next" className="small" onClick={() => onClickNext()} disabled={disabledNext}>Next</button>
            </div>
            <div id="slide" className="card text-center">
                <h1 data-testid="title">{currentSlide.title}</h1>
                <p data-testid="text">{currentSlide.text}</p>
            </div>
        </div>
    );

}

export default Slides;
