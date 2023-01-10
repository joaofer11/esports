import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

interface ButtonProps {
	title: string;
}

const Button = ({ title }: ButtonProps) => (
	<TouchableOpacity>
		<Text style={styles.title}>
			{title}
		</Text>
	</TouchableOpacity>
);

export const App = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Hello World!</Text>
			<Button title="send 1" />
			
			<StatusBar style="auto" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#333333',
		alignItems: 'center',
		justifyContent: 'center',
	},
	title: {
		color: '#e7e7e7',
		fontSize: 24,
	}
});