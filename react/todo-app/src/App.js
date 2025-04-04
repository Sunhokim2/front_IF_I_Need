import { useCallback, useMemo, useRef, useState } from 'react';
import './App.css';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import TodoTemplate from './components/TodoTemplate';

// 콜백(useCallback)과 메모(React.memo)를 사용해 TodoListItem 생성이 5천개씩 계속 되는거 막아보자

// useCallback ✨함수 다시 생성안함
// React.memo ✨컴포넌트 다시 생성안함

function App() {
  console.log('App 생성');

  const create = useMemo(() => {
    const list = [];
    for(let i = 1; i <= 5000; i++) {
      list.push({id: i, text: `리액트 ${i}`, checked: i % 4 ? false : true})
    }
    console.log('리스트 생성');
    return list;
  }, []);
  const [todos, setTodos] = useState(create);

  const nextId = useRef(todos.length + 1);

  const onInsert = useCallback((text) => {
    const todo = {id: nextId.current, text: text, checked: false};
    setTodos( todos => [...todos, todo] );
    nextId.current++;
  },[]);

  // 앱만들때 딱한번만 동작하고 다시 동작하지않는다.(useCallback)
  const onRemove = useCallback((id) => {
    setTodos(todos => todos.filter((todo) => todo.id !== id));
  },[]);

  const onToggle = useCallback((id) => {
    setTodos(todos => 
      todos.map((todo) => 
        todo.id === id ? { ...todo, checked: !todo.checked } : todo
      )
    );
  },[]);

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} 
                onToggle={onToggle} />
    </TodoTemplate>
    
  );
}
export default App;