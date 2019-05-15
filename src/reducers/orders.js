import { CREATE_NEW_ORDER } from '../modules/clients';
import { MOVE_ORDER_NEXT, MOVE_ORDER_BACK } from '../actions/moveOrder';
import { ADD_INGREDIENT } from '../actions/ingredients';

// Реализуйте редьюсер
// Типы экшенов, которые вам нужно обрабатывать уже импортированы
// Обратите внимание на `orders.test.js`.
// Он поможет понять, какие значения должен возвращать редьюсер.

export default (state = [], action) => {
  console.log( action, state )
  switch (action.type) {
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
      const { position } = state[0]
      console.log( 'move-order', position )
        switch ( position ) {
            case 'clients':
                return {
                    ...state,
                    position: 'conveyor_1'
                }
            case 'conveyor_1':
                return {
                    ...state,
                    position: 'conveyor_2'
                }
            case 'conveyor_2':
                return {
                    ...state,
                    position: 'conveyor_3'
                }
            case 'conveyor_3':
                return {
                    ...state,
                    position: 'conveyor_4'
                }
            default:
                return 'clients'
        }
    case ADD_INGREDIENT:
      return[
        ...state
      ]
    default:
      return state;
  }
};

export const getOrdersFor = (state, position) =>
    state.orders.filter(order => order.position === position)
