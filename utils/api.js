import { AsyncStorage } from 'react-native'

const  CATEGORIES_STORAGE_KEY = 'categories: buckets'

const initialData = {
	// Gas: {
	// 	title: 'Gas',
	// 	budget: '50.00',
	// 	items: [
	// 		{
	// 			name: 'Valero',
	// 	 		price: '30.00'
	// 		}
	// 	]
	// },
	// Groceries: {
	// 	title: 'Groceries',
	// 	budget: '100.00',
	// 	items: [
	// 		{
	// 			name: 'Safeway',
	// 	 		price: '50.00'
	// 		}
	// 	]
	// },
	// Electricty: {
	// 	title: 'Electricity',
	// 	budget: '150.00',
	// 	items: [
	// 		{
	// 			name: 'PG&D',
	// 			price: '110.00'
	// 		}
	// 	]
	// }	

}

export const getData = () => {
	return initialData

}


//Function to save our data
export function saveBucketTitle(title, budget) {
	return AsyncStorage.mergeItem(CATEGORIES_STORAGE_KEY, JSON.stringify({
		[title]: {
			title: title,
			budget: budget,
			items: [
				
			]
		}
	}))
}


export function getBuckets (bucket) {
	//console.log("hello from getbuckets function")
	//AsyncStorage.clear()
	return AsyncStorage.getItem(CATEGORIES_STORAGE_KEY)
	.then(results => {
		if(results === null){
			AsyncStorage.setItem(CATEGORIES_STORAGE_KEY, JSON.stringify(initialData))
			return initialData
		}else{
			return JSON.parse(results)
		}
	})
}

export function addItemToBucket(bucket, item){

	return AsyncStorage.getItem(CATEGORIES_STORAGE_KEY)
	.then(results => JSON.parse(results))
	.then(results => {
		results[bucket].items.push(item)
		AsyncStorage.setItem(CATEGORIES_STORAGE_KEY, JSON.stringify(results))
		console.log(results)
		return results
	})

}










