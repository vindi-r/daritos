import {deckList, sampleSize} from "@/app/deck/lib";
import {EmblaChoice} from "@/ui/EmblaChoice";


export default async function Page({
                                     params,
                                   }: {
  params: Promise<{ id: string }>
}) {
  const awaitedParams = (await params);
  const elt = deckList.find(elt => elt.id === awaitedParams.id)
  if(!elt) return null;
  return <div className="flex items-center justify-center min-h-screen p-2 gap-16">
    <main className="flex flex-col gap-4 justify-center items-center flex-wrap w-full">
      <h1 className="font-bold text-2xl text-center">Колода: {elt.title}</h1>
      <EmblaChoice slides={sampleSize(elt.cards, 10)} />
    </main>
  </div>
}

export async function generateStaticParams() {
  return deckList.map((deck) => ({
    id: deck.id,
  }))
}