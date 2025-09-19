import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { MdDone } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import "./AddProduct.css";

export default function AddProduct({ onClose }) {
    const [activeTab, setActiveTab] = useState("details");

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="add-product-modal" onClick={(e) => e.stopPropagation()}>

                {/* HEADER */}
                <div className="modal-header">
                    <h3>New product</h3>
                    <FaArrowRight className="header-icon" onClick={onClose}/>
                </div>

                {/* TABS */}
                <div className="modal-tabs">
                    {["details", "price", "stock", "comments", "image"].map((tab) => (
                        <div
                            key={tab}
                            className={`tab ${activeTab === tab ? "active" : ""}`}
                            onClick={() => setActiveTab(tab)}
                        >
                            {tab === "details" && "Details"}
                            {tab === "price" && "Price & tax"}
                            {tab === "stock" && "Stock control"}
                            {tab === "comments" && "Comments"}
                            {tab === "image" && "Image & color"}
                        </div>
                    ))}
                </div>

                {/* TAB CONTENT */}
                <div className="tab-content">
                    {activeTab === "details" && (
                        <div className="form-rows">
                            <div className="form-group">
                                <label>Name</label>
                                <input type="text" placeholder="Enter product name"/>
                            </div>

                            <div className="form-group">
                                <label>Code</label>
                                <input type="text" value="1" readOnly/>
                            </div>

                            <div className="form-group">
                                <label>Barcode</label>
                                <input type="text"/>
                                <button className="link-btn">Generate barcode</button>
                            </div>

                            <div className="form-group">
                                <label>Unit of measurement</label>
                                <input type="text"/>
                            </div>

                            <div className="form-group">
                                <label>Group</label>
                                <select>
                                    <option>Products</option>
                                </select>
                            </div>

                            {/* SWITCHES BOX */}
                            <div className="switch-box">
                                <label className="switch-label">
                                    <label className="switch">
                                        <input type="checkbox" defaultChecked/>
                                        <span className="slider"></span>
                                    </label>
                                    <span>Active</span>
                                </label>

                                <label className="switch-label">
                                    <label className="switch">
                                        <input type="checkbox" defaultChecked/>
                                        <span className="slider"></span>
                                    </label>
                                    <span>Default quantity</span>
                                </label>

                                <label className="switch-label">
                                    <label className="switch">
                                        <input type="checkbox"/>
                                        <span className="slider"></span>
                                    </label>
                                    <span>Service (not using stock)</span>
                                </label>
                            </div>

                            <div className="form-group">
                                <label>Age restriction</label>
                                <div className="age-input">
                                    <input type="text"/> <span>year(s)</span>
                                </div>
                            </div>

                            <div className="form-group">
                                <label>Description</label>
                                <textarea rows={3}></textarea>
                            </div>
                        </div>
                    )}

                    {activeTab === "price" && (
                        <div className="placeholder">Price & Tax settings go here</div>
                    )}
                    {activeTab === "stock" && (
                        <div className="placeholder">Stock control settings go here</div>
                    )}
                    {activeTab === "comments" && (
                        <div className="placeholder">Comments section goes here</div>
                    )}
                    {activeTab === "image" && (
                        <div className="placeholder">Image & color section goes here</div>
                    )}
                </div>

                {/* FOOTER */}
                <div className="modal-footer">
                    <button className="btn save">
                        <MdDone className="btn-icon"/> Save
                    </button>
                    <button className="btn cancel" onClick={onClose}>
                        <IoMdClose className="btn-icon"/> Cancel
                    </button>
                </div>
            </div>
        </div>
    );
}
