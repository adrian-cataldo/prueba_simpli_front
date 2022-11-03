
const server = 'http://localhost:8000'
//const server = 'http://18.212.251.1:8000'

export async function list() {
    return await fetch(`${server}/api/companies/`)
}

export async function create({name, address, rut, phone}) {
    return await fetch(`${server}/api/companies/`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({name, address, rut, phone})
    })
}