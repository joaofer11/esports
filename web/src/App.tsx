import { useState, useEffect } from "react";
import { GameController } from "phosphor-react";
import { Input } from "./components/Form/Input";
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
            <Dialog.Title className="text-3xl font-black mb-8">
              Publique um anúncio
            </Dialog.Title>

            <form className=" flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <label htmlFor="game" className="font-semibold">
                  Qual o game?
                </label>
                <Input
                  id="game"
                  placeholder="Selecione o game que deseja jogar"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="name/nickname">Seu nome (ou nickname):</label>
                <Input
                  id="name/nickname"
                  placeholder="Como te chamam dentro do game?"
                />
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="yearsPlaying">Joga há quantos anos?</label>
                  <Input
                    id="yearsPlaying"
                    type="number"
                    placeholder="tudo bem ser ZERO"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="discord">Qual seu discord?</label>
                  <Input id="discord" placeholder="Usuário#0000" />
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="weekDays">Quando costuma jogar?</label>

                  <div className="grid grid-cols-4 gap-2">
                    <button
                      title="Domingo"
                      className="w-8 h-8 rounded bg-zinc-900"
                    >
                      D
                    </button>
                    <button
                      title="Segunda"
                      className="w-8 h-8 rounded bg-zinc-900"
                    >
                      S
                    </button>
                    <button
                      title="Terça"
                      className="w-8 h-8 rounded bg-zinc-900"
                    >
                      T
                    </button>
                    <button
                      title="Quarta"
                      className="w-8 h-8 rounded bg-zinc-900"
                    >
                      Q
                    </button>
                    <button
                      title="Quinta"
                      className="w-8 h-8 rounded bg-zinc-900"
                    >
                      Q
                    </button>
                    <button
                      title="Sexta"
                      className="w-8 h-8 rounded bg-zinc-900"
                    >
                      S
                    </button>
                    <button
                      title="Sábado"
                      className="w-8 h-8 rounded bg-zinc-900"
                    >
                      S
                    </button>
                  </div>
                </div>
                <div className="flex flex-col gap-2 flex-1">
                  <label htmlFor="hourStart">Qual horário do dia?</label>
                  <div className="grid grid-cols-2 gap-2">
                    <Input id="hourStart" type="time" placeholder="De:" />
                    <Input id="hourEnd" type="time" placeholder="Até:" />
                  </div>
                </div>
              </div>

              <div className="flex gap-2 mt-2 mb-4 text-sm">
                <input id="voiceChannel" type="checkbox" />
                <label htmlFor="voiceChannel">
                  Costumo me conectar ao chat de voz
                </label>
              </div>

              <footer className="flex justify-end gap-4">
                <Dialog.Close
                  type="button"
                  className="bg-zinc-500 hover:bg-zinc-600 px-5 h-12 rounded-md font-semibold"
                >
                  Cancelar
                </Dialog.Close>
                <button
                  type="submit"
                  className="flex justify-center items-center gap-3 bg-violet-500 hover:bg-violet-600 px-5 h-12 rounded-md font-semibold"
                >
                  <GameController size={24} />
                  Encontrar duo
                </button>
              </footer>
            </form>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
};
