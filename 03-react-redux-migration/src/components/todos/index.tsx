import React from "react";
import { connect } from "react-redux";
import {AppState} from '../../store'
import { ThunkDispatch } from "redux-thunk";
import {fetchRequest} from '../../store/todos/action'
import { AnyAction } from "redux";
import {TodoProps} from '../../store/todos/types'
import { useEffect } from "react";

interface PropsFromState {
    loading: boolean;
    data: TodoProps[];
    errors?: string;
  }
  
interface propsFromDispatch {
    fetchData: () => any;
}

type AllProps = PropsFromState & propsFromDispatch;

const ToDo: React.FC<AllProps> = ({ loading, data, fetchData }) => {
    useEffect(() => {
        fetchData()
    }, [])
    return (
        <React.Fragment>
            {loading ? 'Loading...' : <React.Fragment>
                {data.map((item, i) => {
                    return (<p key={i}>{item.text}</p>)
                })}
            </React.Fragment>}
        </React.Fragment>
    )
}

const mapStateToProps = ({ todos }: AppState) => ({
    loading: todos.loading,
    errors: todos.errors,
    data: todos.data
  });

const mapDispatchProps = (dispatch : ThunkDispatch<any, any, AnyAction>) => {
    return {
        fetchData: () => {
          dispatch(fetchRequest());
        }
    };
};

export default connect(mapStateToProps, mapDispatchProps)(ToDo);