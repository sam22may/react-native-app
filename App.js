import { View, ScrollView, Text } from 'react-native'
import Header from './components/header'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Button } from '@rneui/base'
import { Icon, Divider } from '@rneui/themed'
import { global } from './styles/global'
import { Fragment, useEffect, useState } from 'react'
import TaskList from './components/TaskList/TaskList'
import { TASK } from './constants/enums'
import ActionButtonAddTask from './components/Button/ButtonAddTask'
import TaskModal from './components/TaskModal/TaskModal'
import lodash from 'lodash'
import AddTaskPrompt from './components/Prompt/AddTaskPrompt'

export default function App (){
	const [ modalIsVisible, setModalIsVisible ] = useState(false)
	const [ promptIsVisible, setPromptIsVisible ] = useState(false)
	const [ renamePromptIsVisible, setRenamePromptIsVisible ] = useState(false)
	const [ currentTask, setCurrentTask ] = useState({})
	const [ list, setList ] = useState(taskArray)
	const [ idGenerator, setIdGenerator ] = useState(8)

	useEffect(
		() => {
			setList(taskArray)
		},
		[ taskArray ]
	)

	const taskArray = [
		{
			id: 1,
			title: 'Exemple of tasks',
			icon: 'minus',
			status: TASK.todoStatus
		},
		{
			id: 2,
			title: 'Go Trips',
			icon: 'book',
			status: TASK.doneStatus
		},
		{
			id: 3,
			title: 'Appointments',
			icon: 'mail',
			status: TASK.inProgressStatus
		}
	]

	const buttonActionItems = [
		{
			title: 'Add Task',
			icon: 'add',
			onPress: () => {
				handleOpenPrompt()
			}
		}
	]

	const displayMenuTask = (task) => {
		setCurrentTask(task)
		handleIsVisible()
	}

	const handleIsVisible = () => {
		setModalIsVisible((prevState) => !prevState)
	}

	const handleDeleteTask = (currentTaskId) => {
		const index = lodash.findIndex(list, { id: currentTaskId })
		const newList = list
		newList.splice(index, 1)
		setList(newList)
		setCurrentTask({})
		handleIsVisible()
	}

	const handleChangeStatus = (currentTaskId, newStatus) => {
		const index = lodash.findIndex(list, { id: currentTaskId })
		const newList = list
		if (newStatus === TASK.doneStatus) {
			newList[index].icon = 'check'
		}
		newList[index].status = newStatus
		setList(newList)
		setCurrentTask({})
		handleIsVisible()
	}

	const handleChangeIcon = (newIcon) => {
		const index = lodash.findIndex(list, { id: currentTask.id })
		const newList = list
		newList[index].icon = newIcon
		setList(newList)
	}

	const handleOpenPrompt = () => {
		setPromptIsVisible((prevState) => !prevState)
	}

	const handleSubmitPrompt = (value) => {
		const newTask = {
			id: idGenerator,
			title: value,
			status: TASK.todoStatus,
			icon: 'minus'
		}
		setList([ ...list, newTask ])
		setIdGenerator(idGenerator + 1)
		handleOpenPrompt()
	}

	const handleOpenRenamePrompt = (task) => {
		setCurrentTask(task)
		setRenamePromptIsVisible((prevState) => !prevState)
	}

	const handleSubmitRenamePrompt = (value) => {
		const index = lodash.findIndex(list, { id: currentTask.id })
		const newList = list
		newList[index].title = value
		setList(newList)
		setCurrentTask({})
		setRenamePromptIsVisible((prevState) => !prevState)
	}

	return (
		<SafeAreaProvider>
			<View style={{ flex: 1 }}>
				<Header title='Liste de tâches!!!' />
				<Divider />
				<ScrollView>
					<TaskList
						style={global.mt10}
						onPressCallback={displayMenuTask}
						onLongPressCallback={handleOpenRenamePrompt}
						list={list}
					/>
					{!!list && list.length === 0 ? (
						<Button style={global.m12} color='grey0' onPress={() => handleOpenPrompt()}>
							Ajouter une tâche
							<Icon style={{ marginLeft: 10 }} name='pluscircleo' color='white' type='antdesign' />
						</Button>
					) : (
						<Fragment />
					)}
				</ScrollView>
				<TaskModal
					isVisible={modalIsVisible}
					handleIsVisible={handleIsVisible}
					currentTask={currentTask}
					handleDeleteTask={handleDeleteTask}
					handleChangeStatus={handleChangeStatus}
					handleChangeIcon={handleChangeIcon}
				/>
				<AddTaskPrompt
					title='Ajouter une nouvelle tâche'
					placeholder='Ex: Faire les courses'
					defaultValue=''
					isVisible={promptIsVisible}
					handleCancelPrompt={handleOpenPrompt}
					handleSubmitPrompt={handleSubmitPrompt}
				/>

				<AddTaskPrompt
					title='Renommer la tâche'
					placeholder={currentTask.title}
					defaultValue={currentTask.title}
					isVisible={renamePromptIsVisible}
					handleCancelPrompt={handleOpenRenamePrompt}
					handleSubmitPrompt={handleSubmitRenamePrompt}
				/>
				<ActionButtonAddTask buttonActionItems={buttonActionItems} />
			</View>
		</SafeAreaProvider>
	)
}
