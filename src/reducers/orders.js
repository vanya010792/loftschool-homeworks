import { CREATE_NEW_ORDER } from '../modules/clients';
import { MOVE_ORDER_NEXT, MOVE_ORDER_BACK } from '../actions/moveOrder';
import { ADD_INGREDIENT } from '../actions/ingredients';

// Реализуйте редьюсер
// Типы экшенов, которые вам нужно обрабатывать уже импортированы
// Обратите внимание на `orders.test.js`.
// Он поможет понять, какие значения должен возвращать редьюсер.

export default ( state = [], action ) => {
    console.log( action, state )
    switch ( action.type ) {
        case CREATE_NEW_ORDER:
            const { id, recipe } = action.payload
            return [
                ...state,
                {
                    id: id,
                    ingredients: [],
                    recipe: recipe,
                    position: 'clients'
                }
            ]
        case MOVE_ORDER_NEXT:
            return state.map( item => {
                if( item.id === action.payload ) {
                    switch ( item.position ) {
                        case 'clients':
                            return {
                                ...item,
                                position: 'conveyor_1'
                            }
                        case 'conveyor_1':
                            return {
                                ...item,
                                position: 'conveyor_2'
                            }
                        case 'conveyor_2':
                            return {
                                ...item,
                                position: 'conveyor_3'
                            }
                        case 'conveyor_3':
                            return {
                                ...item,
                                position: 'conveyor_4'
                            }
                        case 'conveyor_4':
                            if( item.ingredients.length === item.recipe.length ) {
                                return {
                                    ...item,
                                    position: 'finish'
                                }
                            } else {
                                return { ...item }
                            }
                        default:
                            return { ...item }
                    }
                } else {
                    return { ...item }
                }
            })
        case MOVE_ORDER_BACK:
            return state.map( item => {
                if( item.id === action.payload ) {
                    switch ( item.position ) {
                        case 'conveyor_2':
                            return {
                                ...item,
                                position: 'conveyor_1'
                            }
                        case 'conveyor_3':
                            return {
                                ...item,
                                position: 'conveyor_2'
                            }
                        case 'conveyor_4':
                            return {
                                ...item,
                                position: 'conveyor_3'
                            }
                        default:
                            return { ...item }
                    }
                } else {
                    return { ...item }
                }
            })
        case ADD_INGREDIENT:
            return state.map( item => {
                if( action.payload.from === item.position ) {
                    const questionIng = item.ingredients.filter(ing => ing === action.payload.ingredient).toString()
                    if( questionIng === '' ) {
                        const addIng = item.recipe.filter(ing => ing === action.payload.ingredient).toString()
                        console.log('questionIng', questionIng)
                        if ( addIng !== '' ) {
                            return {
                                ...item,
                                ingredients: [...item.ingredients, action.payload.ingredient]
                            }
                        } else {
                            return {...item}
                        }
                    } else {
                        return { ...item }
                    }
                } else {
                    return {...item}
                }
            })
        default:
            return state;
    }
};

export const getOrdersFor = (state, position) =>
    state.orders.filter(order => order.position === position)
