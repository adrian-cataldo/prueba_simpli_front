import React, {useRef} from 'react';
import Modal from './Modal'

export default function ModalCompany({onCancel, onConfirm}) {
    const rut = useRef()
    const name = useRef()
    const address = useRef()
    const phone = useRef()

    const confirm = () => {
        onConfirm({
            rut: rut.current.value,
            name: name.current.value,
            address: address.current.value,
            phone: phone.current.value,
        })
    }

    return (
        <Modal onCancel={onCancel} onConfirm={confirm}>
            <input ref={rut} placeholder='Rut' />
            <input ref={name} placeholder='Nombre' />
            <input ref={address} placeholder='Dirección' />
            <input ref={phone} placeholder='Teléfono' />
        </Modal>
    )
}

//