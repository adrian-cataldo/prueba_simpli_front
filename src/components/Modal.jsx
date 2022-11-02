import React from 'react';

export default function Modal({title, children, onCancel, onConfirm}) {

    const cancel = (e) => {
        e.preventDefault()
        onCancel?.()
    }

    const confirm = (e) => {
        e.preventDefault()
        onConfirm?.()
    }

    return (
        <dialog open={true}>
            <article>
                <a onClick={cancel} href="/#" className="close"></a>
                {title &&
                    <h3> {title} </h3>
                }
                {children}
                <footer>
                    {onCancel &&
                        <a onClick={cancel} href='/#' role="button" className="secondary">
                            Cancelar
                        </a>
                    }
                    {onConfirm &&
                        <a onClick={confirm} href='/#' role="button">
                            Confirmar
                        </a>
                    }
                </footer>
            </article>
        </dialog>
    )
}