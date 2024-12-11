import {FlipFlap} from "@/ui/FlipFlap";
import backfaceSrc from '@/images/flipflap/type1/backface.png'
import neoSrc from '@/images/flipflap/type1/neo.png'
import { redirect } from 'next/navigation'

export default function Home() {
  redirect('/deck');
  return (
    <div className="flex items-center justify-center min-h-screen p-2">
      <main className="flex flex-col gap-4 items-center">
        <FlipFlap backFace={backfaceSrc} frontFace={neoSrc} />
      </main>
    </div>
  );
}
