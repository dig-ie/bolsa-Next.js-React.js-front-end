import BlurGradientCard from "@/components/BlurGradientCard";
import Image from "next/image";

export default function HomePageContent({
  title = "Invista sem medo. Aprenda simulando de verdade.",
  description = "Simule operações na bolsa com dados reais e sem riscos.",
  buttonTitle = "Comece agora gratuitamente",
}) {
  return (
    <main className="flex flex-col gap-[48px] pt-[2.5vh] items-center   overflow-y-auto pb-[5vh] bg-backgroundClaro">
      <div className="ml-[3rem]">
        <h1 className="text-4xl font-bold">{title}</h1>
        <h2 className="text-xl font-bold">{description}</h2>
      </div>


      <button className="border border-black text-xl font-bold rounded-xl w-[320px] h-[58px]">
        {buttonTitle}
      </button>
      <BlurGradientCard>
        <Image
          src="/images/graph_landing_page.jpg"
          alt="graph"
          fill
          className="rounded-[12px] object-contain self-center"
          priority
        />
      </BlurGradientCard>
    </main>
  );
}

// TODO COMPONETIZAR O BUTTON
