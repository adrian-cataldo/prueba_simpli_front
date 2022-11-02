import React, {useState, useEffect} from 'react';
import Navbar from '../components/Navbar'
import ModalCompany from '../components/ModalCompany'
import Table from '../components/Table'
import {list, create} from '../api/companies_api';

export default function CompaniesPage() {
    const [loading, setLoading] = useState(true);
    const [companies, setCompanies] = useState([]);
    const [openModalCompany, setOpenModalCompany] = useState(false);

    useEffect(()=>{
        const load = async () => {
            setLoading(true)

            const data = await list()
            setCompanies(data)

            setLoading(false)
        }
        load();
    }, []);

    return (
        <div className='app_container'>
            <Navbar />
            {openModalCompany &&
                <ModalCompany
                    onCancel={()=>setOpenModalCompany(false)}
                    onConfirm={({name, address, rut, phone}) => {
                        create({name, address, rut, phone})
                        setOpenModalCompany(false);
                    }}
                />
            }

            <div aria-busy={loading}>
                <h1>Empresas</h1>

                <a onClick={e=>{e.preventDefault();setOpenModalCompany(true)}} href="/#" role="button">
                    Nueva empresa
                </a>

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