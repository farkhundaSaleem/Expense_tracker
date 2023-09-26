import React from 'react'
import User from './User'
import Guest from './Guest'

export default function Login(props) {
    const login = props.login

    return (
		<>
			{ login ? <User/> : <Guest/> }
		</>
	);
}
