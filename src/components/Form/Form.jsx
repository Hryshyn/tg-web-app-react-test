import React, {useEffect, useState} from 'react';
import './Form.css';
import {useTelegram} from "../../hooks/useTelegram";

const Form = () => {
    const [country, setCountry] = useState('')
    const [street, setStreet] = useState('')
    const [subject, setSubject] = useState('physical')
    const {tg} = useTelegram();

    useEffect(() => {
        tg.MainButton.setParams({
            text: 'Send data'
        })
    }, [])

    useEffect(() => {
        if(!street || !country) {
            tg.MainButton.hide()
        } else {
            tg.MainButton.show()
        }
    }, [country, street])

    const onChangeCountry = (e) => {
        setCountry(e.target.value)
    }


    const onChangeStreet = (e) => {
        setStreet(e.target.value)
    }


    const onChangeSubject = (e) => {
        setSubject(e.target.value)
    }


    return (
        <div className={'form'}>
            <h3>Tap your data</h3>
            <input value={country} onChange={onChangeCountry} className={'input'} type="text" placeholder={'Country'}/>
            <input value={street} onChange={onChangeStreet} className={'input'} type="text" placeholder={'Street'}/>
            <select value={subject} onChange={onChangeSubject} className={'select'}>
                <option value="legal">Legal</option>
                <option value="physical">Physical</option>
            </select>
        </div>
    );
};

export default Form;