import React from 'react'
//import { ListItem, List } from "react-native-elements";
import { ListItem } from '@rneui/base'
import { View } from 'react-native'
import { Icon } from '@rneui/themed'

const TaskList = () => {
	const list = [
		{
			title: 'Appointments',
			icon: 'av-timer'
		},
		{
			title: 'Trips',
			icon: 'flight-takeoff'
		}
	]

	return (
		<View>
			{list.map((item, i) => (
				<ListItem key={i} bottomDivider>
					<Icon name={item.icon} />
					<ListItem.Content>
						<ListItem.Title>{item.title}</ListItem.Title>
					</ListItem.Content>
					<ListItem.Chevron />
				</ListItem>
			))}
		</View>
	)
}

export default TaskList
