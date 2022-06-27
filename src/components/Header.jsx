import '../App.css';
import { useState } from 'react';
import style from '../App.css';
import { Footer } from './Footer';

function Header() {
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [currentPageStatus,setCurrentPageStatus] = useState("All");


    // console.log("status",currentPageStatus);

    const checkBoxHandler = (e) => {
        e.target.checked = true;
        let todosCopy = [...todos];
        todosCopy.forEach(el=>{
            if(el.id === +e.target.parentElement.dataset.id){
                el.checked = !el.checked;
            }; 
        })
        setTodos(todosCopy);
        console.log(todos);
    }

    const deleteBtnHandler = (e) => {
        let todosCopy = [...todos];
        todosCopy.forEach((el,index)=>{
            if(el.id === +e.target.parentElement.dataset.id){
                todosCopy.splice(index,1);
            }; 
        })
        setTodos(todosCopy);
    }

    const status = {
        Active: false,
        Completed: true,
    };
    console.log(status[currentPageStatus], currentPageStatus);
    return (
        <div>
        {/* <form> */}
            <input value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder="What needs to be done?"  />
            <button onClick={() => {
                let obj = {
                    id: +Date.now(),
                    value:inputValue,
                    checked:false
                }
                setTodos([...todos,obj]); 
                setInputValue('');
                }}
                >
                    Add
                </button>
        <div>
        {
        todos.map((el) => {
            if (currentPageStatus === 'All' || el.checked == status[currentPageStatus]) {
        return (<div key={el.id} data-id={el.id}>
                <input checked={el.checked} onChange={checkBoxHandler} name="checkbox" type="checkbox" />
                <span>{el.value}</span>
                <button onClick={deleteBtnHandler} type="button" className="hide">x</button>
            </div>
            );
        }
        })
        }
        </div>
        <Footer setStatus={setCurrentPageStatus}/>
        </div>
    );
}
    

export default Header;