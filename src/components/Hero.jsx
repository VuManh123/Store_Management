import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { PlayIcon, ChartBarIcon, ShoppingBagIcon, UserGroupIcon } from "@heroicons/react/24/outline";

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 via-white to-purple-50 overflow-hidden">
            {/* Background decorations */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                <div className="absolute top-40 left-40 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto"
                >
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800 mb-8"
                    >
                        <span className="relative flex h-2 w-2 mr-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                        </span>
                        Mới: Phiên bản 2.0 với AI tích hợp
                    </motion.div>

                    {/* Main heading */}
                    <motion.h1
                        className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                    >
                        Quản Lý Cửa Hàng{" "}
                        <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                            Thông Minh
                        </span>
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.p
                        className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                    >
                        Tối ưu hóa hoạt động kinh doanh với công nghệ AI tiên tiến. 
                        Quản lý tồn kho, doanh thu, nhân viên một cách dễ dàng và hiệu quả.
                    </motion.p>

                    {/* CTA buttons */}
                    <motion.div
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7, duration: 0.8 }}
                    >
                        <Link
                            to="/register"
                            className="group relative px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl text-lg font-semibold transition-all duration-300 hover:from-indigo-700 hover:to-purple-700 hover:scale-105 hover:shadow-xl inline-flex items-center"
                        >
                            Bắt đầu miễn phí
                            <motion.div
                                className="ml-2"
                                animate={{ x: [0, 4, 0] }}
                                transition={{ repeat: Infinity, duration: 1.5 }}
                            >
                                →
                            </motion.div>
                            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 group-hover:opacity-100 blur transition-opacity duration-300"></div>
                        </Link>

                        <button className="group inline-flex items-center px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-xl text-lg font-semibold hover:border-indigo-600 hover:text-indigo-600 transition-all duration-300">
                            <PlayIcon className="h-5 w-5 mr-2 group-hover:text-indigo-600" />
                            Xem demo
                        </button>
                    </motion.div>

                    {/* Feature highlights */}
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.9, duration: 0.8 }}
                    >
                        <div className="flex items-center justify-center space-x-3 text-gray-600">
                            <div className="p-2 bg-indigo-100 rounded-lg">
                                <ChartBarIcon className="h-6 w-6 text-indigo-600" />
                            </div>
                            <span className="font-medium">Báo cáo thông minh</span>
                        </div>
                        <div className="flex items-center justify-center space-x-3 text-gray-600">
                            <div className="p-2 bg-purple-100 rounded-lg">
                                <ShoppingBagIcon className="h-6 w-6 text-purple-600" />
                            </div>
                            <span className="font-medium">Quản lý tồn kho</span>
                        </div>
                        <div className="flex items-center justify-center space-x-3 text-gray-600">
                            <div className="p-2 bg-pink-100 rounded-lg">
                                <UserGroupIcon className="h-6 w-6 text-pink-600" />
                            </div>
                            <span className="font-medium">Quản lý nhân viên</span>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
