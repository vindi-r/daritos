"use client"

import {Deck} from "@/ui/Deck";
import {DeckElement, deckList} from "@/app/deck/lib";
import {useCallback} from "react";
import {useRouter} from "next/navigation";

const dummyText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent bibendum, lorem vel tincidunt imperdiet, nibh\n' +
  '    elit laoreet felis, a bibendum nisl tortor non orci. Donec pretium fermentum felis, quis aliquet est rutrum ut.\n' +
  '    Integer quis massa ut lacus viverra pharetra in eu lacus. Aliquam tempus odio adipiscing diam pellentesque'

export default function Page () {
  const router = useRouter()

  const onClick = useCallback((payload: DeckElement) => {
    router.push('/deck/'+payload.id)
  }, [router])

  return <div className="flex items-center justify-center min-h-screen p-4 gap-16">
    <main className="flex flex-row gap-8 row-start-2 justify-center items-center flex-wrap w-full">
      {deckList.map((elt) => <Deck key={elt.id} title={`Title for ${elt.id}`} text={dummyText} onClick={() => onClick(elt)}/>
      )}
    </main>
  </div>
}