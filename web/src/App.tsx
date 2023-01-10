import { MagnifyingGlassPlus } from 'phosphor-react'
import { LogoNlwESports } from './styles/svg-components/LogoNlwESports'

export const App = () => {
	return (
		<div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
			<LogoNlwESports />
			
			<h1 className="text-6xl text-white font-black mt-20 mb-16">
				Seu <span className="text-transparent bg-nlw-gradient bg-clip-text">duo</span> está aqui.
			</h1>
			
			<div className="grid grid-cols-6 gap-6">
				<a href="" className="relative rounded-lg overflow-hidden">
					<img src="/images/game-1.png" alt="" />
					
					<div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0">
						<strong className="font-bold text-white block">League of Legends</strong>
						<span className="text-zinc-300 text-sm block">4 anúncios</span>
					</div>
				</a>
				<a href="" className="relative rounded-lg overflow-hidden">
					<img src="/images/game-2.png" alt="" />
					
					<div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0">
						<strong className="font-bold text-white block">League of Legends</strong>
						<span className="text-zinc-300 text-sm block">4 anúncios</span>
					</div>
				</a>
				<a href="" className="relative rounded-lg overflow-hidden">
					<img src="/images/game-3.png" alt="" />
					
					<div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0">
						<strong className="font-bold text-white block">League of Legends</strong>
						<span className="text-zinc-300 text-sm block">4 anúncios</span>
					</div>
				</a>
				<a href="" className="relative rounded-lg overflow-hidden">
					<img src="/images/game-4.png" alt="" />
					
					<div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0">
						<strong className="font-bold text-white block">League of Legends</strong>
						<span className="text-zinc-300 text-sm block">4 anúncios</span>
					</div>
				</a>
				<a href="" className="relative rounded-lg overflow-hidden">
					<img src="/images/game-5.png" alt="" />
					
					<div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0">
						<strong className="font-bold text-white block">League of Legends</strong>
						<span className="text-zinc-300 text-sm block">4 anúncios</span>
					</div>
				</a>
				<a href="" className="relative rounded-lg overflow-hidden">
					<img src="/images/game-6.png" alt="" />
					
					<div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0">
						<strong className="font-bold text-white block">League of Legends</strong>
						<span className="text-zinc-300 text-sm block">4 anúncios</span>
					</div>
				</a>
			</div>
			
			<div className="pt-1 bg-nlw-gradient self-stretch rounded-lg mt-8 overflow-hidden">
				<div className="bg-[#2A2634] px-8 py-6 flex justify-between items-center">
					<div className="flex flex-col">
						<strong className="text-2xl text-white font-black">Não encontrou seu duo?</strong>
						<span className="text-zinc-400">Publique um anúncio para encontrar novos players!</span>
					</div>
					
					<button className="py-3 px-4 bg-violet-500 transition-color duration-300 ease hover:bg-violet-600 text-white rounded flex items-center gap-3">
						<MagnifyingGlassPlus size={24} />
						Publicar anúncio
					</button>
				</div>
			</div>
		</div>
	)
}