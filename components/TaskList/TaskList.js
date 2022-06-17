import React, { Fragment } from 'react'
//import { ListItem, List } from "react-native-elements";
import { ListItem } from '@rneui/base'
import { View } from 'react-native'
import { Icon, Badge } from '@rneui/themed'
import { TASK } from '../../constants/enums'

const TaskList = (props) => {
	return (
		<Fragment>
			{props.list.map((item) => (
				<ListItem
					key={item.id}
					bottomDivider
					onPress={() => {
						props.onPressCallback(item)
					}}
					onLongPress={() => {
						props.onLongPressCallback(item)
					}}>
					<Icon name={item.icon} type='antdesign' />
					<ListItem.Content>
						<ListItem.Title>{item.title}</ListItem.Title>
					</ListItem.Content>
					<Badge
						value={item.status}
						status={
							item.status === TASK.todoStatus ? (
								'error'
							) : item.status === TASK.inProgressStatus ? (
								'warning'
							) : (
								'success'
							)
						}
					/>
					<ListItem.Chevron />
				</ListItem>
			))}
		</Fragment>
	)
}

export default TaskList
