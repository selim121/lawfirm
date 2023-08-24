import React from 'react';
import img1 from '../../../assets/slide/1.png';
import img2 from '../../../assets/slide/2.png';
import img3 from '../../../assets/slide/3.png';
import img4 from '../../../assets/slide/4.png';
import img5 from '../../../assets/slide/5.png';
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import './Slider.css';
import { GiArrowDunk } from 'react-icons/gi';
import { Link } from 'react-router-dom';

const animation = { duration: 20000, easing: (t) => t }


const Slider = () => {

    const images = [img1, img2, img3, img4, img5];

    const [opacities, setOpacities] = React.useState([])

    const [sliderRef] = useKeenSlider({
        slides: images.length,
        loop: true,
        detailsChanged(s) {
            const new_opacities = s.track.details.slides.map((slide) => slide.portion)
            setOpacities(new_opacities)
        },
        renderMode: "performance",
        drag: false,
        created(s) {
            s.moveToIdx(5, true, animation)
        },
        updated(s) {
            s.moveToIdx(s.track.details.abs + 5, true, animation)
        },
        animationEnded(s) {
            s.moveToIdx(s.track.details.abs + 5, true, animation)
        },
    })

    return (
        <div className='bg-[#1F2732]'>
            <div ref={sliderRef} className="fader">
                {images.map((src, idx) => (
                    <div
                        key={idx}
                        className="fader__slide"
                        style={{ opacity: opacities[idx] }}
                    >
                        <img src={src} />
                    </div>
                ))}
                <div className="h-[100vh] flex items-center justify-center">
                    <div className="absolute flex flex-col justify-center items-center px-4">
                        <h1 className="text-2xl md:text-4xl text-white font-bold tracking-widest uppercase">LEADING THE WAY IN INNOVATIVE LEGAL SOLUTIONS</h1>
                        <p className="text-white tracking-widest mt-3">Your Partner In Progressive Legal Strategies</p>
                    </div>
                    <Link to={'#welcome'} className='bounce absolute bottom-0 text-white hover:text-[#D1B06B]'><GiArrowDunk size={'50px'} /></Link>
                </div>
            </div>
        </div>
    );
};

export default Slider;