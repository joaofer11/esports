import {
	Text,
	ImageBackground, 
	TouchableOpacity,
	ImageSourcePropType,
	TouchableOpacityProps,
} from 'react-native';
import { styles } from './styles';
import { THEME } from '../../theme';
import { LinearGradient } from 'expo-linear-gradient';

export interface GameCardProps {
	id: string;
	ads: string;
	name: string;
	cover: ImageSourcePropType;
};

interface Props extends TouchableOpacityProps {
	data: GameCardProps;
};

export const GameCard = ({ data, ...rest }: Props) => (
	<TouchableOpacity style={styles.container} {...rest}>
		<ImageBackground 
			source={data.cover}
			style={styles.cover}
		>
		
			<LinearGradient
				style={styles.footer}
				colors={THEME.COLORS.FOOTER}
			>
				<Text style={styles.name}>
					{data.name}
				</Text>
				
				<Text style={styles.ads}>
					{data.ads} anúncios
				</Text>
			</LinearGradient>
		</ImageBackground>
	</TouchableOpacity>
);