import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native'


export default function SubmitButton({onPress, style}){
	return (
		<TouchableOpacity  onPress={onPress} style>
			<Text style={style}> Submit! </Text>
		</TouchableOpacity>
	)
}