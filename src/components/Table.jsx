import React from 'react';

/**
 * headers: array of elements
 * data: array of objects
 * getRow(): a function that converts every item of data to an array
 */
export default function Table({headers, data, getRow}) {
    return (
        <table>
            {headers?.length>0 &&
                <thead>
                    <tr>
                        {headers.map((th, i) =>
                            <th key={i}>{th}</th>
                        )}
                    </tr>
                </thead>
            }
            <tbody>
                {data?.map((object, i) => {
                    return (
                        <tr key={i}>
                            {getRow(object).map((td, j) =>
                                <td key={j}> {td} </td>
                            )}
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}