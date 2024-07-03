import React, { useState } from "react";
import Header from "./components/Header/Header";
import Todolist from "./components/TodoList/Todolist1";
import "./App.css"
import { DarkModeProvider } from "./context/DarkModeContext";


function App() {
  const filters=["all","active","completed"]
  const [filter,setFilter]=useState(filters[0])


  return (
    <DarkModeProvider>
      <Header 
      filters={filters} 
      filter={filter}
      //onFilterChange={(filter)=>{setFilter(filter)}
      onFilterChange={setFilter}
      
       />
      <Todolist filter={filter}/>
    </DarkModeProvider>
  );
}
export default App;
