interface Props {
  title: string;
  adsCount: number;
  bannerUrl: string;
}

export const GameCard = ({ title, adsCount, bannerUrl }: Props) => (
  <a href="" className="relative rounded-lg overflow-hidden">
    <img src={bannerUrl} alt="" />

    <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0">
      <strong className="font-bold text-white block">{title}</strong>
      <span className="text-zinc-300 text-sm block">{adsCount} anúncios</span>
    </div>
  </a>
);
