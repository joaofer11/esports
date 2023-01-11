import { styles } from './styles';
import { GAMES } from '../../data/games';
import { Heading } from '../../components/Heading';
import { GameCard } from '../../components/GameCard';
import { View, Image, FlatList } from 'react-native';
import logoImg from '../../assets/logo-nlw-esports.png';

export const Home = () => (
	<View style={styles.container}>
		<Image
			source={logoImg}
			style={styles.logoImg}
		/>
		
		<Heading 
			title="Encontre seu duo!"
			subtitle="Selecione o game que você deseja jogar..."
		/>
		
		<FlatList 
			data={GAMES}
			keyExtractor={item => item.id}
			renderItem={({ item: game }) => (
				<GameCard data={game} />
			)}
			
			horizontal
			showsHorizontalScrollIndicator={false}
			contentContainerStyle={styles.gamesList}
		/>
	</View>
);