
const server = 'http://localhost:8000'
//const server = 'http://18.212.251.1:8000'

export async function list(company_id='') {
    return await fetch(`${server}/api/employees/?company_id=${company_id||''}`)
}

export async function create({firstname, lastname, rut, email, company_id}) {
    return await fetch(`${server}/api/employees/`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({firstname, lastname, rut, email, company_id})
    })
}