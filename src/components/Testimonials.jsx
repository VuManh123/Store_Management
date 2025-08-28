import React from "react";
import { motion } from "framer-motion";
import { StarIcon } from "@heroicons/react/24/solid";

const Testimonials = () => {
    const testimonials = [
        {
            name: "Nguyễn Thị Mai",
            position: "Chủ cửa hàng thời trang",
            company: "Mai Fashion Store",
            content: "StoreManager đã giúp tôi tiết kiệm 70% thời gian quản lý hàng tồn kho. Giao diện dễ sử dụng và báo cáo rất chi tiết. Tôi có thể theo dõi doanh thu theo thời gian thực!",
            avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
            rating: 5
        },
        {
            name: "Trần Văn Hoàng",
            position: "Giám đốc",
            company: "Hoàng Electronics",
            content: "Từ khi sử dụng StoreManager, doanh thu của cửa hàng điện tử tăng 45%. Tính năng AI dự đoán xu hướng giúp tôi nhập hàng đúng thời điểm và tối ưu lợi nhuận.",
            avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            rating: 5
        },
        {
            name: "Lê Thị Hương",
            position: "Quản lý chuỗi",
            company: "Hương Bakery Chain",
            content: "Quản lý 8 cửa hàng bánh từ chưa bao giờ dễ dàng đến thế. Dashboard tổng quan giúp tôi nắm bắt tình hình toàn bộ chuỗi chỉ trong vài phút. Tuyệt vời!",
            avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            rating: 5
        },
        {
            name: "Phạm Minh Đức",
            position: "Chủ cửa hàng",
            company: "Đức Mobile Store",
            content: "Tính năng quản lý nhân viên và phân quyền rất hữu ích. Tôi có thể theo dõi hiệu suất bán hàng của từng nhân viên và đưa ra chính sách khuyến khích phù hợp.",
            avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
            rating: 5
        },
        {
            name: "Võ Thị Lan",
            position: "Chủ doanh nghiệp",
            company: "Lan Cosmetics",
            content: "Báo cáo tài chính tự động và chuẩn xác giúp tôi tiết kiệm chi phí thuê kế toán. Hệ thống bảo mật cao, tôi hoàn toàn yên tâm về an toàn dữ liệu.",
            avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80",
            rating: 5
        },
        {
            name: "Đỗ Văn Thành",
            position: "Giám đốc kinh doanh",
            company: "Thành Sports",
            content: "App mobile rất tiện lợi, tôi có thể quản lý cửa hàng thể thao mọi lúc mọi nơi. Thông báo realtime giúp tôi xử lý các vấn đề kịp thời ngay cả khi đang đi công tác.",
            avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
            rating: 5
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
        hidden: { y: 30, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6
            }
        }
    };

    return (
        <section className="py-24 bg-gray-50">
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
                        Khách Hàng{" "}
                        <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                            Nói Gì
                        </span>{" "}
                        Về Chúng Tôi
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Hàng nghìn doanh nghiệp đã tin tưởng và thành công cùng StoreManager
                    </p>
                </motion.div>

                {/* Testimonials Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{ 
                                scale: 1.02,
                                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                            }}
                            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
                        >
                            {/* Stars */}
                            <div className="flex mb-6">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <StarIcon key={i} className="h-5 w-5 text-yellow-400" />
                                ))}
                            </div>

                            {/* Content */}
                            <blockquote className="text-gray-700 mb-8 leading-relaxed">
                                "{testimonial.content}"
                            </blockquote>

                            {/* Author */}
                            <div className="flex items-center">
                                <img
                                    src={testimonial.avatar}
                                    alt={testimonial.name}
                                    className="h-12 w-12 rounded-full object-cover mr-4"
                                />
                                <div>
                                    <div className="font-bold text-gray-900">{testimonial.name}</div>
                                    <div className="text-sm text-gray-600">{testimonial.position}</div>
                                    <div className="text-sm text-indigo-600 font-medium">{testimonial.company}</div>
                                </div>
                            </div>

                            {/* Decorative quote */}
                            <div className="absolute top-6 right-6 text-indigo-100 text-6xl font-serif">"</div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Bottom Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="mt-20 text-center"
                >
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                        <div className="p-6 bg-white rounded-xl shadow-md">
                            <div className="text-3xl font-bold text-indigo-600 mb-2">4.9/5</div>
                            <div className="text-gray-600">Đánh giá trung bình</div>
                            <div className="flex justify-center mt-2">
                                {[...Array(5)].map((_, i) => (
                                    <StarIcon key={i} className="h-4 w-4 text-yellow-400" />
                                ))}
                            </div>
                        </div>
                        <div className="p-6 bg-white rounded-xl shadow-md">
                            <div className="text-3xl font-bold text-purple-600 mb-2">98%</div>
                            <div className="text-gray-600">Khách hàng hài lòng</div>
                        </div>
                        <div className="p-6 bg-white rounded-xl shadow-md">
                            <div className="text-3xl font-bold text-pink-600 mb-2">15K+</div>
                            <div className="text-gray-600">Đánh giá tích cực</div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Testimonials;