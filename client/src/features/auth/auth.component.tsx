import React from 'react'
import { useForm } from "react-hook-form";
import { useDispatch } from 'react-redux';
import {login} from './auth.slice'

type Inputs = {
    username: string,
    password: string,
  };

export const LoginForm = (props: {}) => {
    const dispatch = useDispatch();
    const { register, handleSubmit, errors } = useForm<Inputs>();
    const onSubmit = (data: Inputs) => {
        dispatch(login(data))
    };
  
    return (
      <form onSubmit={handleSubmit(onSubmit)}>
      
        <input name="username" ref={register({ required: true })} />
        {errors.username && <span>This field is required</span>}
        {/* include validation with required or other standard HTML validation rules */}
        <input name="password" ref={register({ required: true })} />
        {/* errors will return when field validation fails  */}
        {errors.password && <span>This field is required</span>}
        
        <input type="submit" value="submit"/>
      </form>
    );
}