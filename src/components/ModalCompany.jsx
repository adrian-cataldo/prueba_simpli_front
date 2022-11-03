import React, {useRef, useState, useImperativeHandle, forwardRef} from 'react'
import Modal from './Modal'
import Validation from './Validation'
import {create} from '../api/companies_api'

function ModalCompany({onSave}, ref) {
    const [open, setOpen] = useState(false)
    const [validations, setValidations] = useState([])
    const rut = useRef()
    const name = useRef()
    const address = useRef()
    const phone = useRef()

    useImperativeHandle(ref, () => ({
        show: () => {
            setOpen(true)
            setValidations([])
        }
    }))

    const confirm = async () => {
        const data = await create({
            rut: rut.current.value,
            name: name.current.value,
            address: address.current.value,
            phone: phone.current.value,
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
        <Modal title='Nueva empresa' onCancel={cancel} onConfirm={confirm}>
            <input ref={rut} placeholder='Rut' className='input' />
            <Validation value={validations?.['rut']} />

            <input ref={name} placeholder='Nombre' className='input' />
            <Validation value={validations?.['name']} />

            <input ref={address} placeholder='Dirección' className='input' />
            <Validation value={validations?.['address']} />

            <input ref={phone} placeholder='Teléfono' className='input' />
            <Validation value={validations?.['phone']} />
        </Modal>

}

export default forwardRef(ModalCompany);
