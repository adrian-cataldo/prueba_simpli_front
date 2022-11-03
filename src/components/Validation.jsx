import React from 'react'

export default function Validation({value}) {
    return value && <small className='error'>{value}</small>
}