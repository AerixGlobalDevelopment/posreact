import React from "react";
import { ArrowRight } from "lucide-react";
import "./RightNav.css";
import { BsTools } from "react-icons/bs";
import {IoMdDoneAll} from "react-icons/io";
import {IoLayers} from "react-icons/io5";
import {CiInboxIn} from "react-icons/ci";
import {MdCreditScore} from "react-icons/md";
import {GiExitDoor} from "react-icons/gi";
import {FaBullhorn, FaRegUser} from "react-icons/fa";
import {PiSignOutBold} from "react-icons/pi";
import {FaPowerOff} from "react-icons/fa6";
import {HiOutlineArrowsExpand} from "react-icons/hi";
import {RxHamburgerMenu} from "react-icons/rx";
export default function RightNav({ open, setOpen, setManagementOpen, setSearchItemOpen, setAddProductOpen }) {
    return (
        <div className={`rightnav-overlay ${open ? "open" : ""}`}>
            <div className="rightnav-header">
                <h2>POS - Admin</h2>
                <button onClick={() => setOpen(false)} className="close-btn">
                    <ArrowRight size={20}/>
                </button>
            </div>
            <ul className="menu-item">
                <li className="menu-item-ma" onClick={() => setManagementOpen(true)}>
                    <BsTools size={20}/>
                    <span>Management</span>
                </li>

                <li className="" onClick={() => setSearchItemOpen(true)}>
                    <IoMdDoneAll size={20}/>
                    <span>View sales history</span>
                </li>
                <li className="" onClick={() => setAddProductOpen(true)}>
                    <IoLayers size={20}/>
                    <span>View open sales</span>
                </li>
                <li className="">
                    <CiInboxIn size={20}/>
                    <span>Cash In / Out</span>
                </li>
                <li className="">
                    <MdCreditScore size={20}/>
                    <span>Credit payments</span>
                </li>
                <li className="">
                    <GiExitDoor size={20}/>
                    <span>End of day</span>
                </li>
                <li className="">
                    <p className="user-nav">User</p>
                    <span className="user-nav-line"></span>
                </li>
                <li className="">
                    <FaRegUser size={20}/>
                    <span>User info</span>
                </li>
                <li className="menu-item-ma">
                    <PiSignOutBold size={20}/>
                    <span>Sign out</span>
                </li>
                <li className="">
                    <FaBullhorn size={20}/>
                    <span>Feedback</span>
                </li>
            </ul>
            <div className="nav-date-container">
                <span className="nav-date">9/7/2025</span>
            </div>
            <div className="rightnav-footer">
                <div className="footer-icons">
                    <RxHamburgerMenu size={20} title="Settings"/>
                    <HiOutlineArrowsExpand size={20} title="Fullscreen"/>
                    <FaPowerOff size={20} title="Power"/>
                </div>
            </div>

            {/*<ul>*/}
            {/*    {menuItems.map((item, idx) => (*/}
            {/*        <li key={idx}>*/}
            {/*            {item.icon}*/}
            {/*            <span>{item.label}</span>*/}
            {/*        </li>*/}
            {/*    ))}*/}
            {/*</ul>*/}
        </div>
    );
}