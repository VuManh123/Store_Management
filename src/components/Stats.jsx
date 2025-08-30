import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Stats = () => {
    const [counters, setCounters] = useState({
        stores: 0,
        users: 0,
        transactions: 0,
        revenue: 0
    });

    const finalStats = {
        stores: 15000,
        users: 250000,
        transactions: 5000000,
        revenue: 150
    };

    const stats = [
        {
            key: 'stores',
            value: counters.stores,
            label: 'Cửa Hàng Tin Dùng',
            suffix: '+'
        },
        {
            key: 'users',
            value: counters.users,
            label: 'Người Dùng Hoạt Động',
            suffix: '+'
        },
        {
            key: 'transactions',
            value: counters.transactions,
            label: 'Giao Dịch Mỗi Tháng',
            suffix: '+'
        },
        {
            key: 'revenue',
            value: counters.revenue,
            label: 'Tỷ VNĐ Doanh Thu',
            suffix: '+'
        }
    ];

    useEffect(() => {
        const animateCounters = () => {
            Object.keys(finalStats).forEach(key => {
                let current = 0;
                const target = finalStats[key];
                const increment = target / 100;
                const timer = setInterval(() => {
                    current += increment;
                    if (current >= target) {
                        current = target;
                        clearInterval(timer);
                    }
                    setCounters(prev => ({
                        ...prev,
                        [key]: Math.floor(current)
                    }));
                }, 30);
            });
        };

        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    animateCounters();
                    observer.disconnect();
                }
            },
            { threshold: 0.5 }
        );

        const element = document.getElementById('stats-section');
        if (element) {
            observer.observe(element);
        }

        return () => observer.disconnect();
    }, []);

    const formatNumber = (num) => {
        if (num >= 1000000) {
            return (num / 1000000).toFixed(1) + 'M';
        } else if (num >= 1000) {
            return (num / 1000).toFixed(0) + 'K';
        }
        return num.toString();
    };

    return (
        <section id="stats-section" className="py-24 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 relative overflow-hidden">
            {/* Background decorations */}
            <div className="absolute inset-0">
                <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
                <div className="absolute top-20 right-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
                <div className="absolute bottom-20 left-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Được Tin Dùng Bởi{" "}
                        <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                            Hàng Nghìn
                        </span>{" "}
                        Doanh Nghiệp
                    </h2>
                    <p className="text-xl text-indigo-200 max-w-3xl mx-auto">
                        Tham gia cộng đồng doanh nghiệp đang phát triển mạnh mẽ với StoreManager
                    </p>
                </motion.div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.key}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            className="text-center group"
                        >
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300"
                            >
                                <div className="text-4xl lg:text-5xl font-bold text-white mb-2 font-mono">
                                    {stat.key === 'revenue' ? stat.value : formatNumber(stat.value)}
                                    <span className="text-yellow-400">{stat.suffix}</span>
                                </div>
                                <div className="text-indigo-200 font-medium text-lg">
                                    {stat.label}
                                </div>
                                
                                {/* Progress bar effect */}
                                <div className="mt-4 w-full bg-white/20 rounded-full h-1 overflow-hidden">
                                    <motion.div
                                        className="h-full bg-gradient-to-r from-yellow-400 to-orange-400"
                                        initial={{ width: "0%" }}
                                        whileInView={{ width: "100%" }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 1.5, delay: index * 0.2 }}
                                    />
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="text-center mt-20"
                >
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                        <div className="text-center">
                            <div className="text-2xl font-bold text-yellow-400 mb-2">99.9%</div>
                            <div className="text-indigo-200">Uptime</div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl font-bold text-yellow-400 mb-2">24/7</div>
                            <div className="text-indigo-200">Hỗ trợ khách hàng</div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl font-bold text-yellow-400 mb-2">4.9★</div>
                            <div className="text-indigo-200">Đánh giá trung bình</div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Stats;