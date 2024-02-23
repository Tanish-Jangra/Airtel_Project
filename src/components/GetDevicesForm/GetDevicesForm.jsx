import React from 'react';
import './GetDevicesForm.css';
import CrossIcon from './../../assets/cross.svg';

const GetDevicesForm = ({onClose}) => {
  return (
    <div className='GetDevicesFormContainer'>
        <div className='Header'>
            <h3>ALL DEVICES</h3>
            <img src={CrossIcon} alt="close" className='crossIcon' onClick={onClose}/>
        </div>
        <div className='GetDevicesTableContainerDiv'>
        <table
          className="GetDevicesTableContainer"
        >
            <thead>
            <tr className='AllDevicesHead'>
              <th>ID</th>
              <th >Name</th>
              <th >Address</th>
              <th >Device Model</th>
              <th >Serial No.</th>
              <th >QR Code</th>
              <th>IMEI No.</th>
              <th >SIM No.</th>
            </tr>
            </thead>
            <tbody>
            {Array(20)
              .fill(null)
              .map((item, index) => (
                <tr key={index} className='AllDevicesTableData'>
                  <td >{index + 1}</td>
                  <td>Michel</td>
                  <td>Faridabad</td>
                  <td>df21321fsdf</td>
                  <td>{Math.ceil(Math.random() * 1000000000000000)}</td>
                  <td>34234324244</td>
                  <td>32242423424</td>
                  <td>234234242344234</td>
                </tr>
              ))}
              </tbody>
        </table>
        </div>
    </div>
  )
}

export default GetDevicesForm;