import { createContext, useContext, useEffect, useState } from "react";

 const DarkModeContext = createContext();

export function DarkModeProvider({children}){//인자로 자식노트를 받아옴
    //DarkModeContext에 있는 provider를 이용하여 자식노드를 감싸주어
    //자식요소에게 값을 전달 해 줄수있는 영역을 감쌈

    const [darkMode,setDarkMode]=useState(false);//처음에는 light mode
    const toggleDarkMode=()=>{
        setDarkMode((prev)=> !prev);
        updateDarkMode(!darkMode);
    };

    //useEffect(()=>{},[])//배열이 비어있다면 component가 실행될때 한번만 실행
    //useEffect(()=>{},[darkMode])//배열에 변수가 비어있다면 component가 실행될때 한번은 실행되고 darkMode의 값이 바뀔때마다 함수가 실행됨
    useEffect(()=>{
        const isDark=localStorage.theme === "dark";
        setDarkMode(isDark)
        updateDarkMode(isDark);
    },[])
    //자식에게 전달할 내용은 value안에 객체로 전달됨
    return(
         <DarkModeContext.Provider value={{darkMode,toggleDarkMode}}>
            {children}
        </DarkModeContext.Provider>
        );
}

export const useDarkMode=()=>{
    return useContext(DarkModeContext);//usecontext에서 darkmodecontext를 사용할수 있게 한다.
};

function updateDarkMode(darkMode){
    if(darkMode){
        document.documentElement.classList.add("dark");
        localStorage.theme="dark";
    }else{
        document.documentElement.classList.remove("dark");
        localStorage.theme="light";
    }
}