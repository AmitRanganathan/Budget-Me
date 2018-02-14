import React from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'
import ActionButton from './ActionButton'
import { red, white, green, blue, purple } from '../utils/colors'
import { saveBucketTitle } from '../utils/api'
import { addBucket } from '../actions'
import ItemList from './ItemList'
import { connect } from 'react-redux'
import { AsyncStorage } from 'react-native'
import HomeView from './HomeView'

class AddBucket extends React.Component{

	state = {
		name: ' ',
		budget: ' '
	}

	submitBucket = () => {
		// console.log(this.state.name)
		// console.log(this.state.budget)
		saveBucketTitle(this.state.name, this.state.budget)
		this.props.dispatch(addBucket(this.state.name, this.state.budget))
		this.props.navigation.navigate('HomeView', {entryId: this.state.name})
		this.setState({name:'', budget:''})
	}




	render(){
		return(
			//This is the main View that contains everything
			<View style={styles.container} >
				
				<View style={{flexDirection: 'row'}}>	
					<Text style={styles.text}> Name: </Text>
					<TextInput style={styles.textInput} onChangeText={(text) => this.setState({name:text})}
						value ={this.state.name}> 
					</TextInput>
					
					
				</View>

				<View style={{flexDirection: 'row'}}>
					<Text style={styles.text}> Budget/Month: </Text>
					<TextInput style={styles.textInput} placeholder='$0.00'keyboardType='numeric' onChangeText={(text) => this.setState({budget:text})}
						value ={this.state.budget}> 
					</TextInput>
				</View>


				<View>
					<ActionButton styles={styles} text={'Add Items'} color = {purple}
									onPress={this.submitBucket}/>
				 </View>


			</View>

			

		)
	}

}


const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	text: {
		flex: 1,
		fontSize: 20,
		justifyContent: 'center',
		alignItems: 'center',
		textAlign: 'center',
		padding: 10,
		marginRight: -50,
		marginLeft: -40
	},
	textInput: {
		flex: 1,
		fontSize: 20,
		width: 50,
		height: 44,
		//padding: 0,
		borderWidth: 5,
		borderColor: '#757575',
		//margin: 50,
		marginLeft: 50,
		marginBottom: 20,
		borderRadius: 8,
		marginRight: 5,
		//alignItems: 'center',
		//justifyContent: 'center'
	},
	iosBtn: {
		padding:10,
		borderRadius:7,
		height: 45,
		margin: 5,
		width: 170
	},
	submitBtnText: {
		color:white,
		fontSize: 22,
		textAlign: 'center'
	}
	

})


export default connect()(AddBucket)





