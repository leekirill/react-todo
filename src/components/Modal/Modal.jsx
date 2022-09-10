import style from '../Modal/Modal.module.scss'
import React from 'react'

function Modal({isActive, children, toggleChange}) {

        return (
        isActive &&
            <div className = { style.modal } onClick={toggleChange}>
                <div className={style.content}>
                    {children}
                </div>
            </div >)
}

export default Modal