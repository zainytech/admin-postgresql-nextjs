"use client"

import React from 'react'
import { DotButton, useDotButton } from './EmblaCarouselDotButton'
import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/image';


import {
  PrevButton,
  NextButton,
  usePrevNextButtons
} from './EmblaCarouselArrowButtons'
import useEmblaCarousel from 'embla-carousel-react'

const EmblaCarousel = (props) => {
  // console.log("sl:",props);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false }, [Autoplay({delay:2000})])

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi)

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

  return (
    <section className="embla h-full">
      <div className="embla__viewport h-full" ref={emblaRef}>
        <div className="embla__container h-[90%]">
    
            <div className="embla__slide">
              <Image src={props.image} layout='fill'/>
            </div>
            <div className="embla__slide">
              <video src={props.video} autoPlay loop controls style={{ width: '100%', height: '100%', objectFit:'cover'}}/>
            </div>
            <div className="embla__slide">
              <Image src={props.gif} width={100} height={100} style={{ width: '100%', height: '100%', objectFit:'cover'}}/>
            </div>
        </div>
        <div className="embla__controls relative m-4">
        {/* <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div> */}

        <div className="embla__dots absolute right-2">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={'embla__dot'.concat(
                index === selectedIndex ? ' embla__dot--selected' : ''
              )}
            />
          ))}
        </div>
      </div>
      </div>


    </section>
  )
}

export default EmblaCarousel
