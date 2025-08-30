import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Footer = () => {
    const navigation = {
        product: [
            { name: 'Tính năng', href: '/features' },
            { name: 'Bảng giá', href: '/pricing' },
            { name: 'Demo', href: '/demo' },
            { name: 'API', href: '/api' },
        ],
        company: [
            { name: 'Về chúng tôi', href: '/about' },
            { name: 'Blog', href: '/blog' },
            { name: 'Tuyển dụng', href: '/careers' },
            { name: 'Báo chí', href: '/press' },
        ],
        support: [
            { name: 'Trung tâm trợ giúp', href: '/help' },
            { name: 'Liên hệ', href: '/contact' },
            { name: 'Trạng thái hệ thống', href: '/status' },
            { name: 'Cộng đồng', href: '/community' },
        ],
        legal: [
            { name: 'Chính sách bảo mật', href: '/privacy' },
            { name: 'Điều khoản sử dụng', href: '/terms' },
            { name: 'Cookies', href: '/cookies' },
            { name: 'Bảo mật', href: '/security' },
        ],
    };

    const socialLinks = [
        {
            name: 'Facebook',
            href: '#',
            icon: (
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
            ),
        },
        {
            name: 'Instagram',
            href: '#',
            icon: (
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.014 5.367 18.647.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.342-1.384C4.113 14.61 3.624 13.459 3.624 12.162s.49-2.448 1.383-3.342C5.901 7.926 7.052 7.437 8.349 7.437s2.448.49 3.342 1.383c.894.894 1.383 2.045 1.383 3.342s-.49 2.448-1.383 3.342c-.894.894-2.045 1.383-3.342 1.383zm7.718-1.383c-.894.894-2.045 1.383-3.342 1.383s-2.448-.49-3.342-1.383c-.894-.894-1.383-2.045-1.383-3.342s.49-2.448 1.383-3.342c.894-.894 2.045-1.383 3.342-1.383s2.448.49 3.342 1.383c.894.894 1.383 2.045 1.383 3.342s-.49 2.448-1.383 3.342z" clipRule="evenodd" />
                </svg>
            ),
        },
        {
            name: 'Twitter',
            href: '#',
            icon: (
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
            ),
        },
        {
            name: 'LinkedIn',
            href: '#',
            icon: (
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                </svg>
            ),
        },
    ];

    return (
        <footer className="bg-gray-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
                    {/* Brand Section */}
                    <div className="lg:col-span-2">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <Link to="/" className="flex items-center space-x-2 mb-6">
                                <div className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                                    StoreManager
                                </div>
                            </Link>
                            <p className="text-gray-400 mb-6 leading-relaxed">
                                Giải pháp quản lý cửa hàng thông minh, giúp doanh nghiệp tối ưu hóa 
                                hoạt động và tăng trưởng bền vững.
                            </p>
                            
                            {/* Newsletter Signup */}
                            <div>
                                <h4 className="text-lg font-semibold mb-3">Nhận tin tức mới nhất</h4>
                                <div className="flex">
                                    <input
                                        type="email"
                                        placeholder="Email của bạn"
                                        className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-l-lg focus:outline-none focus:border-indigo-500 text-white"
                                    />
                                    <button className="px-6 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-r-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-300">
                                        Đăng ký
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Product Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                    >
                        <h3 className="text-lg font-semibold mb-4">Sản phẩm</h3>
                        <ul className="space-y-3">
                            {navigation.product.map((item) => (
                                <li key={item.name}>
                                    <Link
                                        to={item.href}
                                        className="text-gray-400 hover:text-white transition-colors duration-200"
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Company Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <h3 className="text-lg font-semibold mb-4">Công ty</h3>
                        <ul className="space-y-3">
                            {navigation.company.map((item) => (
                                <li key={item.name}>
                                    <Link
                                        to={item.href}
                                        className="text-gray-400 hover:text-white transition-colors duration-200"
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Support Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        <h3 className="text-lg font-semibold mb-4">Hỗ trợ</h3>
                        <ul className="space-y-3">
                            {navigation.support.map((item) => (
                                <li key={item.name}>
                                    <Link
                                        to={item.href}
                                        className="text-gray-400 hover:text-white transition-colors duration-200"
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Legal Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <h3 className="text-lg font-semibold mb-4">Pháp lý</h3>
                        <ul className="space-y-3">
                            {navigation.legal.map((item) => (
                                <li key={item.name}>
                                    <Link
                                        to={item.href}
                                        className="text-gray-400 hover:text-white transition-colors duration-200"
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>

                {/* Contact Info */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="mt-12 pt-8 border-t border-gray-800"
                >
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div>
                            <h4 className="text-lg font-semibold mb-3">Liên hệ</h4>
                            <div className="text-gray-400 space-y-2">
                                <p>📧 support@storemanager.vn</p>
                                <p>📞 1900 123 456</p>
                                <p>📍 123 Đường ABC, Quận 1, TP.HCM</p>
                            </div>
                        </div>
                        
                        <div>
                            <h4 className="text-lg font-semibold mb-3">Giờ làm việc</h4>
                            <div className="text-gray-400 space-y-2">
                                <p>Thứ 2 - Thứ 6: 8:00 - 18:00</p>
                                <p>Thứ 7: 8:00 - 12:00</p>
                                <p>Chủ nhật: Nghỉ</p>
                            </div>
                        </div>

                        <div>
                            <h4 className="text-lg font-semibold mb-3">Theo dõi chúng tôi</h4>
                            <div className="flex space-x-4">
                                {socialLinks.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        className="text-gray-400 hover:text-white transition-colors duration-200 transform hover:scale-110"
                                    >
                                        <span className="sr-only">{item.name}</span>
                                        {item.icon}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Bottom Bar */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center"
                >
                    <p className="text-gray-400 text-sm">
                        © 2024 StoreManager. Tất cả quyền được bảo lưu.
                    </p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <span className="text-gray-400 text-sm">Made with ❤️ in Vietnam</span>
                    </div>
                </motion.div>
            </div>
        </footer>
    );
};

export default Footer;