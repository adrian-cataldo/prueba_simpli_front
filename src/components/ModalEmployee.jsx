import React, {useRef, useState, useEffect, useImperativeHandle, forwardRef} from 'react'
import Modal from './Modal'
import Validation from './Validation'
import Dropdown from './Dropdown'
import {create} from '../api/employees_api'

function ModalEmployee({onSave, company_id}, ref) {
    const [open, setOpen] = useState(false)
    const [validations, setValidations] = useState([])
    const firstname = useRef()
    const lastname = useRef()
    const rut = useRef()
    const email = useRef()

    useImperativeHandle(ref, () => ({
        show: () => {
            setOpen(true)
            setValidations([])
        }
    }))

    const confirm = async () => {
        const data = await create({
            firstname: firstname.current.value,
            lastname: lastname.current.value,
            rut: rut.current.value,
            email: email.current.value,
            company_id,
        })
        const json = await data.json()
        if(data.status === 400 && Object.keys(json).length>0) {
            setValidations(json)
            return
        }
        setOpen(false)
        onSave()
    }

    const cancel = () => {
        setOpen(false)
    }

    return open &&
        <Modal title='Nuevo empleado' onCancel={cancel} onConfirm={confirm}>
            <input ref={rut} placeholder='Rut' className='input' />
            <Validation value={validations?.['rut']} />

            <input ref={firstname} placeholder='Nombre' className='input' />
            <Validation value={validations?.['firstname']} />

            <input ref={lastname} placeholder='Apellido' className='input' />
            <Validation value={validations?.['lastname']} />

            <input type='email' ref={email} placeholder='Email' className='input' />
            <Validation value={validations?.['email']} />
        </Modal>

}

export default forwardRef(ModalEmployee);
