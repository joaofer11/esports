import { useState, useEffect } from "react";
import { GameController } from 'phosphor-react'
import * as Dialog from "@radix-ui/react-dialog";
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

      <Dialog.Root>
        <PublishAd />

        <Dialog.Portal>
          <Dialog.Overlay className="bg-black/60 fixed top-0 right-0 bottom-0 left-0" />

          <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#2A2634] w-[480px] px-10 py-8 text-white rounded-lg shadow-lg shadow-black/10">
            <Dialog.Title className="text-3xl font-black">
              Publique um anúncio
            </Dialog.Title>

            <Dialog.Content>
              <form>
                <div>
                  <label htmlFor="game">Qual o game?</label>
                  <input
                    id="game"
                    placeholder="Selecione o game que deseja jogar"
                  />
                </div>
                <div>
                  <label htmlFor="name/nickname">Seu nome (ou nickname):</label>
                  <input
                    id="name/nickname"
                    placeholder="Como te chamam dentro do game?"
                  />
                </div>

                <div>
                  <div>
                    <label htmlFor="yearsPlaying">Joga há quantos anos?</label>
                    <input
                      id="yearsPlaying"
                      type="number"
                      placeholder="tudo bem ser ZERO"
                    />
                  </div>
                  <div>
                    <label htmlFor="discord">Qual seu discord?</label>
                    <input id="discord" placeholder="Usuário#0000" />
                  </div>
                </div>

                <div>
                  <div>
                    <label htmlFor="weekDays">Quando costuma jogar?</label>
                  </div>
                  <div>
                    <label htmlFor="hourStart">Qual horário do dia?</label>
                    <div>
                      <input id="hourStart" type="time" placeholder="De:" />
                      <input id="hourEnd" type="time" placeholder="Até:" />
                    </div>
                  </div>
                </div>

                <div>
                  <input id="voiceChannel" type="checkbox" />
                  <label htmlFor="voiceChannel">
                    Costumo me conectar ao chat de voz
                  </label>
                </div>

                <footer>
                  <button type="button">Cancelar</button>
                  <button type="submit">
                    <GameController />
                    Encontrar duo
                  </button>
                </footer>
              </form>
            </Dialog.Content>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
};
