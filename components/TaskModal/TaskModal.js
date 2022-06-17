import React, { useEffect, useState } from 'react'
import { Text, View, TouchableWithoutFeedback } from 'react-native'
import { Button } from '@rneui/base'
import Modal from 'react-native-modal'
import { styles } from './styles'
import { TASK } from '../../constants/enums'
import RNPickerSelect from 'react-native-picker-select'
import { Icon } from '@rneui/themed'

const TaskModal = ({
	isVisible,
	handleIsVisible,
	currentTask,
	handleDeleteTask,
	handleChangeStatus,
	handleChangeIcon
}) => {
	return (
		<TouchableWithoutFeedback onPress={() => handleIsVisible()}>
			<Modal
				isVisible={isVisible}
				animationIn='slideInRight'
				animationOut='slideOutRight'
				animationOutTiming={500}
				animationInTiming={500}
				backdropTransitionInTiming={500}
				backdropTransitionOutTiming={500}
				backdropOpacity={0.5}
				backdropColor='black'>
				<TouchableWithoutFeedback>
					<View style={styles.modal}>
						<View style={styles.text}>
							<Text>Changer le statut de la tâche :</Text>
							<Text style={{ fontWeight: 'bold' }}>{currentTask.title}</Text>
						</View>
						<View style={styles.button}>
							<Button
								title='À faire'
								size='lg'
								color='error'
								onPress={() => {
									handleChangeStatus(currentTask.id, TASK.todoStatus)
								}}
							/>
							<Button
								title='En cours'
								size='lg'
								color='warning'
								onPress={() => {
									handleChangeStatus(currentTask.id, TASK.inProgressStatus)
								}}
							/>
							<Button
								title='Terminé'
								color='success'
								size='lg'
								onPress={() => {
									handleChangeStatus(currentTask.id, TASK.doneStatus)
								}}
							/>
						</View>
						<View style={styles.select}>
							<RNPickerSelect
								placeholder={{ label: 'Choisir une icône...', value: null }}
								onValueChange={(value) => handleChangeIcon(value)}
								defaultValue={currentTask.icon}
								items={[
									{ label: 'Livre', value: 'book' },
									{ label: 'Conférence', value: 'customerservice' },
									{ label: 'Carte de crédit', value: 'creditcard' },
									{ label: 'Mail', value: 'mail' },
									{ label: 'Horloge', value: 'clockcircleo' },
									{ label: 'Maison', value: 'home' },
									{ label: 'Hiking', value: 'picture' },
									{ label: 'Poubelle', value: 'delete' }
								]}
								Icon={() => {
									return <Icon name='down' type='antdesign' />
								}}
							/>
						</View>
						<View style={styles.deleteBtn}>
							<Button
								color='grey0'
								size='md'
								title='Supprimer la tâche'
								onPress={() => {
									handleDeleteTask(currentTask.id)
								}}
							/>
							<Button
								color='success'
								size='md'
								title='Appliquer'
								onPress={() => {
									handleIsVisible()
								}}
							/>
						</View>
					</View>
				</TouchableWithoutFeedback>
			</Modal>
		</TouchableWithoutFeedback>
	)
}

export default TaskModal
