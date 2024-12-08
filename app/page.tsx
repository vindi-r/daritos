import {FlipFlap} from "@/ui/FlipFlap";
import backfaceSrc from '@/images/flipflap/type1/backface.png'
import neoSrc from '@/images/flipflap/type1/neo.png'


export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen p-4 gap-16">
      <main className="flex flex-col gap-8 row-start-2 items-center">
        <FlipFlap backFace={backfaceSrc} frontFace={neoSrc} />
      </main>
    </div>
  );
}
