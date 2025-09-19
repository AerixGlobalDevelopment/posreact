import React, { useState } from "react";
import {
    LayoutDashboard,
    FileText,
    Tag,
    Box,
    BarChart2,
    Users,
    Heart,
    Shield,
    CreditCard,
    Globe,
    Percent,
    Building2,
    ChevronLeft,
    ChevronRight,
} from "lucide-react";
import "./Management.css";

export default function Management() {
    const [collapsed, setCollapsed] = useState(false);

    const menuItems = [
        { icon: <LayoutDashboard size={20} />, label: "Dashboard" },
        { icon: <FileText size={20} />, label: "Documents" },
        { icon: <Tag size={20} />, label: "Products" },
        { icon: <Box size={20} />, label: "Stock" },
        { icon: <BarChart2 size={20} />, label: "Reporting" },
        { icon: <Users size={20} />, label: "Customers & suppliers" },
        { icon: <Heart size={20} />, label: "Promotions" },
        { icon: <Shield size={20} />, label: "Users & security" },
        { icon: <CreditCard size={20} />, label: "Payment types" },
        { icon: <Globe size={20} />, label: "Countries" },
        { icon: <Percent size={20} />, label: "Tax rates" },
        { icon: <Building2 size={20} />, label: "My company" },
    ];

    return (
        <div className="management-submenu">
            <ul>
                {menuItems.map((item, idx) => (
                    <li key={idx} className="submenu-item">
                        {item.icon}
                        <span>{item.label}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}