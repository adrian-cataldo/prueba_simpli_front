import React, {useState, useEffect, useRef} from 'react'
import Navbar from '../components/Navbar'
import ModalCompany from '../components/ModalCompany'
import Table from '../components/Table'
import {list} from '../api/companies_api'

export default function CompaniesPage() {
    const [loading, setLoading] = useState(true)
    const [companies, setCompanies] = useState([])
    const modalRef = useRef();
    const load = useRef(async ()=>{
        setLoading(true)

        const data = await list()
        setCompanies(await data.json())

        setLoading(false)
    })

    useEffect(()=>{
        load.current?.()
    }, [])

    const onAdd = (e) => {
        e.preventDefault()
        modalRef.current?.show()
    }

    return (
        <div className='app_container'>
            <Navbar />
            <ModalCompany ref={modalRef} onSave={()=>load.current?.()}/>

            <h1>Empresas</h1>

            <a onClick={onAdd} href="/#" role="button" className='button_create'>
                Nueva empresa
            </a>

            <div aria-busy={loading}>
                {companies.length>0 &&
                    <Table
                        headers={['Rut', 'Nombre', 'Dirección', 'Teléfono']}
                        data={companies}
                        getRow={(item) => {
                            return [
                                item.rut,
                                item.name,
                                item.direction,
                                item.phone,
                            ]
                        }}
                    />
                }
            </div>
        </div>
    )
}