import { iconsImgs, personsImgs } from "../../utils/images";
import "./ContentTop.css";
import { useContext, useState } from "react";
import { SidebarContext } from "../../context/sidebarContext";
import GetDevicesForm from "../GetDevicesForm/GetDevicesForm";
import AddDeviceForm from "../AddDeviceForm/AddDeviceForm";

const ContentTop = () => {
  const { toggleSidebar } = useContext(SidebarContext);
  const [showAddDeviceForm, setAddDeviceForm] = useState(false);
  const [showGetDevicesForm, setGetDevicesForm] = useState(false);

  const toggleAddDeviceForm = () => {
    setAddDeviceForm(!showAddDeviceForm);
  };

  const toggleGetDevicesForm = () =>{
    setGetDevicesForm(!showGetDevicesForm);
  }

  return (
    <div className="main-content-top">
      <div className="content-top-left">
        <button type="button" className="sidebar-toggler" onClick={() => toggleSidebar()}>
          <img src={iconsImgs.menu} alt="" />
        </button>
        <h3 className="content-top-title">MRM PROCOM</h3>
      </div>
      <div className="content-top-btns">
        <ul className="right-nav btn">
          <ul className="uploadbtn">
            <li>Register</li>
          </ul>
          <ul className="uploadbtn">
            <li>Login</li>
          </ul>
          <ul className="uploadbtn">
            <li onClick={toggleGetDevicesForm}>Get All Devices</li>
          </ul>
          <ul className="uploadbtn">
            <li onClick={toggleAddDeviceForm}>Add Device</li>
          </ul>
        </ul>
      </div>
      {showAddDeviceForm  && !showGetDevicesForm && (
        <AddDeviceForm onClose={toggleAddDeviceForm} />
      )}
      {
        showGetDevicesForm && !showAddDeviceForm && (
          <GetDevicesForm onClose = {toggleGetDevicesForm}/>
        )
      }
    </div>
  )
}

export default ContentTop;
