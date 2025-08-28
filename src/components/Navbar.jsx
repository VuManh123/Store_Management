import React from "react";

const Navbar = () => {
    return (
        <nav className="flex justify-between items-center px-8 py-4 bg-white shadow-md fixed top-0 left-0 w-full z-50">
            <div className="text-2xl font-bold text-indigo-600">StoreManager</div>
            <div className="space-x-4">
                <button className="px-4 py-2 text-indigo-600 border border-indigo-600 rounded-xl hover:bg-indigo-600 hover:text-white transition">
                    Đăng nhập
                </button>
                <button className="px-4 py-2 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition">
                    Đăng ký
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
