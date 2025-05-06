// Manager.jsx
import React, { useState, useRef, useEffect } from 'react';
import {toast} from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Manager = () => {
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const inputRef = useRef(null);
    useEffect(()=>{
        // console.log(inputRef.current);
        inputRef.current.focus();
    },[]);
    const handleLogin = (e) => {
        e.preventDefault();
        if (password === 'manager123') {
            navigate('/manager-dashboard');
        } else if(password.trim() === ''){
            toast.error('Enter something bhadwe!!');
        }else {
            toast.error('Chorr Saale!!');
        }
    };

    return (
        <div className='manparent'>
            <div className='manlog'>
                <h1>Manager Login</h1>
                <div className='manform'>
                    <form onSubmit={handleLogin}>
                        <label><h3>CheatCode:</h3></label>
                        <div className='mandet'>
                            <input
                                style={{width:250, height:30}}
                                type="password"
                                ref={inputRef}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder='Enter CHEATCODE'
                                className='inp'
                            />
                        </div>
                        <div className='mandetsub'>
                            <button type="submit" className='accessbtn'><img src="../burger_favicon.png" height={50} /></button>
                        </div>
                    </form>
            <a href="/" className="back-to-home-btn">Back to Home</a>
                </div>
            </div>
        </div>
    );
};

export default Manager;
