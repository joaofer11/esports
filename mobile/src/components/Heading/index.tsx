import { styles } from './styles'
import { View, Text, ViewProps } from 'react-native'

interface Props extends ViewProps {
	title: string;
	subtitle: string;
}

export const Heading = ({ title, subtitle, ...rest }: Props) => (
	<View style={styles.container} {...rest}>
		<Text style={styles.title}>
			{title}
		</Text>
		
		<Text style={styles.subtitle}>
			{subtitle}
		</Text>
	</View>
)