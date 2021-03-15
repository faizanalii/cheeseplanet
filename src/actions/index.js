import {ADD_ITEM,DEL_ITEM} from '../constants';
export const additem=(item)=>{
	const action={
		type:ADD_ITEM,
		item
	}
	console.log(" Add Action is",action);
	return action;
}
export const delitem=(id)=>{
	const action={
		type:DEL_ITEM,
		id
	}
	console.log("Del Action is",action);
	return action;
}