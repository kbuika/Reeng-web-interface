import React, { Component } from 'react';
import {
    Fab,
    Button
    
   } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import TimeCards from "../components/TimeCards";
import { Link } from "react-router-dom";


class RegularBell extends Component {
    constructor(props) {
        super(props);
        this.state = { 
           
         }
    }

   
    render() { 
        
        return ( 
            <div>
                <div className='create-bell-header'>
                        <h1>
                            Set Regular Bell
                        </h1>
                   
                        
                </div>
                    
                    
              
                <div className='body-section'>
                    <div>
                        <TimeCards />
                        <div className='btn-save'>
                            <Button
                                halfWidth
                                variant="contained"
                                color="primary"
                                
                            >
                                Save
                            </Button>
                        </div>
                        <div className='action-icons'>
                            <Fab size="small" color="primary" aria-label="add">
                                <AddIcon />
                            </Fab>
                            <Fab size="small" color="secondary" aria-label="edit"
                            style={{marginLeft: '1em'}}>
                                <EditIcon />
                            </Fab>
                        </div>
                        
                            
                        
                    </div>
                    
                </div>

                
                    <div className='btn-view-bells'>
                        <Link to="/all-existing-bells">
                            <Button
                                halfWidth
                                variant="contained"
                                color="primary"
                                
                                
                            >
                                View all Bells
                            </Button>
                        </Link>
                    </div>
                
                
            </div>
         );
    }
}
 
export default RegularBell;