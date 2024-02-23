import React, { useState, useEffect } from 'react';
import './AddDeviceForm.css';
import CrossIcon from './../../assets/cross.svg';
import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddDeviceForm = ({ onClose }) => {
    const [formData, setFormData] = useState({
        serialNumber: '',
        QRCode: '',
        IMEINumber: '',
        SimNumber: '',
        ModelNumber: '',
        ClientName: '',
        ClientAddress: '',
    });
    const [toastDisplayed, setToastDisplayed] = useState(false);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        if(formData.serialNumber.length!=11){
            alert("Device Serial Number should be of 11 length...");
            return;
        }
        else if(formData.QRCode.length!=10){
            alert('QR Code should be of length 10...');
            return;
        }
        else if(formData.IMEINumber.length!=15){
            alert('IMEI Number should be of 15 length...');
            return;
        }
        else if(formData.SimNumber.length!=19){
            alert('SIM Number should be of 19 length...');
            return;
        }
        console.log(formData);
        console.log("e is: ",e);

        setFormData({
            serialNumber: '',
            QRCode: '',
            IMEINumber: '',
            SimNumber: '',
            ModelNumber: '',
            ClientName: '',
            ClientAddress: '',
        });
        toast.success('Form submitted successfully!', { autoClose: 1000 });
        setToastDisplayed(true);

        setTimeout(() => {
            onClose();
        }, 2000);

    };

    return (
        <div className='AddDeviceFormContainer'>
            <div className='FormHeader'>
                <h3>ADD DEVICE</h3>
                <img src={CrossIcon} alt="close" className='crossIcon' onClick={onClose} />
            </div>
            <form onSubmit={handleSubmit} className='formFields'>
                <label className='field'>
                    * Device Serial Number:
                    <input className='inputField' type="text" name="serialNumber" value={formData.serialNumber} onChange={handleChange} />
                </label>
                <label className='field'>
                    * Device QR Code:
                    <input className='inputField' type="text" name="QRCode" value={formData.QRCode} onChange={handleChange} />
                </label>
                <label className='field'>
                    * Device IMEI:
                    <input className='inputField' type="text" name="IMEINumber" value={formData.IMEINumber} onChange={handleChange} />
                </label>
                <label className='field'>
                    * SIM No.:
                    <input className='inputField' type="text" name="SimNumber" value={formData.SimNumber} onChange={handleChange} />
                </label>
                <label className='field'>
                    * Device Model:
                    <input className='inputField' type="text" name="ModelNumber" value={formData.ModelNumber} onChange={handleChange} />
                </label>
                <label className='field'>
                    * Client Name:
                    <input className='inputField' type="text" name="ClientName" value={formData.ClientName} onChange={handleChange} />
                </label>
                <label className='field'>
                    * Client Address:
                    <input className='inputField' type="text" name="ClientAddress" value={formData.ClientAddress} onChange={handleChange} />
                </label>
            </form>
            <button className='formSubmit' onClick={handleSubmit} >Submit</button>
            <ToastContainer />
        </div>
    );
};

export default AddDeviceForm;
