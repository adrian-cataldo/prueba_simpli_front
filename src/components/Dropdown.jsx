import React from 'react'

/**
 * data: array of objects
 * value: current value
 * getId(item): a function that indicates how to access the id field on every object of data
 * getText(item): a function that indicates how to access the text field on every object of data
 * onSelect(id): function called on change
 */
export default function Dropdown({data, value, getId, getText, onSelect}) {

    const select = (e) => {
        const value = e.target.value;
        onSelect?.(value);
    }

    return (
        <select value={value} onChange={select}>
            <option value=''> Seleccione </option>
            {data?.map((item, i) =>
                <option key={i} value={getId(item)}> {getText(item)} </option>
            )}
        </select>
    )
}