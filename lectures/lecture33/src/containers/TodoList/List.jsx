import React, { useState, useCallback, useEffect } from "react";

import TodoForm from "./components/TodoForm.jsx";
import ItemList from "./components/ItemList.jsx";
import "./styles/list.css";

const List = ({ onLogout }) => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
      console.log('list updated');
      return () => {
          console.log('list removed');
      };
  }, []);

  const onItemAdd = useCallback((item) => {
    setLoading(true);
    setList([...list, { id: Date.now(), value: item, checked: false }]);

    setTimeout(setLoading, 2000, false);

  }, [list, loading]);

  const onItemRemove = useCallback((item) => {
    setList(list.filter((e) => e.id != item.id));
  }, [list]);

  return (
    <div className="todo-container">

        <button className="nes-button" onClick={onLogout}>Log out</button>
        
      <TodoForm onItemAdd={onItemAdd} />
      {loading ? 'Loading...' : ''}
      <ItemList list={list} onRemove={onItemRemove} />
    </div>
  );
};

export default List;
