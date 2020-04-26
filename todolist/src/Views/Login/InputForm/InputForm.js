import React from 'react';
import classes from './InputForm.module.css';
import {useDispatch} from 'react-redux';
import { login } from '../../../Redux/ActionCreators/ActionCreators';


const InputForm = (props) => {
    const dispatch = useDispatch();
    const submitHandler = event => {
        event.preventDefault();
        dispatch(login(null,null));
    }
    return (
        <form className={classes["form-box"]} onSubmit={submitHandler}>
            <div className={classes["inputs"]}>    
                <div className={classes["plate"]}> 
                    <div className={classes["ico-block"]}>
                        <div className={classes["ico-user"]}></div>
                    </div>
                    <input className={classes["input-bty"]}
                        placeholder={"username"}
                        type={"text"}
                    /> 
                </div>
                <div className={classes["plate"]}> 
                    <div className={classes["ico-block"]}>
                        <div className={classes["ico-password"]}></div>
                    </div>
                    <input className={classes["input-bty"]}
                        placeholder={"password"}   
                        type={"password"}
                    />
                </div>
            </div>
            <button className={classes["button-log"]} >LOGIN</button>
        </form>
    )
};

export default InputForm;