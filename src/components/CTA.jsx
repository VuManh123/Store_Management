import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
    RocketLaunchIcon, 
    PhoneIcon, 
    CheckCircleIcon,
    SparklesIcon 
} from "@heroicons/react/24/outline";

const CTA = () => {
    const benefits = [
        "Dùng thử miễn phí 30 ngày",
        "Không cần thẻ tín dụng",
        "Hỗ trợ 24/7",
        "Thiết lập trong 5 phút"
    ];

    return (
        <section className="relative py-24 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0">
                <div className="absolute top-0 left-0 w-full h-full opacity-20">
                    <div className="absolute top-20 left-20 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
                    <div className="absolute top-40 right-20 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
                    <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
                </div>
                
                {/* Grid Pattern - CAN BO SUNG*/}
                <div className="absolute inset-0"></div>
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    {/* Main CTA Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl mx-auto mb-16"
                    >
                        {/* Badge */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                            className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-yellow-400/20 text-yellow-300 border border-yellow-400/30 mb-8"
                        >
                            <SparklesIcon className="h-4 w-4 mr-2" />
                            Ưu đãi đặc biệt cho 100 khách hàng đầu tiên
                        </motion.div>

                        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                            Sẵn Sàng{" "}
                            <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                                Thay Đổi
                            </span>{" "}
                            Cách Quản Lý?
                        </h2>

                        <p className="text-xl text-indigo-200 mb-12 max-w-3xl mx-auto leading-relaxed">
                            Hàng nghìn doanh nghiệp đã tăng trưởng mạnh mẽ cùng StoreManager. 
                            Đến lượt bạn trải nghiệm sự khác biệt ngay hôm nay!
                        </p>

                        {/* Benefits List */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-4xl mx-auto"
                        >
                            {benefits.map((benefit, index) => (
                                <div key={index} className="flex items-center text-indigo-200">
                                    <CheckCircleIcon className="h-5 w-5 text-green-400 mr-2 flex-shrink-0" />
                                    <span className="text-sm font-medium">{benefit}</span>
                                </div>
                            ))}
                        </motion.div>

                        {/* CTA Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.6, duration: 0.8 }}
                            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
                        >
                            <Link
                                to="/register"
                                className="group relative px-10 py-5 bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 rounded-2xl text-lg font-bold transition-all duration-300 hover:from-yellow-300 hover:to-orange-400 hover:scale-105 hover:shadow-2xl inline-flex items-center"
                            >
                                <RocketLaunchIcon className="h-6 w-6 mr-3 group-hover:animate-bounce" />
                                Bắt Đầu Miễn Phí Ngay
                                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-yellow-400 to-orange-500 opacity-0 group-hover:opacity-100 blur transition-opacity duration-300"></div>
                            </Link>

                            <button className="group inline-flex items-center px-8 py-5 border-2 border-white/30 text-white rounded-2xl text-lg font-semibold hover:border-white hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
                                <PhoneIcon className="h-6 w-6 mr-3" />
                                Tư Vấn Miễn Phí
                            </button>
                        </motion.div>
                    </motion.div>

                    {/* Trust Indicators */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.8, duration: 0.8 }}
                        className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
                    >
                        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                            <div className="text-3xl font-bold text-yellow-400 mb-2">⚡</div>
                            <h3 className="text-xl font-bold text-white mb-2">Thiết Lập Nhanh</h3>
                            <p className="text-indigo-200">
                                Chỉ 5 phút để có hệ thống quản lý hoàn chỉnh
                            </p>
                        </div>

                        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                            <div className="text-3xl font-bold text-yellow-400 mb-2">🔒</div>
                            <h3 className="text-xl font-bold text-white mb-2">Bảo Mật Tuyệt Đối</h3>
                            <p className="text-indigo-200">
                                Mã hóa 256-bit và tuân thủ tiêu chuẩn quốc tế
                            </p>
                        </div>

                        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                            <div className="text-3xl font-bold text-yellow-400 mb-2">🎯</div>
                            <h3 className="text-xl font-bold text-white mb-2">Hỗ Trợ 24/7</h3>
                            <p className="text-indigo-200">
                                Đội ngũ chuyên gia sẵn sàng hỗ trợ mọi lúc
                            </p>
                        </div>
                    </motion.div>

                    {/* Bottom Text */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 1, duration: 0.8 }}
                        className="mt-12 text-indigo-300 text-sm max-w-2xl mx-auto"
                    >
                        * Không cần thẻ tín dụng. Hủy bất cứ lúc nào. 
                        Dữ liệu của bạn được bảo vệ tuyệt đối theo chính sách bảo mật.
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default CTA;