import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Button, ScrollView } from 'react-native'
import { getData } from '../utils/api'
import { connect } from 'react-redux'
import { getBuckets } from '../utils/api'
import { receiveBuckets } from '../actions'
import { red, white, green, blue, purple, orange } from '../utils/colors'
import ItemList from './ItemList'

class HomeView extends React.Component{

	componentDidMount(){

		//console.log("hello from did mount function")
		getBuckets()
		.then(buckets => this.props.receiveAllBuckets(buckets))
		//var title;
	}

	onPressButton(title, bud, items){
		//console.log(title)
		this.props.navigation.navigate('ItemList', {entryId: title, budget: bud, items: items})
	}

	render(){
		const { buckets }= this.props
		//console.log(buckets)

		
		return(
			<ScrollView style={styles.container} >
				{Object.keys(buckets).map((bucket) => {

					const {title, budget, items } = buckets[bucket]
					//console.log(title)
					return (
						
						<TouchableOpacity onPress={this.onPressButton.bind(this,title, budget,items)}>
							
							<View key={bucket} style={styles.bucketStyles}>
							
								<View >
									<Text style={styles.titleStyles}> {title}</Text>
								</View>
								<View>
									<Text style={styles.budgetStyles}> ${budget}</Text>
								</View>					
							</View>
						</TouchableOpacity>
					)
				})}
			</ScrollView>
		)
	}

}


const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'stretch',
		padding: 5
	},
	bucketStyles: {
		justifyContent: 'center',
		alignItems: 'center',
		padding: 10,
		margin: 5,
		backgroundColor: green,
		alignSelf: 'stretch',
		borderRadius: 10,
		shadowColor: 'rgba(0,0,0,0.34)',
		shadowOffset: {
			width: 0,
			height: 3
		},
		shadowRadius: 5,
		shadowOpacity: 3
	},
	titleStyles: {
		padding: 0,
		justifyContent: 'center',
		alignItems: 'center',
		alignSelf: 'flex-start',
		textAlign: 'center'	
	},
	budgetStyles: {
		justifyContent: 'center',
		alignItems: 'center',
		alignSelf: 'flex-start',
		textAlign: 'center'
	},
	button: {
		padding:10,
		borderRadius:7,
		height: 45,
		margin: 5,
		width: 170
	}
})

function mapDispatchToProps( dispatch ){
	return{
		receiveAllBuckets: (buckets) => dispatch(receiveBuckets(buckets))
	}
}

function mapStateToProps(buckets){
	return {
		buckets
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeView)