'use client'

import React from 'react'

import { useSwiper } from 'swiper/react'
import { PiCaretLeftBold, PiCaretRightBold } from 'react-icons/pi'

const WorkSliderBtns = ({ conatinerStyles, btnStyles, iconStyles }) => {
    
    const swiper = useSwiper()

    return (
        <div className={conatinerStyles}>
            <button className={btnStyles}>
                <PiCaretLeftBold className={iconStyles} onClick={() => swiper.slidePrev()}/>
            </button>
            <button className={btnStyles}>
                <PiCaretRightBold className={iconStyles} onClick={() => swiper.slideNext()} />
            </button>
        </div>
    )
}

export default WorkSliderBtns