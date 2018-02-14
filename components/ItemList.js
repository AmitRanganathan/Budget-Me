import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity, ScrollView, FlatList} from 'react-native'
import { red, white, green, blue, purple, orange } from '../utils/colors'
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons'
import AddItem from './AddItem'
import { connect } from 'react-redux'

class ItemList extends React.Component{

	// componentDidMount(){
	// 	console.log("hi")
	// }
	onPressButton(bucket, items){
		this.props.navigation.navigate('AddItem', {entryId: bucket, items: items})
	}



	render(){	
		const bucket = this.props.navigation.state.params.entryId
		const budget = this.props.navigation.state.params.budget
		const items = this.props.navigation.state.params.items
		const itemName = items.itemName
		var totalCost = 0
		

		return(

			//{console.log(this.state)}
			<ScrollView style={styles.container}>
				{/* + button which will redirect user to the AddItem component*/}
				<Text style={styles.titleName}> {bucket} </Text>
				<TouchableOpacity style={styles.addButton} onPress={this.onPressButton.bind(this, bucket, items)}>
					<MaterialCommunityIcons  name='plus-circle' size={50} color={blue} />
				</TouchableOpacity>
				
				{/* Outputs all the items to the screen */}
				<View >
				
					{items.map((item) => {
						return(

							<View style={styles.frame}>
								<View style = {{flexDirection: 'row',  justifyContent: 'space-between'}}>
									<Text style={styles.itemName}> { item.itemName }</Text>
									<Text style={styles.itemPrice}> ${item.price}</Text>

								</View>

							</View>
							

						)
						
					})}
				

					
				</View>



			{/* This outputs the total price of the items*/}
				<View style={styles.frame}>
					{items.map((item) => {
						//console.log(parseFloat(item.price))
						{totalCost+= parseFloat(item.price)}
					})}

					<Text style={{textAlign: 'right'}}> Total: ${totalCost.toFixed(2)}  </Text>
				</View>
			</ScrollView>
		

		)
	}
}


const styles = StyleSheet.create({
	container: {
		flex: 1,
		//justifyContent: 'center',
		//alignItems: 'center'
	},
	titleName: {
		padding: 10,
		textAlign: 'center',
		//justifyContent: 'stretch',
		fontSize: 35,
		backgroundColor: purple,
		color: white
	},
	addButton: {
		padding: 5,
		justifyContent: 'center',
		alignItems: 'center'
	},
	itemName: {
		padding: 10,
		justifyContent: 'flex-start'
	},
	itemPrice: {
		padding: 10,
		justifyContent: 'flex-end'
	},
	frame: {
		justifyContent: 'center',
		padding: 10,
		margin: 5,
		backgroundColor: orange,
		alignSelf: 'stretch',
		borderRadius: 10,
		shadowColor: 'rgba(0,0,0,0.34)',
		shadowOffset: {
			width: 0,
			height: 3
		},
		shadowRadius: 5,
		shadowOpacity: 3
		
	}
})

export default connect()(ItemList)











