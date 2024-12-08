"use client"
import styles from './FlipFlap.module.css'
import {ReactNode, useCallback, useRef, useState} from "react";
import clsx from 'clsx';
import Image from 'next/image'
import {StaticImport} from "next/dist/shared/lib/get-img-props";


interface Props {
  children ?: ReactNode,
  backFace: object
  frontFace ?: object
}
export const FlipFlap= ({children, backFace, frontFace}:Props) => {
  const [isRevealed, setIsRevealed] = useState(false);
  const isAnimating = useRef(false);
  const onClickHandler = useCallback(() => {
    if(isAnimating.current) return;
    isAnimating.current = true;
    setTimeout(() => {isAnimating.current = false}, 500)
    setIsRevealed(prev => !prev)
  }, [])
return <div className={clsx(styles.card, {[styles.cardFlipped]: isRevealed})} onClick={onClickHandler}>
  <div className={styles.card__front}>{children || <Image
      loading="eager"
      src={frontFace as StaticImport}
      unoptimized={true}
      alt={"frontface"}
      style={{maxWidth: 'initial'}}
  />}</div>
  <div className={styles.card__back}>
    <Image
      loading="eager"
      src={backFace as StaticImport}
      unoptimized={true}
      alt={"backface"}
      style={{maxWidth: 'initial'}}
    />
  </div>
</div>
}