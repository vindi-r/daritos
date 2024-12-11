"use client"

import React, {useCallback, useEffect, useState} from 'react'
import {EmblaOptionsType} from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import {StaticImport} from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import { useRouter } from 'next/navigation'

type PropType = {
  selected: boolean
  src: StaticImport
  onClick: () => void
}

const Thumb: React.FC<PropType> = (props) => {
  const {
          selected,
          onClick,
    src
        } = props

  return (<div
      className={'embla-thumbs__slide'.concat(selected ? ' embla-thumbs__slide--selected' : '')}
    >
      <button
        onClick={onClick}
        type="button"
        className="embla-thumbs__slide__number"
      >
        <Image
          placeholder="blur"
          loading="lazy"
          src={src}
          unoptimized={true}
          alt={"image"}
          fill
          style={{objectFit: 'contain'}}
        />
      </button>
    </div>)
}


type Props = {
  slides: StaticImport[]
  options?: EmblaOptionsType
}


export const EmblaChoice = (props: Props) => {
  const router = useRouter()
  const {
          slides,
          options,
        } = props
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [emblaMainRef, emblaMainApi] = useEmblaCarousel(options)
  const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
    containScroll: 'keepSnaps',
    dragFree: true,
  })

  const onThumbClick = useCallback((index: number) => {
    if (!emblaMainApi || !emblaThumbsApi) return
    emblaMainApi.scrollTo(index)
  }, [emblaMainApi, emblaThumbsApi])

  const onSelect = useCallback(() => {
    if (!emblaMainApi || !emblaThumbsApi) return
    setSelectedIndex(emblaMainApi.selectedScrollSnap())
    emblaThumbsApi.scrollTo(emblaMainApi.selectedScrollSnap())
  }, [emblaMainApi, emblaThumbsApi, setSelectedIndex])

  useEffect(() => {
    if (!emblaMainApi) return
    onSelect()

    emblaMainApi.on('select', onSelect).on('reInit', onSelect)
  }, [emblaMainApi, onSelect])

  const onClickHandle = useCallback(() => {
    const element = (slides[selectedIndex] as {src: string}).src
    const label = element.replace(/.+\/(.+?)\..+/, '$1')
    alert('Выбрана картинка: ' + (label))
  }, [selectedIndex, slides])

  useEffect(() => {
    try {

    // @ts-expect-error missing typings
    const BackButton = window.Telegram.WebApp.BackButton;

    BackButton.show();
    BackButton.onClick(() => router.push('/deck'));
    return () => {
      BackButton.hide();
    }

    } catch (_e) {

    }
  }, [router]);

  return (<div className="embla">
      <div className="embla__viewport" ref={emblaMainRef}>
        <div className="embla__container">
          {slides.map((elt, index) => (<div className="embla__slide" key={index}>
              <div className="embla__slide__number">
                <Image
                  placeholder="blur"
                  loading="lazy"
                  src={elt}
                  unoptimized={true}
                  alt={"image"}
                  fill
                  style={{objectFit: 'contain'}}
                />
              </div>
            </div>))}
        </div>
      </div>
      <div className="embla-thumbs">
        <div className="embla-thumbs__viewport" ref={emblaThumbsRef}>
          <div className="embla-thumbs__container">
            {slides.map((elt, index) => (<Thumb
                key={index}
                onClick={() => onThumbClick(index)}
                selected={index === selectedIndex}
                src={elt}
              />))}
          </div>
        </div>
      </div>
      <button onClick={onClickHandle} className="rounded bg-green-200 text-xl p-4 w-full mt-4 active:bg-green-600">OK
        ВЫБРАТЬ
      </button>
    </div>)
}

