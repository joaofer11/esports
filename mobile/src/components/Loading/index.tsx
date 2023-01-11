import { styles } from './styles'
import { THEME } from '../../theme'
import { View, ActivityIndicator } from 'react-native'

export const Loading = () => (
	<View style={styles.container}>
		<ActivityIndicator color={THEME.COLORS.PRIMARY} />
	</View>
)