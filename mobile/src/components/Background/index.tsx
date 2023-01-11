import { styles } from './styles'
import { ReactNode } from 'react'
import { ImageBackground } from 'react-native'
import backgroundImg from '../../assets/background-galaxy.png'

interface Props {
	children: ReactNode;
}

export const Background = ({ children }: Props) => (
	<ImageBackground
		source={backgroundImg}
		defaultSource={backgroundImg}
		style={styles.container}
	>
		{children}
	</ImageBackground>
)