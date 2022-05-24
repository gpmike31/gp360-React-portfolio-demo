import React, { useState } from "react";


//the code is repeated, but its basically detecting when the textareas lose focus of the mouse, it will then call a value to change the state. once the state is changed, it will render error messages
export default function ContactMe(){
    const regex = /.+@.+\..+/
    const [IsEmailValid,setIsEmailValid]=useState(false)
    const [IsMsgValid,setIsMsgValid]=useState(false)
    const [IsNameValid,setIsNameValid]=useState(false)
    const EmailFocus= (event)=>{
        if(regex.test(event.target.value)){
            setIsEmailValid(true)
        }else{
            setIsEmailValid(false)
        }
    }
    const MsgFocus=(event)=>{
        if (event.target.value!==""){
            setIsMsgValid(true)
        }else{
            setIsMsgValid(false)
        }
    }
    const NameFocus=(event)=>{
        if (event.target.value!==""){
            setIsNameValid(true)
        }else{
            setIsNameValid(false)
        }
    }
    const ToggleEmailMessage=()=>{
        if (!IsEmailValid){
            return <div className="text warning-color">Email is not valid</div>
        }
    }
    const ToggleMsgRequired=()=>{
        if (!IsMsgValid){
            return <div className="text warning-color">Message must be filled out</div>
        }
    }
    const ToggleNameRequired=()=>{
        if (!IsNameValid){
            return <div className="text warning-color">First Name must be filled out</div>
        }
    }
    return (
        <div className="m-5">
            <form className="d-flex flex-column w-25">
                <label className="text text-color my-3">First Name:</label>
                <input type={"textarea"} onBlur={(event)=>{NameFocus(event)}}/>
                <label className="text text-color my-3">Email Address:</label>
                <input type={"textarea"} onBlur={(event)=>EmailFocus(event)}/>
                <label className="text text-color my-3">Message:</label>
                <input type={"textarea"} className="mb-3" onBlur={(event)=>{MsgFocus(event)}}/>
                {ToggleEmailMessage()}
                {ToggleMsgRequired()}
                {ToggleNameRequired()}
                <input type={"submit"}/>
            </form>
        </div>
    )
}