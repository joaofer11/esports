import { useState, useEffect } from "react";
import { GameCard } from "./components/GameCard";
import { PublishAd } from "./components/PublishAd";
import { LogoNlwESports } from "./styles/svg-components/LogoNlwESports";

interface Game {
  id: string;
  title: string;
  bannerUrl: string;
  _count: {
    ads: number;
  };
}

export const App = () => {
  const [gamesList, setGamesList] = useState<Game[]>([]);

  const fetchGamesList = async () => {
    const data = await (await fetch("http://localhost:3333/games")).json();
    setGamesList(data);
  };

  useEffect(() => {
    fetchGamesList();
  }, []);

  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
      <LogoNlwESports />

      <h1 className="text-6xl text-white font-black mt-20 mb-16">
        Seu{" "}
        <span className="text-transparent bg-nlw-gradient bg-clip-text">
          duo
        </span>{" "}
        está aqui.
      </h1>

      <div className="grid grid-cols-6 gap-6">
        {gamesList.map((gameItem) => (
          <GameCard
            key={gameItem.id}
            title={gameItem.title}
            bannerUrl={gameItem.bannerUrl}
            adsCount={gameItem._count.ads}
          />
        ))}
      </div>

      <PublishAd />
    </div>
  );
};
