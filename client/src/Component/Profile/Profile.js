import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteUser } from '../../Redux/Actions/UserAction'
import React, { useEffect, useState } from 'react'
import { current, logout } from '../../Redux/Actions/AuthAction'
import { IconButton } from "@material-ui/core";
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MyPostsLists from '../MyPostsLists'
import MyApplicationsList from '../MyApplicationsList'



function Profile(){
    const dispatch = useDispatch()
    const user = useSelector(state=>state.AuthReducer.user)

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
    
    

    const [showC, setShowC] = useState(false);

       
    useEffect(()=>{
        dispatch(current())
       
    })

    return(
    <>
                                   
                                {user  && 
                                <div>
                                    <button className='dotMenu' onClick={handleClick}>
                                        ...
                                    </button>
                                    <Menu
                                        id="simple-menu"
                                        anchorEl={anchorEl}
                                        keepMounted
                                        open={Boolean(anchorEl)}
                                        onClose={handleClose}
                                    >
                                        
                                        <Link to= '/EditProfile'  ><MenuItem onClick={()=>{}}>
                                        <IconButton  onClick={()=>setShowC(!showC)} >
                                            <img className='iconMod'src="https://img.icons8.com/material-outlined/24/000000/edit--v1.png" alt=''/>
                                                                                       
                                        </IconButton>
                                        </MenuItem></Link>
                                        <Link to= '/Users'  onClick={()=> {dispatch(deleteUser(user._id));dispatch(logout())}} ><MenuItem onClick={()=>{}}>
                                        <IconButton  onClick={()=>setShowC(!showC)} >
                                        <img className='iconMod' src="https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/64/000000/external-delete-miscellaneous-kiranshastry-lineal-kiranshastry.png"  alt=''/>
                                            
                                        </IconButton>
                                        </MenuItem></Link>
                                        
                                    </Menu>
                                </div> } 
            
           
    {   user &&
    
        <section id="about-me" >


            
            <div className="info-avatar">
            
                <h1>Infos</h1>
                <h2>{user.description}</h2>
                <h1>Coordonn??es</h1>
                <div className="CordAvatar">
                <div className="CordAvatarEnt">
                <img src="https://img.icons8.com/ios-filled/50/000000/phone.png" alt=''/>
                <p>T??l??phone</p>
                <p>{user.phone}</p>
                </div>
                <div className="CordAvatarEnt">
                <img src="https://img.icons8.com/ios-filled/50/000000/email.png" alt=''/>
                <p>E-mail</p>
                <p>{user.email}</p>
                </div>
                <div className="CordAvatarEnt">
                <img src="https://img.icons8.com/ios/50/000000/giving-birth.png" alt=''/>
                <p>Anniversaire</p>
                <p>{user.birth}</p>
                </div>
                </div>
            </div>
            
            <div className="avatar-profile">
                <h1>{user.role} {user.profession}</h1>
                <img className="avatar" src={user&&user.pic} alt="" />
                <h2>{user.name}</h2>
                <h2>{user.adresse}</h2>
                
            </div>
        </section>
    } 
    {
        user &&
        <div>
            {
        user.role == "Recruteur" ? 
        <MyPostsLists/>
        : user.role == "Employer" ? 
        <MyApplicationsList/>
        :
        <>
        <MyPostsLists/>
        <MyApplicationsList/>
        </>
    }
        </div>
    }
    
    
    
    </>       
    
    )
}

export default Profile