import React, {useState} from 'react'
import Slider__image from './Slider__image'

const Slider = ({slides}) => {
    const [img, setImg] =useState(0);
    const length = slides.length;

    const next = () => {
        setImg(img === length - 1 ? 0 : img + 1);
    }

    const prev = () => {
        setImg(img === 0 ? length - 1 : img - 1);
    }

    return (
        <div className={'slider'}>
            <div className={'head'}>
                <h2>React-Slider</h2>
            </div>
            {Slider__image.map((slide, index) => {
                    return (
                        <div key={index} className={index === img ? 'slide active' : 'slide'}>
                            {index === img && (
                                <img src={slide.image} alt='slide img' className={'img'} />
                            )}
                        </div>
                    )
                })
            }
            <div className={'btnBox'}>
                <button type='button' onClick={prev} className={'left-arrow'}>next</button>
                <button type='button' onClick={next} className={'right-arrow'}>prev</button>
            </div>
        </div>
    )
}

export default Slider;
