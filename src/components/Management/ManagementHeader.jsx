import React from "react";
import { X } from "lucide-react";
import "./ManagementHeader.css";
import {FaArrowLeft} from "react-icons/fa";

export default function ManagementHeader({ title, onClose }) {
    return (
        <div className="modal-topbar">
            <div className="modal-left">
                <FaArrowLeft size={20}/>
                <h2>{title}</h2>
            </div>
            <button className="modal-close" onClick={onClose}>
                <X size={18}/>
            </button>
        </div>
    );
}