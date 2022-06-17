import React from 'react'
import { Icon } from '@rneui/themed'
import ActionButton from 'react-native-action-button'
import { APP_COLORS } from '../../styles/color'

const ActionButtonAddTask = ({ buttonActionItems }) => {
	return (
		<ActionButton>
			{buttonActionItems.map((item, i) => (
				<ActionButton.Item key={i} buttonColor={APP_COLORS.primary} title={item.title} onPress={item.onPress}>
					<Icon name={item.icon} />
				</ActionButton.Item>
			))}
		</ActionButton>
	)
}

export default ActionButtonAddTask
