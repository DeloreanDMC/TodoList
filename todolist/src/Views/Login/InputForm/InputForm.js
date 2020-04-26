import React from 'react';
import classes from './InputForm.module.css';

const InputForm = (props) => {
    return (
        <form className={classes["form-box"]}>
            <div className={classes["inputs"]}>    
                <div className={classes["plate"]}> 
                    <div className={classes["ico-block"]}>
                        <div className={classes["ico-user"]}></div>
                    </div>
                    <input className={classes["input-bty"]}
                        type={"text"}
                    /> 
                </div>
                <div className={classes["plate"]}> 
                    <div className={classes["ico-block"]}>
                        <div className={classes["ico-password"]}></div>
                    </div>
                    <input className={classes["input-bty"]}
                         type={"password"}
                    />
                </div>
            </div>
            <button  className={classes["button-log"]}>LOGIN</button>
        </form>
    )
};

export default InputForm;