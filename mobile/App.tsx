import { StatusBar } from 'react-native'
import { Background } from './src/components/Background'

const App = () => {
	return (
		<Background>
			<StatusBar 
				barStyle="light-content"
				backgroundColor="transparent"
				translucent
			/>
		</Background>
	);
}

export default App