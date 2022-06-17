import React from 'react'
import Prompt from 'rn-prompt'

const AddTaskPrompt = ({ isVisible, handleCancelPrompt, handleSubmitPrompt, title, placeholder, defaultValue }) => {
	return (
		<Prompt
			title={title}
			placeholder={placeholder}
			defaultValue={defaultValue}
			visible={isVisible}
			onCancel={() => handleCancelPrompt()}
			onSubmit={(value) => handleSubmitPrompt(value)}
			submitText='Accepter'
		/>
	)
}
export default AddTaskPrompt
