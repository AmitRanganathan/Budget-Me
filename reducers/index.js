import {ADD_BUCKET, RECEIVE_BUCKETS, ADD_ITEMS_TO_BUCKET} from '../actions/index'

function bucket( state = {}, action ){
	switch(action.type){
		case ADD_BUCKET:
			const newBucket = {
				[action.bucket]: {
					title: action.bucket,
					budget: action.budget,
					items:[]
				}
			}
			return {
				...state,
				...newBucket
			}
		case RECEIVE_BUCKETS:
			return{
				...state,
				...action.buckets
			}
		case ADD_ITEMS_TO_BUCKET:
			const { item, name, bucket, price } = action.item
			return{
				...state,
				[bucket]: {
					...state[bucket],
					questions: [...state[bucket].items, {name,price}]
				}
			}
		default:
			return state
	}
}
export default bucket