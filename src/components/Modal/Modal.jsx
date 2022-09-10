import style from '../Modal/Modal.module.scss'
import React from 'react'

function Modal({isActive, children, toggleChange}) {

        return (
            <div className={isActive ? style.modal : style.modalClose} onClick={toggleChange}>
                <div className={isActive ? style.content : style.contentClose}>
                    {children}
                </div>
            </div >)
}

export default Modal