import React from 'react'
import Toast from 'react-bootstrap/Toast';



function ToastAlert() {
    return (
        <Toast>
            <Toast.Header>
                
                <strong className="me-auto">Bootstrap</strong>
                <small>11 mins ago</small>
            </Toast.Header>
            <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
        </Toast>
    )
}

export default ToastAlert