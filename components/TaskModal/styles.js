import { StyleSheet } from 'react-native'
import { APP_COLORS } from '../../styles/color'

export const styles = StyleSheet.create({
	modal: {
		padding: 20,
		borderRadius: 10,
		backgroundColor: 'white',
		shadowColor: APP_COLORS.dark,
		shadowOpacity: 0.3,
		shadowOffset: { width: 0, height: 6 },
		shadowRadius: 6,
		height: 300,
		justifyContent: 'space-between'
	},
	button: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingBottom: 15
	},
	deleteBtn: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginTop: 20
	},
	text: {
		alignItems: 'center',
		paddingBottom: 15
	},
	select: {
		backgroundColor: APP_COLORS.lightGrey,
		borderRadius: 5,
		color: APP_COLORS.light,
		fontSize: 20,
		padding: 20
	}
})
