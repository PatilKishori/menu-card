import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const User = () => {

    let tables = ["Table 1", "Table 2", "Table 3"];
    let menus = ["Chapati", "Rice", "Daal", "Sabji"];
  
    let [userMenus, setUserMenus] = useState([""]);
    let [userTables, setUserTables] = useState([""]);
    

    let menuchanged = (e)=>{
        let mymenus = [];
        let menuCheckboxes = document.getElementsByClassName("mymenu");
        for(let i = 0; i < menuCheckboxes.length; i++){
            if(menuCheckboxes[i].checked)
                mymenus.push(menuCheckboxes[i].value);
        }
        console.log(mymenus);
        setUserMenus(mymenus);
    }

    let tablechanged = (e)=>{
        let mytables = [];
        let tableCheckboxes = document.getElementsByClassName("mytable");
        for(let i = 0; i < tableCheckboxes.length; i++){
            if(tableCheckboxes[i].checked)
            mytables.push(tableCheckboxes[i].value);
        }
        console.log(mytables);
        setUserTables(mytables);
    }
  
    function submit(e){
        e.preventDefault();
    }
    return (        
        <div>
            <h1>Menu-List</h1>
            <div>
                <div>
                </div>
                    {
                        tables.map((table)=>{
                            return(
                            <label className='btn btn-primary m-1'>
                                <input type="radio" className="mytable" name="table" value={ table } onChange={(e)=>{
                                   tablechanged(e);}} />
                                {table}
                            </label>
                            )
                        })
                    }                    
                <div>
                <hr />
                {
                    menus.map((menu)=>{
                        return(
                            <label className='btn btn-success m-2'>
                                <input type="checkbox" className="mymenu" name="menu" value={ menu } onChange={(e)=>{
                                   menuchanged(e); 
                                }} /> { menu }
                            </label>
                        )
                    })
                }                    
                </div>

                <hr />
                <h2>Your Order</h2>

                <ul>
                {
                    userTables.map((table)=>{
                        return(
                            <li>
                                {table}
                              
                            </li>
                        )
                    })
                }      
                </ul>    

                <ul>
                {
                    userMenus.map((menu)=>{
                        return(
                            <li>
                                {menu}
                              
                            </li>
                        )
                    })
                }      
                </ul>   


                <button type="submit"  className="btn btn-primary mb-3" onClick={(e)=>{submit(e)}}>Submit</button>
            </div>
        </div>
    )
}

export default User;