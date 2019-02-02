import * as actionTypes from '../store/actions.js';

const initialState ={

        totalPoints: 30,

        p1:{
          
          "name": "Water gun",
          "description": "consumes 300ml water",
          "points": "5 ",
          "price": "$15",
          
        }
      
        // p2:{
        //   "name": "Swimming play googles",
        //   "description": "Clear-view polycarbonate lenses",
        //   "points": "10 ",
        //   "price": "$20",
          
        // } 
      
};

const reducer = (state=initialState , action) =>
{
    switch (action.type){
        case actionTypes.SELECTED_HANDLER:
        return {
            ...state,
            p1:{ 
                ...state.p1,
                [action.p1points]: state.p1[action.p1points] +1
            }
        };

        case actionTypes.DELETED_HANDLER:
        return {
            ...state,
            p1:{ 
                ...state.p1,
                [action.p1points]: state.p1[action.p1points] -1
            }
  
        };
        

        default:
            return state;

    }

};

export default reducer;