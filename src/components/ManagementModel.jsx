import React, { useState } from "react";
import {IoArrowBackSharp, IoArrowForwardOutline, IoPricetags, IoTimerOutline} from "react-icons/io5";
import { MdCreditCard, MdInsertChart, MdOutlineSpaceDashboard } from "react-icons/md";
import { FaNewspaper, FaHeart, FaKey, FaPercent, FaSearch } from "react-icons/fa";
import { HiArchiveBox } from "react-icons/hi2";
import { ImUsers } from "react-icons/im";
import {GiBackwardTime, GiWorld} from "react-icons/gi";
import { PiBuildingOfficeBold } from "react-icons/pi";
import { FiHelpCircle, FiPrinter, FiRefreshCcw } from "react-icons/fi";
import { RiFileExcel2Line } from "react-icons/ri";
import ManagementHeader from "./Management/ManagementHeader.jsx";
import "./ManagementModal.css";
import { FaFolder } from "react-icons/fa6";
import {BsFilePdf} from "react-icons/bs";
import {TbReportAnalytics} from "react-icons/tb";

export default function ManagementModal({ onClose }) {
    const [selectedSection, setSelectedSection] = useState("stock");
    const [collapsed, setCollapsed] = useState(false);
    const [negative, setNegative] = useState(false);
    const [nonZero, setNonZero] = useState(false);
    const [zero, setZero] = useState(false);

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="management-modal" onClick={(e) => e.stopPropagation()}>
                {/* Modal Header */}
                <ManagementHeader title="Management Stock" onClose={onClose} />

                <div className="modal-layout">
                    {/* LEFT SIDEBAR */}
                    <aside className={`management-sidebar ${collapsed ? "collapsed" : ""}`}>
                        <ul className="management-menu">
                            <li className={selectedSection === "dashboard" ? "active" : ""} onClick={() => setSelectedSection("dashboard")}>
                                <MdOutlineSpaceDashboard /> {!collapsed && "Dashboard"}
                            </li>
                            <li className={selectedSection === "documents" ? "active" : ""} onClick={() => setSelectedSection("documents")}>
                                <FaNewspaper /> {!collapsed && "Documents"}
                            </li>
                            <li className={selectedSection === "products" ? "active" : ""} onClick={() => setSelectedSection("products")}>
                                <IoPricetags /> {!collapsed && "Products"}
                            </li>
                            <li className={selectedSection === "stock" ? "active" : ""} onClick={() => setSelectedSection("stock")}>
                                <HiArchiveBox /> {!collapsed && "Stock"}
                            </li>
                            <li className={selectedSection === "reporting" ? "active" : ""} onClick={() => setSelectedSection("reporting")}>
                                <MdInsertChart /> {!collapsed && "Reporting"}
                            </li>
                            <li className={selectedSection === "customers" ? "active" : ""} onClick={() => setSelectedSection("customers")}>
                                <ImUsers /> {!collapsed && "Customers & Suppliers"}
                            </li>
                            <li className={selectedSection === "promotions" ? "active" : ""} onClick={() => setSelectedSection("promotions")}>
                                <FaHeart /> {!collapsed && "Promotions"}
                            </li>
                            <li className={selectedSection === "users" ? "active" : ""} onClick={() => setSelectedSection("users")}>
                                <FaKey /> {!collapsed && "Users & Security"}
                            </li>
                            <li className={selectedSection === "payments" ? "active" : ""} onClick={() => setSelectedSection("payments")}>
                                <MdCreditCard /> {!collapsed && "Payment Types"}
                            </li>
                            <li className={selectedSection === "countries" ? "active" : ""} onClick={() => setSelectedSection("countries")}>
                                <GiWorld /> {!collapsed && "Countries"}
                            </li>
                            <li className={selectedSection === "tax" ? "active" : ""} onClick={() => setSelectedSection("tax")}>
                                <FaPercent /> {!collapsed && "Tax Rates"}
                            </li>
                            <li className={selectedSection === "company" ? "active" : ""} onClick={() => setSelectedSection("company")}>
                                <PiBuildingOfficeBold /> {!collapsed && "My Company"}
                            </li>
                        </ul>

                        {/* Collapse Button */}
                        <div className="management-short" onClick={() => setCollapsed(!collapsed)}>
                            {collapsed ? <IoArrowForwardOutline /> : <IoArrowBackSharp />}
                        </div>
                    </aside>

                    {/* MAIN CONTENT */}
                    <div className="management-main">
                        {/* Toolbar */}
                        <div className="management-toolbar full-width">
                            <button><FiRefreshCcw /> Refresh</button>
                            <button disabled><GiBackwardTime />Stock History</button>
                            <button><FiPrinter /> Print</button>
                            <button><BsFilePdf /> Save as PDF</button>
                            <button><RiFileExcel2Line /> Excel</button>
                            <button><TbReportAnalytics />Inventory Count Report</button>
                            <button disabled><IoTimerOutline />Quick Inventory</button>
                            <button><FiHelpCircle /> Help</button>
                        </div>

                        {/* MAIN CONTENT GRID */}
                        <div className="management-content">
                            {/* LEFT EMPTY PART */}
                            <div className="left-empty">
                                <div className="empty-header">
                                    <FaFolder className="empty-icon" />
                                    <h4>Products</h4>
                                </div>
                            </div>

                            {/* RIGHT CONTENT */}
                            <div className="right-content">
                                {/* Filters */}
                                <div className="management-filters">
                                    <div className="filters-row">
                                        <div className="switch-group">
                                            <label className="switch-dark">
                                                <input type="checkbox" checked={negative} onChange={() => setNegative(!negative)} />
                                                <span className="slider-dark"></span>
                                            </label>
                                            <span>Negative quantity</span>
                                        </div>

                                        <div className="switch-group">
                                            <label className="switch-dark">
                                                <input type="checkbox" checked={nonZero} onChange={() => setNonZero(!nonZero)} />
                                                <span className="slider-dark"></span>
                                            </label>
                                            <span>Non zero quantity</span>
                                        </div>

                                        <div className="switch-group">
                                            <label className="switch-dark">
                                                <input type="checkbox" checked={zero} onChange={() => setZero(!zero)} />
                                                <span className="slider-dark"></span>
                                            </label>
                                            <span>Zero quantity</span>
                                        </div>

                                        <div className="counters">
                                            <span className="red">0</span>
                                            <span className="blue">0</span>
                                            <span className="green">0</span>
                                        </div>
                                    </div>

                                    <div className="filters-row">
                                        <div className="search-bar">
                                            <FaSearch />
                                            <input type="text" placeholder="Product name" />
                                        </div>

                                        <div className="product-count">
                                            Products count: 0
                                        </div>
                                    </div>
                                </div>

                                {/* Table */}
                                <div className="management-table-wrapper">
                                    <table className="management-table">
                                    <thead>
                                    <tr>
                                        <th>Code</th>
                                        <th>Name</th>
                                        <th>Quantity</th>
                                        <th>Unit of Measure</th>
                                        <th>Cost Price</th>
                                        <th>Cost Incl.</th>
                                        <th>Value</th>
                                        <th>Value Incl.</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td colSpan={8} style={{ textAlign: "center", color: "#777" }}>
                                            No products found
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                                </div>

                                {/* Bottom Summary */}
                                <div className="management-summary">
                                    <div className="summary-section">
                                        <h4>Cost price</h4>
                                        <p>Total cost: <strong>0.00</strong></p>
                                        <p>Total cost inc. tax: <strong>0.00</strong></p>
                                    </div>
                                    <div className="summary-section">
                                        <h4>Sale price</h4>
                                        <p>Total: <strong>0.00</strong></p>
                                        <p>Total inc. tax: <strong>0.00</strong></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}