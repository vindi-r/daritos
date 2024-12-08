"use client"
import styles from './Deck.module.css'
import clsx from "clsx";
import {MouseEventHandler} from "react";


const emptyFx = () => {}
interface Props {
  title: string
  text: string
  onClick ?: MouseEventHandler
}

export const Deck = ({title, text, onClick}: Props) => {
  const jsxTitle = <h1 className="font-bold text-xl mb-2">{title}</h1>
  const jsxText = <p>{text}</p>
  return <ul className={styles.cards} onClick={onClick ?? emptyFx}>
    <li className={clsx(styles.card, styles.cardCurrent)}>
      {jsxTitle}
      {jsxText}
    </li>
    <li className={clsx(styles.card, styles.cardNext)}>
      {jsxTitle}
      {jsxText}
    </li>
    <li className={clsx(styles.card, styles.cardOut)}>
      {jsxTitle}
      {jsxText}
    </li>
  </ul>
}