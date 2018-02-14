export const ADD_BUCKET = 'ADD_BUCKET'
export const RECEIVE_BUCKETS = 'RECEIVE_BUCKETS'
export const ADD_ITEMS_TO_BUCKET = 'ADD_ITEMS_TO_BUCKET'

export function addBucket (bucket, budget) {
	return {
		type: ADD_BUCKET,
		bucket,
		budget
	}
}

export function receiveBuckets (buckets){
	return {
		type: RECEIVE_BUCKETS,
		buckets
	}
}

export function addItems (item) {
	return {
		type: ADD_ITEMS_TO_BUCKET,
		item
	}
}