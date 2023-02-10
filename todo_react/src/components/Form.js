import { useState } from 'react';
import  { useDispatch, useSelector } from 'react-redux';
import { addTodoAsync } from '../todos/services';
//import { addTodo } from '../todos/todosSlice';
import Loading from './Loading';
import Error from './Error';


export default function Form() {
  const [ title, setTitle ] = useState('');

  const dispatch = useDispatch();

  const isLoading = useSelector( state => state.todos.addNewTodo.isLoading);
  const error = useSelector(state => state.todos.addNewTodo.error);


  const handleSubmit = async (e) =>{
    //bos xana yazanda enter basilmir///////////////////////
    if( !title) return;
    e.preventDefault();

    await dispatch(addTodoAsync({ title }))
    //her defe yeni bosluq yaratmaq lazimdir
    setTitle('');
  };

  return (
    <form onSubmit={handleSubmit} style={{display:'flex', alignItems:'center'}}>
      <input 
        disabled={isLoading}
        className='new-todo'
        placeholder="Qeydlerini apar"
        value={title}
        onChange={e=>setTitle(e.target.value)}
      />
    { isLoading && <Loading/>}
    {error && <Error message={error}/>}
    </form>
    
  )
}
