import types from './types'

const INITAL_STATE = {
    shop: null,
    shop_exists: false,
    shop_is_loading: true,
    shop_error: null,
    shop_status: null,

    prueba_titulo: 'Fernando',
    prueba_nieto: 'Soy Nieto'
}


const shopifystoreReducer = ( state=INITAL_STATE, action )=>{

    switch(action.type){

        case types.SAVE_SHOPIFY_DATA: {
            
            const { type, shop} = action        
            return {
                ...state,
                shop,                
            }
        }        

        case types.SHOP_EXISTS: {

            //data_store

            const { status } = action.data_store

            return {
                ...state,
                shop_exists: true,
                shop_is_loading: false,
                shop_error: null,
                shop_status: status
            }
        }

        case types.SHOP_NOT_EXISTS: {
            return {
                ...state,
                shop_exists: false,
                shop_is_loading: false
            }
        }

        case types.SHOP_IS_LOADING:{
            return {
                ...state,
                shop_is_loading: true
            }
        }

        case types.SHOP_IS_NOT_LOADING:{
            return {
                ...state,
                shop_is_loading: false
            }
        }

        case types.SET_ERROR:{
            const { error } = action
            return {
                ...state,
                shop_error: error
            }
        }

        case types.CLEAR_ERROR:{
            return {
                ...state,
                shop_error: null
            }
        }






        case types.UPDATE_PRUEBA_TITULO: {            
            
            return {
                ...state,
                prueba_titulo: action.prueba_titulo,                
            }
        }        

        case types.UPDATE_PRUEBA_NIETO: {            
            
            return {
                ...state,
                prueba_nieto: action.prueba_nieto,                
            }
        }        

        default: return state;
    }
    

}


export default shopifystoreReducer;