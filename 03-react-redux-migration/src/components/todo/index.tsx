import React from "react";
import { connect } from "react-redux";
import {AppState} from '../../store'
import { ThunkDispatch } from "redux-thunk";
import {fetchRequest} from '../../store/todo/action'
import { AnyAction } from "redux";
import {TodoProps} from '../../store/todo/types'

interface propsFromState {
    todos: TodoProps;
}
  
type AllProps = propsFromState;

const ToDo: React.FC<AllProps> = ({ todos }) => {
    return (
        <React.Fragment>
            {/* {todos.map(item => {
                return (<p>{item.text}</p>)
            })} */}
        </React.Fragment>
    )
}

const mapStateToProps = ({ todos }: AppState) => ({
    todos
});

const mapDispatchProps = (dispatch : ThunkDispatch<any, any, AnyAction>) => {
    return {
        fetchRequest: () => {
          dispatch(fetchRequest());
        }
    };
};

export default connect(mapStateToProps, mapDispatchProps)(ToDo);