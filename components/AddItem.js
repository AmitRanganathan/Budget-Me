import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native'
import { NavigationActions } from 'react-navigation'
import ActionButton from './ActionButton'
import SubmitButton from './SubmitButton'
import { red, white, green, blue, purple } from '../utils/colors'
import { addItemToBucket } from '../utils/api'
import { addItems } from '../actions'
import { ItemList } from '../actions'
import { connect } from 'react-redux'
//import { Parent } from 'path to parent'; 

class AddItem extends React.Component{

	state= {
		itemName: '',
		price: '',
		//necessity: ''
	}

	/* SUBMITTING ITEMS
	1) An action will be dispatched that will add the item name, price, and if it was 
	a neceesary item(either true or false with the drop down menu).
	2) Item will be added to database then the state will be set back to empty strings

	*/
	submitItem = (bucket) => {
		const {itemName, price} = this.state
		//console.log(bucket)
		if(itemName && price){
			this.props.dispatch(addItems ({itemName, price, bucket}))
			addItemToBucket(bucket,{itemName, price})
			this.setState({itemName: '', price: ''})
			this.props.navigation.dispatch(NavigationActions.back({key: null}))
		}
	}

	addAnotherItem = (bucket) => {
		const {itemName, price} = this.state
		if(itemName && price){
			this.props.dispatch(addItems ({itemName, price, bucket}))
			addItemToBucket(bucket,{itemName, price})
			this.setState({itemName: '', price: ''})
		}
	}


	render() {
		const bucketName = this.props.navigation.state.params.entryId
		//console.log(bucketName)
		return(
			<View style = {styles.container}>

				<View style = {{flexDirection: 'row'}}>
					<Text style={styles.text}> Item Name:  </Text>
					<TextInput style={styles.textInput} onChangeText={(text) => this.setState({itemName:text})}
						value ={this.state.itemName}> 
					</TextInput>
				</View>

				<View style = {{flexDirection: 'row'}}>
					<Text style={styles.text}> Price:  </Text>
					<TextInput style={styles.textInput} placeholder='$0.00'keyboardType='numeric' onChangeText={(text) => this.setState({price:text})}
						value ={this.state.price}> 
					</TextInput>
				</View>

				<View style= {{flexDirection: 'row'}} >
					<ActionButton styles={styles} text={'Add Another'} color = {green} onPress={() => this.addAnotherItem(bucketName)}/>
					
					<ActionButton styles = {styles} text ={'Done'} color = {red} onPress={() => this.submitItem(bucketName)}/>
				 </View>

			</View>



		)

	}


}



const styles = StyleSheet.create({
	container: {
		flex: 1,
		//justifyContent: 'center',
		padding: 20,
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
		padding: 2,
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
		width: 170,
		
	},
	submitBtn: {
		borderWidth: 0.5,
		wodth: 170,
		height: 45,
		borderColor: '#d6d7da',
		padding: 10,
		backgroundColor: green,
		borderRadius: 7,
		overflow: 'hidden'
	},
	submitBtnText: {
		color:white,
		fontSize: 20,
		textAlign: 'center'
	}
	


})

export default connect()(AddItem)



