import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';


interface NavigateButtonProps{
    title : string
}

export default function NavigateButton({ title } : NavigateButtonProps){

    const navigate = useNavigate()

    const direct  = () =>{
    return navigate("/")
    }
    
    return(
        <button className="px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-800 cursor-pointer transition-all" onClick={direct}> { title } </button>
    )
}