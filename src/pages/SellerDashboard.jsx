import React, { useState } from "react";
import {
  LayoutDashboard,
  PlusCircle,
  Box,
  ShoppingCart,
  User,
  Lock,
  ArrowLeft,
  Image as ImageIcon,
  CheckSquare,
  Square,
  UploadCloud,
  Tag,
  Package,
  DollarSign,
  TrendingUp,
  Users,
  Search,
  MoreVertical,
  Edit,
  Trash2,
  Eye,
  Camera,
  Activity,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const SellerDashboard = () => {
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState("Dashboard");

  const sidebarLinks = [
    { icon: LayoutDashboard, label: "Dashboard" },
    { icon: PlusCircle, label: "Add Product" },
    { icon: Box, label: "Manage Inventory" },
    { icon: ShoppingCart, label: "Manage Orders" },
    { icon: User, label: "Manage Profile" },
    { icon: Lock, label: "Change Password" },
  ];

  const inputClass =
    "w-full border border-gray-200 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#612c7d]/20 focus:border-[#612c7d] transition-colors text-sm text-gray-800 bg-gray-50/50 hover:bg-white";

  const DashboardView = () => {
    const stats = [
      {
        title: "Total Revenue",
        value: "₹1,24,500",
        trend: "+14.5%",
        icon: DollarSign,
        color: "text-green-600",
        bg: "bg-green-100",
      },
      {
        title: "Active Orders",
        value: "42",
        trend: "+5.2%",
        icon: ShoppingCart,
        color: "text-blue-600",
        bg: "bg-blue-100",
      },
      {
        title: "Total Products",
        value: "156",
        trend: "Steady",
        icon: Box,
        color: "text-[#612c7d]",
        bg: "bg-[#612c7d]/10",
      },
      {
        title: "Store Views",
        value: "3,402",
        trend: "+22.1%",
        icon: Activity,
        color: "text-orange-600",
        bg: "bg-orange-100",
      },
    ];

    return (
      <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-6xl mx-auto w-full pb-10">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-1">
            Welcome back, Ajith!
          </h1>
          <p className="text-sm text-gray-500">
            Here's what's happening with your store today.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
            >
              <div className="flex justify-between items-start mb-4">
                <div className={`p-3 rounded-lg ${stat.bg}`}>
                  <stat.icon size={20} className={stat.color} />
                </div>
                <span
                  className={`text-xs font-bold ${stat.trend.startsWith("+") ? "text-green-600" : "text-gray-500"}`}
                >
                  {stat.trend}
                </span>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-1">
                  {stat.value}
                </h3>
                <p className="text-sm text-gray-500 font-medium">
                  {stat.title}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Recent Activity Placeholder */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h2 className="text-lg font-bold text-gray-900 mb-4">
            Recent Sales Activity
          </h2>
          <div className="h-64 flex items-center justify-center border-2 border-dashed border-gray-100 rounded-lg bg-gray-50/50">
            <p className="text-gray-400 font-medium flex items-center gap-2">
              <TrendingUp size={20} />
              Sales chart visualization will appear here
            </p>
          </div>
        </div>
      </div>
    );
  };

  const AddProductView = () => {
    const [productName, setProductName] = useState("");
    const [quantity, setQuantity] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [calculateFees, setCalculateFees] = useState(true);

    const fbaFee = 125.0;
    const referralFee = price ? parseFloat(price) * 0.125 : 0;
    const totalCost = fbaFee + referralFee;

    return (
      <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-6xl mx-auto w-full pb-10">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-6 gap-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 mb-1">
              Add New Product
            </h1>
            <p className="text-sm text-gray-500">
              Create a new listing for your store.
            </p>
          </div>
          <div className="flex gap-3">
            <button className="px-5 py-2.5 rounded-lg text-sm font-bold text-gray-600 bg-white border border-gray-200 hover:bg-gray-50 transition-colors cursor-pointer shadow-sm">
              Discard
            </button>
            <button className="flex items-center gap-2 bg-[#612c7d] hover:bg-[#4a2160] text-white px-5 py-2.5 rounded-lg text-sm font-bold shadow-md transition-all cursor-pointer">
              <PlusCircle size={16} />
              Publish Product
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h2 className="text-base font-bold text-gray-900 mb-5 flex items-center gap-2">
                <Tag size={18} className="text-[#612c7d]" /> General
                Information
              </h2>
              <div className="space-y-5">
                <div>
                  <label className="block text-[13px] font-bold text-gray-700 mb-1.5">
                    Product Name
                  </label>
                  <input
                    type="text"
                    value={productName}
                    onChange={(e) => setProductName(e.target.value)}
                    className={inputClass}
                    placeholder="Short sleeve t-shirt"
                  />
                </div>
                <div>
                  <label className="block text-[13px] font-bold text-gray-700 mb-1.5">
                    Description
                  </label>
                  <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className={`${inputClass} min-h-[140px] resize-none`}
                    placeholder="Describe your product's features..."
                  ></textarea>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h2 className="text-base font-bold text-gray-900 mb-5 flex items-center gap-2">
                <ImageIcon size={18} className="text-[#612c7d]" /> Media
                Gallery
              </h2>
              <div className="border-2 border-dashed border-gray-200 rounded-xl p-8 flex flex-col items-center justify-center text-center bg-gray-50/50 hover:bg-[#612c7d]/5 hover:border-[#612c7d]/30 transition-colors cursor-pointer group">
                <div className="w-12 h-12 bg-white rounded-full shadow-sm flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <UploadCloud size={24} className="text-[#612c7d]" />
                </div>
                <p className="text-sm font-bold text-[#612c7d] mb-1">
                  Click to upload or drag and drop
                </p>
                <p className="text-xs text-gray-500">
                  SVG, PNG, JPG or GIF (max. 800x400px)
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h2 className="text-base font-bold text-gray-900 mb-5 flex items-center gap-2">
                <span className="text-[#612c7d] font-serif font-bold text-lg leading-none">
                  ₹
                </span>{" "}
                Pricing
              </h2>
              <div>
                <label className="block text-[13px] font-bold text-gray-700 mb-1.5">
                  Selling Price
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 font-medium">
                    ₹
                  </span>
                  <input
                    type="number"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    className={`${inputClass} pl-8`}
                    placeholder="0.00"
                  />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h2 className="text-base font-bold text-gray-900 mb-5 flex items-center gap-2">
                <Package size={18} className="text-[#612c7d]" /> Inventory
              </h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-[13px] font-bold text-gray-700 mb-1.5">
                    Stock Quantity
                  </label>
                  <input
                    type="number"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    className={inputClass}
                    placeholder="0"
                  />
                </div>
                <div>
                  <label className="block text-[13px] font-bold text-gray-700 mb-1.5">
                    Category
                  </label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className={inputClass}
                  >
                    <option value="">Select category...</option>
                    <option value="electronics">Electronics</option>
                    <option value="clothing">Clothing</option>
                    <option value="food">Food & Grocery</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#612c7d]/5 to-white rounded-xl shadow-sm border border-[#612c7d]/20 p-6">
              <div
                className="flex items-center justify-between cursor-pointer mb-4"
                onClick={() => setCalculateFees(!calculateFees)}
              >
                <h3 className="text-[13px] font-bold text-[#4a2160] uppercase tracking-wider">
                  Platform Fees (Amazon)
                </h3>
                {calculateFees ? (
                  <CheckSquare size={18} className="text-[#612c7d]" />
                ) : (
                  <Square size={18} className="text-gray-400" />
                )}
              </div>
              {calculateFees && (
                <div className="space-y-3 pt-2 animate-in fade-in duration-300">
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>FBA Fixed Fee:</span>
                    <span className="font-medium text-gray-800">
                      ₹{fbaFee.toFixed(2)}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>Referral Fee (12.5%):</span>
                    <span className="font-medium text-gray-800">
                      ₹{referralFee.toFixed(2)}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm font-bold text-gray-900 pt-3 border-t border-[#612c7d]/20 mt-2">
                    <span>Estimated Cost:</span>
                    <span className="text-[#612c7d]">
                      ₹{totalCost.toFixed(2)}
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };

  const ManageInventoryView = () => {
    const products = [
      {
        id: "PRD-001",
        name: "Wireless Earbuds",
        category: "Electronics",
        price: "₹2,499",
        stock: 45,
        status: "In Stock",
      },
      {
        id: "PRD-002",
        name: "Cotton T-Shirt",
        category: "Clothing",
        price: "₹599",
        stock: 12,
        status: "Low Stock",
      },
      {
        id: "PRD-003",
        name: "Gaming Mouse",
        category: "Electronics",
        price: "₹1,299",
        stock: 0,
        status: "Out of Stock",
      },
      {
        id: "PRD-004",
        name: "Yoga Mat",
        category: "Fitness",
        price: "₹899",
        stock: 150,
        status: "In Stock",
      },
    ];

    return (
      <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-6xl mx-auto w-full pb-10">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-6 gap-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 mb-1">
              Inventory Management
            </h1>
            <p className="text-sm text-gray-500">
              View and update your product catalog.
            </p>
          </div>
          <div className="relative">
            <Search
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              size={18}
            />
            <input
              type="text"
              placeholder="Search products..."
              className={`${inputClass} pl-10 w-full sm:w-64`}
            />
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-100 text-xs uppercase tracking-wider text-gray-500">
                  <th className="p-4 font-bold">Product</th>
                  <th className="p-4 font-bold">SKU</th>
                  <th className="p-4 font-bold">Price</th>
                  <th className="p-4 font-bold">Stock</th>
                  <th className="p-4 font-bold">Status</th>
                  <th className="p-4 font-bold text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="text-sm divide-y divide-gray-100">
                {products.map((p, i) => (
                  <tr key={i} className="hover:bg-gray-50/50 transition-colors">
                    <td className="p-4 flex items-center gap-3">
                      <div className="w-10 h-10 rounded bg-[#612c7d]/10 flex items-center justify-center text-[#612c7d]">
                        <ImageIcon size={18} />
                      </div>
                      <div>
                        <p className="font-bold text-gray-900">{p.name}</p>
                        <p className="text-xs text-gray-500">{p.category}</p>
                      </div>
                    </td>
                    <td className="p-4 text-gray-600 font-mono text-xs">
                      {p.id}
                    </td>
                    <td className="p-4 font-medium text-gray-900">{p.price}</td>
                    <td className="p-4 font-medium text-gray-600">{p.stock}</td>
                    <td className="p-4">
                      <span
                        className={`px-2.5 py-1 rounded-full text-[11px] font-bold ${
                          p.status === "In Stock"
                            ? "bg-green-100 text-green-700"
                            : p.status === "Low Stock"
                              ? "bg-orange-100 text-orange-700"
                              : "bg-red-100 text-red-700"
                        }`}
                      >
                        {p.status}
                      </span>
                    </td>
                    <td className="p-4 flex justify-end gap-2 text-gray-400">
                      <button className="hover:text-[#612c7d] transition-colors">
                        <Edit size={18} />
                      </button>
                      <button className="hover:text-red-500 transition-colors">
                        <Trash2 size={18} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  };

  const ManageOrdersView = () => {
    const orders = [
      {
        id: "#ORD-9932",
        date: "Oct 24, 2026",
        customer: "Rahul Sharma",
        total: "₹3,498",
        status: "Pending",
      },
      {
        id: "#ORD-9931",
        date: "Oct 23, 2026",
        customer: "Priya Patel",
        total: "₹599",
        status: "Shipped",
      },
      {
        id: "#ORD-9930",
        date: "Oct 22, 2026",
        customer: "Amit Singh",
        total: "₹12,450",
        status: "Delivered",
      },
      {
        id: "#ORD-9929",
        date: "Oct 21, 2026",
        customer: "Neha Gupta",
        total: "₹899",
        status: "Delivered",
      },
    ];

    return (
      <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-6xl mx-auto w-full pb-10">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-6 gap-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 mb-1">Orders</h1>
            <p className="text-sm text-gray-500">
              Track and fulfill your customer orders.
            </p>
          </div>
          <div className="flex gap-2">
            {["All", "Pending", "Shipped", "Delivered"].map((filter) => (
              <button
                key={filter}
                className="px-4 py-2 text-xs font-bold rounded-lg border border-gray-200 bg-white hover:bg-[#612c7d]/10 hover:text-[#612c7d] hover:border-[#612c7d]/30 transition-colors"
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-100 text-xs uppercase tracking-wider text-gray-500">
                  <th className="p-4 font-bold">Order ID</th>
                  <th className="p-4 font-bold">Date</th>
                  <th className="p-4 font-bold">Customer</th>
                  <th className="p-4 font-bold">Total</th>
                  <th className="p-4 font-bold">Status</th>
                  <th className="p-4 font-bold text-right">Action</th>
                </tr>
              </thead>
              <tbody className="text-sm divide-y divide-gray-100">
                {orders.map((o, i) => (
                  <tr key={i} className="hover:bg-gray-50/50 transition-colors">
                    <td className="p-4 font-bold text-[#612c7d]">{o.id}</td>
                    <td className="p-4 text-gray-500">{o.date}</td>
                    <td className="p-4 font-medium text-gray-900">
                      {o.customer}
                    </td>
                    <td className="p-4 font-bold text-gray-900">{o.total}</td>
                    <td className="p-4">
                      <span
                        className={`px-2.5 py-1 rounded-full text-[11px] font-bold flex w-fit items-center gap-1 ${
                          o.status === "Pending"
                            ? "bg-yellow-100 text-yellow-700"
                            : o.status === "Shipped"
                              ? "bg-blue-100 text-blue-700"
                              : "bg-green-100 text-green-700"
                        }`}
                      >
                        <div
                          className={`w-1.5 h-1.5 rounded-full ${o.status === "Pending" ? "bg-yellow-500" : o.status === "Shipped" ? "bg-blue-500" : "bg-green-500"}`}
                        ></div>
                        {o.status}
                      </span>
                    </td>
                    <td className="p-4 flex justify-end">
                      <button className="flex items-center gap-1 text-xs font-bold text-gray-500 hover:text-[#612c7d] transition-colors border border-gray-200 px-3 py-1.5 rounded-md hover:bg-[#612c7d]/10 hover:border-[#612c7d]/30">
                        <Eye size={14} /> View
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  };

  const ManageProfileView = () => (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-4xl mx-auto w-full pb-10">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-1">
          Profile Settings
        </h1>
        <p className="text-sm text-gray-500">
          Update your store details and personal info.
        </p>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
        <div className="flex flex-col sm:flex-row gap-8">
          {/* Avatar Section */}
          <div className="flex flex-col items-center gap-4">
            <div className="w-32 h-32 rounded-full bg-[#612c7d]/10 border-4 border-[#612c7d]/5 flex items-center justify-center relative group cursor-pointer overflow-hidden">
              <span className="text-4xl font-bold text-[#612c7d]">AK</span>
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <Camera className="text-white" size={28} />
              </div>
            </div>
            <button className="text-xs font-bold text-[#612c7d] hover:text-[#4a2160]">
              Change Logo
            </button>
          </div>

          {/* Form Section */}
          <div className="flex-1 space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-[13px] font-bold text-gray-700 mb-1.5">
                  First Name
                </label>
                <input
                  type="text"
                  defaultValue="Ajith"
                  className={inputClass}
                />
              </div>
              <div>
                <label className="block text-[13px] font-bold text-gray-700 mb-1.5">
                  Last Name
                </label>
                <input type="text" defaultValue="K" className={inputClass} />
              </div>
            </div>
            <div>
              <label className="block text-[13px] font-bold text-gray-700 mb-1.5">
                Store / Business Name
              </label>
              <input
                type="text"
                defaultValue="Ajith's Premium Store"
                className={inputClass}
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-[13px] font-bold text-gray-700 mb-1.5">
                  Email Address
                </label>
                <input
                  type="email"
                  defaultValue="ajith@example.com"
                  className={inputClass}
                />
              </div>
              <div>
                <label className="block text-[13px] font-bold text-gray-700 mb-1.5">
                  Phone Number
                </label>
                <input
                  type="tel"
                  defaultValue="+91 98765 43210"
                  className={inputClass}
                />
              </div>
            </div>
            <div className="pt-4 flex justify-end">
              <button className="bg-[#612c7d] hover:bg-[#4a2160] text-white px-6 py-2.5 rounded-lg text-sm font-bold shadow-md transition-all cursor-pointer">
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const ChangePasswordView = () => (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-2xl mx-auto w-full pb-10">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-1">Security</h1>
        <p className="text-sm text-gray-500">
          Ensure your account is using a long, random password to stay secure.
        </p>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
        <div className="space-y-5">
          <div>
            <label className="block text-[13px] font-bold text-gray-700 mb-1.5">
              Current Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className={inputClass}
            />
          </div>
          <hr className="border-gray-100 my-4" />
          <div>
            <label className="block text-[13px] font-bold text-gray-700 mb-1.5">
              New Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className={inputClass}
            />
          </div>
          <div>
            <label className="block text-[13px] font-bold text-gray-700 mb-1.5">
              Confirm New Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className={inputClass}
            />
          </div>
          <div className="pt-4 flex justify-end">
            <button className="bg-gray-900 hover:bg-black text-white px-6 py-2.5 rounded-lg text-sm font-bold shadow-md transition-all cursor-pointer">
              Update Password
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case "Dashboard":
        return <DashboardView />;
      case "Add Product":
        return <AddProductView />;
      case "Manage Inventory":
        return <ManageInventoryView />;
      case "Manage Orders":
        return <ManageOrdersView />;
      case "Manage Profile":
        return <ManageProfileView />;
      case "Change Password":
        return <ChangePasswordView />;
      default:
        return <DashboardView />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-50 font-sans overflow-hidden">
      {/* LEFT SIDEBAR  */}
      <aside className="w-[260px] bg-white border-r border-gray-200 flex flex-col shadow-sm shrink-0 z-10 h-screen">
        {/* Profile Section */}
         <div className="bg-gradient-to-br from-[#612c7d] to-[#4a2160] text-white pt-12 pb-8 flex flex-col items-center justify-center relative overflow-hidden">
                  <div className="absolute opacity-10 -right-4 -top-4">
                    <User size={100} />
                  </div>
                  <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full border-2 border-white/50 flex items-center justify-center mb-4 shadow-lg text-2xl font-bold">
                    AK
                  </div>
                  <h2 className="text-xl font-bold tracking-wide">Ajith K</h2>
                  <p className="text-sm font-medium text-[#c7a6e0] mt-1">
                    Seller Account
                  </p>
                </div>

        {/* Navigation Links */}
        <nav className="flex-1 px-4 py-6 space-y-1.5 overflow-y-auto">
          {sidebarLinks.map((link, index) => {
            const Icon = link.icon;
            const isActive = activeTab === link.label;

            return (
              <div
                key={index}
                onClick={() => setActiveTab(link.label)}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer transition-all duration-200 font-medium text-[14px] ${
                  isActive
                    ? "bg-[#612c7d]/10 text-[#612c7d]"
                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                }`}
              >
                <Icon
                  size={18}
                  className={isActive ? "text-[#612c7d]" : "text-gray-400"}
                />
                {link.label}
              </div>
            );
          })}
        </nav>

        {/* Sign Out Button Container */}
        <div className="p-4 mt-auto border-t border-gray-100">
          <button
            onClick={() => {
              console.log("User signing out...");
            }}
            className="flex cursor-pointer items-center justify-start w-full gap-3 px-4 py-3 font-medium text-[14px] text-red-600 transition-all duration-200 rounded-xl hover:bg-red-50"
          >
            <svg
              className="w-[18px] h-[18px]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
              />
            </svg>
            Sign Out
          </button>
        </div>
      </aside>

      {/* RIGHT MAIN CONTENT */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden">
        <header className="px-8 py-5 flex justify-end bg-white/50 backdrop-blur-sm border-b border-gray-100/50 sticky top-0 z-10">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg text-sm font-semibold text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors cursor-pointer shadow-sm bg-white"
          >
            <ArrowLeft size={16} />
            BACK TO HOME
          </button>
        </header>

        <div className="p-8 flex-1 overflow-y-auto">{renderContent()}</div>
      </main>
    </div>
  );
};

export default SellerDashboard;