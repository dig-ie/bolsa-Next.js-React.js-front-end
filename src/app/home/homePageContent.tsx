'use client";';
import BlurGradientCard from "@/components/BlurGradientCard";
import Image from "next/image";
import Header from "@/components/Header/Header";
export default function HomePageContent({
  title = "Invista sem medo. Aprenda simulando de verdade.",
  description = "Simule operações na bolsa com dados reais e sem riscos.",
  buttonTitle = "Comece agora gratuitamente",
}) {
  return (
    <>
      <Header />
      <main className="flex flex-col gap-12 pt-[2.5vh] items-center   overflow-y-auto pb-[5vh] bg-lightBackground">
        <div className="ml-12">
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
            className="rounded-xl object-contain self-center"
            priority
          />
        </BlurGradientCard>
      </main>
    </>
  );
}

// TODO COMPONETIZAR O BUTTON
