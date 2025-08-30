import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const isActive = (path) => location.pathname === path;

    return (
        <nav className="bg-white/95 backdrop-blur-sm shadow-lg fixed top-0 left-0 w-full z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <Link to="/" className="flex items-center space-x-2">
                        <motion.div
                            className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"
                            whileHover={{ scale: 1.05 }}
                        >
                            StoreManager
                        </motion.div>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        <Link
                            to="/"
                            className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                                isActive("/")
                                    ? "text-indigo-600 bg-indigo-50"
                                    : "text-gray-700 hover:text-indigo-600 hover:bg-gray-50"
                            }`}
                        >
                            Trang chủ
                        </Link>
                        <Link
                            to="/features"
                            className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                                isActive("/features")
                                    ? "text-indigo-600 bg-indigo-50"
                                    : "text-gray-700 hover:text-indigo-600 hover:bg-gray-50"
                            }`}
                        >
                            Tính năng
                        </Link>
                        <Link
                            to="/pricing"
                            className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                                isActive("/pricing")
                                    ? "text-indigo-600 bg-indigo-50"
                                    : "text-gray-700 hover:text-indigo-600 hover:bg-gray-50"
                            }`}
                        >
                            Bảng giá
                        </Link>
                    </div>

                    {/* Auth Buttons */}
                    <div className="hidden md:flex items-center space-x-4">
                        <Link
                            to="/login"
                            className="px-4 py-2 text-indigo-600 border border-indigo-600 rounded-lg hover:bg-indigo-600 hover:text-white transition-all duration-200 font-medium"
                        >
                            Đăng nhập
                        </Link>
                        <Link
                            to="/register"
                            className="px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 font-medium shadow-md hover:shadow-lg"
                        >
                            Đăng ký
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-700 hover:text-indigo-600 p-2"
                        >
                            {isOpen ? (
                                <XMarkIcon className="h-6 w-6" />
                            ) : (
                                <Bars3Icon className="h-6 w-6" />
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="md:hidden bg-white border-t border-gray-200"
                    >
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            <Link
                                to="/"
                                className={`block px-3 py-2 rounded-md text-base font-medium ${
                                    isActive("/")
                                        ? "text-indigo-600 bg-indigo-50"
                                        : "text-gray-700 hover:text-indigo-600 hover:bg-gray-50"
                                }`}
                                onClick={() => setIsOpen(false)}
                            >
                                Trang chủ
                            </Link>
                            <Link
                                to="/login"
                                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50"
                                onClick={() => setIsOpen(false)}
                            >
                                Đăng nhập
                            </Link>
                            <Link
                                to="/register"
                                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50"
                                onClick={() => setIsOpen(false)}
                            >
                                Đăng ký
                            </Link>
                        </div>
                    </motion.div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
