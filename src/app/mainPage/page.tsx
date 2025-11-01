import React from "react";
import Header from "../../components/Header/Header";

//FIXME: Removido do componente page.tsx por motivos de build

// type MainPageProps = {
//   title?: string;
//   description?: string;
//   buttonTitle?: string;
// };

const MainPage: React.FC = ({ }) => {
  return (
    <main>
      <Header />

      <div className="flex flex-col items-center gap-10 p-10">
        <div>
          <h1 className="text-4xl font-bold">
            Invista sem medo. Aprenda simulando de verdade.
          </h1>
        </div>

        <div>
          <h2 className="text-xl font-bold">
            Simule operações na bolsa com dados reais e sem riscos.
          </h2>
        </div>

        <button className="border border-black text-xl font-bold rounded-xl w-[320px] h-[58px]">
          Comece agora gratuitamente
        </button>
      </div>
    </main>
  );
};

export default MainPage;

//Todo converte todos os componentes para componentes funcionais
