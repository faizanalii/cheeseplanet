import {ADD_ITEM,DEL_ITEM} from '../constants';
const additem=(action)=>{
	return{
		item:action.item,
		id:Math.random()
	}
}
const removeitem=(state=[],id)=>{
	const updated_item=state.filter(item=>item.id!==id);
	return updated_item;
}
export const itemscart=(state=[],action)=>{
	let itemscart=null;
	switch(action.type){
		case ADD_ITEM:
			itemscart=[...state,additem(action)];
			console.log("Items Cart",itemscart);
			return itemscart;
		case DEL_ITEM:
			itemscart=removeitem(state,action.id);
			console.log("Del from Item Cart",itemscart);
			return itemscart;
		default:
			return state;
	}
}