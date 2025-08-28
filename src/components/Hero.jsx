import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
    return (
        <section className="flex flex-col items-center justify-center text-center min-h-screen bg-gray-50 pt-20">
            <motion.h1
                className="text-5xl font-extrabold text-gray-800 mb-6"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                Quản Lý Cửa Hàng Dễ Dàng
            </motion.h1>

            <motion.p
                className="text-lg text-gray-600 max-w-2xl mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
            >
                Dự án này giúp bạn quản lý tồn kho, chi phí, doanh thu và nhân viên một cách hiệu quả.
                Hãy bắt đầu ngay hôm nay để tối ưu hoạt động kinh doanh!
            </motion.p>

            <motion.div
                className="flex gap-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.8 }}
            >
                <button className="px-6 py-3 bg-indigo-600 text-white rounded-xl text-lg font-semibold hover:bg-indigo-700 transition">
                    Bắt đầu ngay
                </button>
                <button className="px-6 py-3 border border-indigo-600 text-indigo-600 rounded-xl text-lg font-semibold hover:bg-indigo-600 hover:text-white transition">
                    Tìm hiểu thêm
                </button>
            </motion.div>
        </section>
    );
};

export default Hero;
