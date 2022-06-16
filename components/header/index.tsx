import React, { Fragment } from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { styles } from './style'

interface IProps {
	title: string
}

const Header = ({ title }: IProps) => {
	return (
		<View>
			<View style={styles.subHeader} />
			<View style={styles.header}>
				<Text style={styles.text}>{title}</Text>
			</View>
		</View>
	)
}

export default Header
