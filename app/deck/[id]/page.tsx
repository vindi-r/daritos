import {deckList} from "@/app/deck/lib";
import {EmblaChoice} from "@/ui/EmblaChoice";


export default async function Page({
                                     params,
                                   }: {
  params: Promise<{ id: string }>
}) {
  const awaitedParams = (await params);
  return <div className="flex items-center justify-center min-h-screen p-4 gap-16">
    <main className="flex flex-col gap-8 row-start-2 justify-center items-center flex-wrap w-full">
      <h1 className="font-bold text-2xl">Колода: {awaitedParams.id}</h1>
      <EmblaChoice slides={[]} />
    </main>
  </div>
}

export async function generateStaticParams() {
  return deckList.map((deck) => ({
    id: deck.id,
  }))
}