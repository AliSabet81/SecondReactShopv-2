// import React from "react";
import { useState } from "react";
import "./index.css"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { Link } from "react-router-dom";
import { TChildren } from "../../../Routes";

interface ISubMenu{
  name:String,
  path:string,
  children ?: TChildren[]
}

const SubMenu = (i:ISubMenu) =>{
  const [open, setOpen] = useState(false);
  const Sub = ()=>{
    return i.children ?.map((e)=><Link className="w-48 h-7 font-normal hover:text-primary" key={e.path} to={e.path}>{e.name}</Link>)
  }

  return (
    <div className="flex justify-center">
      <div onMouseLeave={() => setOpen(false)} className="relative">
        <Link
          onMouseOver={() => setOpen(true)}
          className="flex items-center p-4 rounded-md" to={i.path}        >
          <span className="mr-2 border-b border-white transition duration-700 ease-in-out hover:border-primary">{i.name}</span>
          {open ? <ExpandLessIcon/> : <ExpandMoreIcon/>}
        </Link>
        <ul
          className={`absolute left-0 flex flex-col p-4 bg-white rounded-lg shadow-xl ${
            open ? "block" : "hidden"
          }`}
        >
          {Sub()}
        </ul>
      </div>
    </div>
  );
} 
export default SubMenu