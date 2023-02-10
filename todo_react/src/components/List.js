import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectTodosFiltered } from '../todos/todosSlice';
import { 
	getTodosAsync, 
	toggleTodoAsync ,
	removeTodoAsync
} from '../todos/services'
import Loading from './Loading';
import Error from './Error';

const  List = () => {
	//bura///////////////////////////
	const dispatch = useDispatch();
	const todosFiltered = useSelector(selectTodosFiltered);
	const isLoading = useSelector(state => state.todos.isLoading);
	const error = useSelector(state => state.todos.error);

	useEffect(()=> {
		dispatch(getTodosAsync());
	},[dispatch]);
	

	const handleDestroy = async (id) => {
		if(window.confirm('Sən əminsən?')) {
			await dispatch(removeTodoAsync(id));
		};
	};
	const handleToggle =async ( id, completed ) => {
		await dispatch(toggleTodoAsync({id, data: { completed }}));
	}

	if(isLoading) {
		return <Loading/>;
	};

	if( error ) {
		return <Error message={error}/>;
	};
	
  return (
    <ul className="todo-list">
			{/* <li className="completed">
				<div className="view">
					<input className="toggle" type="checkbox" />
					<label>Learn JavaScript</label>
					<button className="destroy"></button>
				</div>
			</li> */}
		
			{todosFiltered.map((item)=> (
				<li key={item.id} className={item.completed ? 'completed': ''}>
				<div className="view">
					<input 
						className="toggle" 
						type="checkbox" 
						onChange={() => handleToggle( item.id, !item.completed )}
						checked = {item.completed}
					/>
					<label>{item.title}</label>
					<button className="destroy" onClick={()=> handleDestroy(item.id)}></button>
				</div>
			</li>
			))}
		</ul>
  );
};
export default List;