import {StaticImport} from "next/dist/shared/lib/get-img-props";
import {universalDeck} from "@/app/deck/lib/deckStorage/universal";
import {relationsDeck} from "@/app/deck/lib/deckStorage/relations";
import {heroDeck} from "@/app/deck/lib/deckStorage/hero";
import {childDeck} from "@/app/deck/lib/deckStorage/child";
import {motherDeck} from "@/app/deck/lib/deckStorage/mother";
import {cockroachesDeck} from "@/app/deck/lib/deckStorage/cockroaches";
import {skillsDeck} from "@/app/deck/lib/deckStorage/skills";
import {fairytaleDeck} from "@/app/deck/lib/deckStorage/fairytale";

export type DeckElement = {
  id: string;
  title: string;
  description: string;
  cards: StaticImport[];
}

const one = {id: "universal", title:"Универсальная", description:"Эта универсальная колода. Подходит для любых запросов: от профессиональных до личных. Вы сможете использовать карты для поиска ответов на жизненные вопросы, разрешения конфликтов или саморефлексии.", cards: universalDeck}
const two = {id: "relations", title:"Отношения", description:"Эта колода сосредоточена на исследованиях и понимании ваших отношений. Каждая карта раскрывает аспекты ваших отношений, включая любовь, доверие, понимание и совместное развитие.", cards: relationsDeck}
const three = {id: "hero", title:"Путь героя. Самопознание.", description:"Каждый из нас герой своей жизни, проходящий через определенный путь. Колода может помочь ответить на вопросы «На каком этапе пути вы?», «Какова цель вышего путешествия», «Какие у вас есть испытания и помощники?»", cards:heroDeck}
const four = {id: "child", title:"Внутренний ребенок", description:"Работа с колодой позволяет познакомиться со своим внутренним ребенком, выявить ранние установки и негативные паттерны поведения. ", cards: childDeck}
const five = {id: "mother", title:"Мама", description:"Колода, позволяющая обнаружить ранние психологические травмы, родительские послания, осознать неудовлетворенные потребности в отношениях с матерью, проанализировать свое Родительское эго-состояние.", cards: motherDeck}
const six = {id: "cockroaches", title:"Тараканы в голове", description:"Колода позволяет выявить собственные ограничения, которые мешают на пути цели. А также найти ресурсы для решения задач.", cards: cockroachesDeck}
const seven = {id: "skills", title:"Судьбоносные решения и навыки", description:"Ресурсная колода, сочетающая изображение и короткую надпись, указывающие на мысль/идею-ресурс, которая может помочь человеку разрешить его кризисную ситуацию.", cards: skillsDeck}
const eight = {id: "fairytale", title:"«Сказочные герои»", description:"Данная колода представлена яркими образами персонажей сказок и их чертой характера. В них легко можно увидеть свои определенные роли, характеры, модели поведения и сценарии жизни.", cards: fairytaleDeck}

export const deckList: DeckElement[] = [one, two, three, four, five, six, seven, eight];


function baseClamp(number:number, lower?:number, upper?:number):number {
  if (number === number) {
    if (upper !== undefined) {
      number = number <= upper ? number : upper;
    }
    if (lower !== undefined) {
      number = number >= lower ? number : lower;
    }
  }
  return number;
}
function baseRandom(lower:number, upper:number):number {
  return lower + Math.floor(Math.random() * (upper - lower + 1));
}
export function sampleSize<T>(collection:T[], n:number):T[] {
  let index = -1;
  const result = [...collection],
      length = result.length,
      lastIndex = length - 1;
  n = baseClamp(n, 0, length);
  while (++index < n) {
    const rand = baseRandom(index, lastIndex),
        value = result[rand];

    result[rand] = result[index];
    result[index] = value;
  }
  result.length = n;
  return result;
}


