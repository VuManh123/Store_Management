import React from "react";
import { motion } from "framer-motion";
import { 
    ChartBarIcon, 
    ShoppingBagIcon, 
    UserGroupIcon, 
    CurrencyDollarIcon,
    ClockIcon,
    ShieldCheckIcon,
    CpuChipIcon,
    DevicePhoneMobileIcon 
} from "@heroicons/react/24/outline";

const Features = () => {
    const features = [
        {
            icon: ChartBarIcon,
            title: "Báo Cáo Thông Minh",
            description: "Dashboard trực quan với biểu đồ và thống kê chi tiết giúp bạn theo dõi hiệu quả kinh doanh.",
            color: "from-blue-500 to-indigo-600"
        },
        {
            icon: ShoppingBagIcon,
            title: "Quản Lý Tồn Kho",
            description: "Theo dõi sản phẩm, cảnh báo hết hàng tự động và tối ưu hóa quy trình nhập xuất kho.",
            color: "from-purple-500 to-pink-600"
        },
        {
            icon: UserGroupIcon,
            title: "Quản Lý Nhân Viên",
            description: "Phân quyền người dùng, theo dõi hiệu suất làm việc và quản lý lịch làm việc hiệu quả.",
            color: "from-green-500 to-teal-600"
        },
        {
            icon: CurrencyDollarIcon,
            title: "Quản Lý Tài Chính",
            description: "Theo dõi doanh thu, chi phí, lợi nhuận và tạo báo cáo tài chính chuyên nghiệp.",
            color: "from-yellow-500 to-orange-600"
        },
        {
            icon: ClockIcon,
            title: "Tiết Kiệm Thời Gian",
            description: "Tự động hóa các tác vụ lặp lại và quy trình quản lý để tăng hiệu quả công việc.",
            color: "from-red-500 to-pink-600"
        },
        {
            icon: ShieldCheckIcon,
            title: "Bảo Mật Cao",
            description: "Mã hóa dữ liệu end-to-end, sao lưu tự động và tuân thủ tiêu chuẩn bảo mật quốc tế.",
            color: "from-indigo-500 to-purple-600"
        },
        {
            icon: CpuChipIcon,
            title: "AI Tích Hợp",
            description: "Công nghệ AI dự đoán xu hướng, tối ưu hóa giá và đưa ra gợi ý kinh doanh thông minh.",
            color: "from-cyan-500 to-blue-600"
        },
        {
            icon: DevicePhoneMobileIcon,
            title: "Đa Nền Tảng",
            description: "Sử dụng trên mọi thiết bị - desktop, tablet, mobile với giao diện responsive.",
            color: "from-emerald-500 to-green-600"
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6
            }
        }
    };

    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Tính Năng{" "}
                        <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                            Vượt Trội
                        </span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Khám phá bộ tính năng toàn diện giúp bạn quản lý cửa hàng một cách chuyên nghiệp và hiệu quả
                    </p>
                </motion.div>

                {/* Features Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                >
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{ 
                                scale: 1.05,
                                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                            }}
                            className="group relative p-8 bg-white rounded-2xl border border-gray-100 hover:border-transparent transition-all duration-300 cursor-pointer"
                        >
                            {/* Gradient Background on Hover */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}></div>
                            
                            {/* Icon */}
                            <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${feature.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                <feature.icon className="h-6 w-6 text-white" />
                            </div>

                            {/* Content */}
                            <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-gray-900">
                                {feature.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed group-hover:text-gray-700">
                                {feature.description}
                            </p>

                            {/* Hover Effect Arrow */}
                            <div className="mt-6 inline-flex items-center text-sm font-medium text-transparent group-hover:text-indigo-600 transition-colors duration-300">
                                Tìm hiểu thêm
                                <motion.div
                                    className="ml-2"
                                    initial={{ x: -5, opacity: 0 }}
                                    whileHover={{ x: 0, opacity: 1 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    →
                                </motion.div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-center mt-16"
                >
                    <p className="text-lg text-gray-600 mb-6">
                        Sẵn sàng khám phá tất cả tính năng?
                    </p>
                    <button className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                        Xem Demo Miễn Phí
                    </button>
                </motion.div>
            </div>
        </section>
    );
};

export default Features;