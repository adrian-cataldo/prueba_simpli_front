import React, {useState, useEffect, useRef} from 'react'
import Navbar from '../components/Navbar'
import ModalEmployee from '../components/ModalEmployee'
import Table from '../components/Table'
import Dropdown from '../components/Dropdown'
import {list} from '../api/employees_api'
import {list as company_list} from '../api/companies_api'

export default function EmployeePage() {
    const [loading, setLoading] = useState(true)
    const [employees, setEmployees] = useState([])
    const [companies, setCompanies] = useState([])
    const [companyId, setCompanyId] = useState()
    const modalRef = useRef();

    useEffect(()=>{
        const load = async () => {
            const companies = await company_list()
            const json = await companies.json()
            setCompanies(json)
        }
        load()
    }, [])

    const loadEmployees = async () => {
        if(!companyId) {
            setEmployees([])
            setLoading(false)
            return
        }
        setLoading(true)

        const data = await list(companyId)
        setEmployees(await data.json())

        setLoading(false)
    }

    useEffect(()=>{loadEmployees()}, [companyId])

    const onAdd = (e) => {
        e.preventDefault()
        modalRef.current?.show()
    }

    return (
        <div className='app_container'>
            <Navbar />
            <ModalEmployee
                ref={modalRef}
                onSave={loadEmployees}
                company_id={companyId}
            />

            <h1>Empleados</h1>

            <a onClick={onAdd} disabled={!Boolean(companyId)} href="/#" role="button" className='button_create'>
                Nuevo empleado
            </a>

            <Dropdown
                data={companies}
                value={companyId}
                getId={item=>item.id}
                getText={item=>`${item.rut}: ${item.name}`}
                onSelect={setCompanyId}
            />

            <div aria-busy={loading}>
                {employees.length>0 &&
                    <Table
                        headers={['Rut', 'Nombre', 'Apellido', 'Email']}
                        data={employees}
                        getRow={(item) => {
                            return [
                                item.rut,
                                item.firstname,
                                item.lastname,
                                item.email,
                            ]
                        }}
                    />
                }
            </div>
        </div>
    )
}