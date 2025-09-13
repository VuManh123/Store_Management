import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
    EyeIcon, 
    EyeSlashIcon, 
    UserIcon, 
    LockClosedIcon,
    ArrowRightIcon,
    BuildingStorefrontIcon,
    PhoneIcon,
    CheckCircleIcon
} from "@heroicons/react/24/outline";

const Register = () => {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        storeName: "",
        password: "",
        confirmPassword: "",
        agreeTerms: false
    });
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [errors, setErrors] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [step, setStep] = useState(1);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
        
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ""
            }));
        }
    };

    const validateStep1 = () => {
        const newErrors = {};
        
        if (!formData.fullName.trim()) {
            newErrors.fullName = "Họ và tên không được để trống";
        } else if (formData.fullName.trim().length < 2) {
            newErrors.fullName = "Họ và tên phải có ít nhất 2 ký tự";
        }
        
        if (!formData.email) {
            newErrors.email = "Email không được để trống";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Email không hợp lệ";
        }
        
        if (!formData.phone) {
            newErrors.phone = "Số điện thoại không được để trống";
        } else if (!/^[0-9]{10,11}$/.test(formData.phone.replace(/\s/g, ''))) {
            newErrors.phone = "Số điện thoại không hợp lệ";
        }
        
        if (!formData.storeName.trim()) {
            newErrors.storeName = "Tên cửa hàng không được để trống";
        }
        
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const validateStep2 = () => {
        const newErrors = {};
        
        if (!formData.password) {
            newErrors.password = "Mật khẩu không được để trống";
        } else if (formData.password.length < 8) {
            newErrors.password = "Mật khẩu phải có ít nhất 8 ký tự";
        } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(formData.password)) {
            newErrors.password = "Mật khẩu phải chứa ít nhất 1 chữ hoa, 1 chữ thường và 1 số";
        }
        
        if (!formData.confirmPassword) {
            newErrors.confirmPassword = "Vui lòng xác nhận mật khẩu";
        } else if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = "Mật khẩu không khớp";
        }
        
        if (!formData.agreeTerms) {
            newErrors.agreeTerms = "Vui lòng đồng ý với điều khoản sử dụng";
        }
        
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleNextStep = () => {
        if (validateStep1()) {
            setStep(2);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!validateStep2()) return;
        
        setIsLoading(true);
        
        // Simulate API call
        try {
            await new Promise(resolve => setTimeout(resolve, 2000));
            // Handle successful registration here
            console.log("Registration successful", formData);
        } catch (error) {
            console.error("Registration failed", error);
        } finally {
            setIsLoading(false);
        }
    };

    const benefits = [
        "Dùng thử miễn phí 30 ngày",
        "Không cần thẻ tín dụng",
        "Hỗ trợ 24/7",
        "Thiết lập trong 5 phút"
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-indigo-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            {/* Background decorations */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
            </div>

            <div className="relative mt-10 max-w-md w-full space-y-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center"
                >
                    {/* Logo */}          
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">
                        Tạo tài khoản mới
                    </h2>
                    <p className="text-gray-600">
                        Bắt đầu hành trình quản lý cửa hàng thông minh
                    </p>

                    {/* Progress Bar */}
                    <div className="mt-6 mb-8">
                        <div className="flex items-center justify-center">
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                                step >= 1 ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-600'
                            }`}>
                                1
                            </div>
                            <div className={`w-16 h-1 mx-2 ${
                                step >= 2 ? 'bg-indigo-600' : 'bg-gray-200'
                            }`}></div>
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                                step >= 2 ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-600'
                            }`}>
                                2
                            </div>
                        </div>
                        <div className="flex justify-between text-xs text-gray-500 mt-2">
                            <span>Thông tin cá nhân</span>
                            <span>Bảo mật</span>
                        </div>
                    </div>
                </motion.div>

                {/* Form Container */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-white/20"
                >
                    {step === 1 ? (
                        /* Step 1: Personal Information */
                        <div className="space-y-6">
                            <div className="text-center mb-6">
                                <h3 className="text-xl font-semibold text-gray-900">Thông tin cơ bản</h3>
                                <p className="text-gray-600 text-sm">Vui lòng điền thông tin của bạn</p>
                            </div>

                            {/* Full Name */}
                            <div>
                                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                                    Họ và tên
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <UserIcon className="h-5 w-5 text-gray-400" />
                                    </div>
                                    <input
                                        id="fullName"
                                        name="fullName"
                                        type="text"
                                        value={formData.fullName}
                                        onChange={handleChange}
                                        className={`block w-full pl-10 pr-3 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 ${
                                            errors.fullName ? 'border-red-300 bg-red-50' : 'border-gray-300 bg-white'
                                        }`}
                                        placeholder="Nhập họ và tên"
                                    />
                                </div>
                                {errors.fullName && (
                                    <motion.p
                                        initial={{ opacity: 0, y: -5 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="mt-1 text-sm text-red-600"
                                    >
                                        {errors.fullName}
                                    </motion.p>
                                )}
                            </div>

                            {/* Email */}
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                    Email
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                                        </svg>
                                    </div>
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className={`block w-full pl-10 pr-3 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 ${
                                            errors.email ? 'border-red-300 bg-red-50' : 'border-gray-300 bg-white'
                                        }`}
                                        placeholder="Nhập email"
                                    />
                                </div>
                                {errors.email && (
                                    <motion.p
                                        initial={{ opacity: 0, y: -5 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="mt-1 text-sm text-red-600"
                                    >
                                        {errors.email}
                                    </motion.p>
                                )}
                            </div>

                            {/* Phone */}
                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                                    Số điện thoại
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <PhoneIcon className="h-5 w-5 text-gray-400" />
                                    </div>
                                    <input
                                        id="phone"
                                        name="phone"
                                        type="tel"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className={`block w-full pl-10 pr-3 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 ${
                                            errors.phone ? 'border-red-300 bg-red-50' : 'border-gray-300 bg-white'
                                        }`}
                                        placeholder="Nhập số điện thoại"
                                    />
                                </div>
                                {errors.phone && (
                                    <motion.p
                                        initial={{ opacity: 0, y: -5 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="mt-1 text-sm text-red-600"
                                    >
                                        {errors.phone}
                                    </motion.p>
                                )}
                            </div>

                            {/* Store Name */}
                            <div>
                                <label htmlFor="storeName" className="block text-sm font-medium text-gray-700 mb-2">
                                    Tên cửa hàng
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <BuildingStorefrontIcon className="h-5 w-5 text-gray-400" />
                                    </div>
                                    <input
                                        id="storeName"
                                        name="storeName"
                                        type="text"
                                        value={formData.storeName}
                                        onChange={handleChange}
                                        className={`block w-full pl-10 pr-3 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 ${
                                            errors.storeName ? 'border-red-300 bg-red-50' : 'border-gray-300 bg-white'
                                        }`}
                                        placeholder="Nhập tên cửa hàng"
                                    />
                                </div>
                                {errors.storeName && (
                                    <motion.p
                                        initial={{ opacity: 0, y: -5 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="mt-1 text-sm text-red-600"
                                    >
                                        {errors.storeName}
                                    </motion.p>
                                )}
                            </div>

                            {/* Next Button */}
                            <motion.button
                                type="button"
                                onClick={handleNextStep}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full flex justify-center py-3 px-4 border border-transparent text-lg font-semibold rounded-xl text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-200"
                            >
                                <div className="flex items-center">
                                    Tiếp tục
                                    <ArrowRightIcon className="ml-2 h-5 w-5" />
                                </div>
                            </motion.button>
                        </div>
                    ) : (
                        /* Step 2: Security */
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div className="text-center mb-6">
                                <h3 className="text-xl font-semibold text-gray-900">Thiết lập bảo mật</h3>
                                <p className="text-gray-600 text-sm">Tạo mật khẩu mạnh để bảo vệ tài khoản</p>
                            </div>

                            {/* Password */}
                            <div>
                                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                                    Mật khẩu
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <LockClosedIcon className="h-5 w-5 text-gray-400" />
                                    </div>
                                    <input
                                        id="password"
                                        name="password"
                                        type={showPassword ? "text" : "password"}
                                        value={formData.password}
                                        onChange={handleChange}
                                        className={`block w-full pl-10 pr-10 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 ${
                                            errors.password ? 'border-red-300 bg-red-50' : 'border-gray-300 bg-white'
                                        }`}
                                        placeholder="Nhập mật khẩu"
                                    />
                                    <button
                                        type="button"
                                        className="absolute inset-y-0 right-0 pr-3 flex items-center"
                                        onClick={() => setShowPassword(!showPassword)}
                                    >
                                        {showPassword ? (
                                            <EyeSlashIcon className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                                        ) : (
                                            <EyeIcon className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                                        )}
                                    </button>
                                </div>
                                {errors.password && (
                                    <motion.p
                                        initial={{ opacity: 0, y: -5 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="mt-1 text-sm text-red-600"
                                    >
                                        {errors.password}
                                    </motion.p>
                                )}
                            </div>

                            {/* Confirm Password */}
                            <div>
                                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-2">
                                    Xác nhận mật khẩu
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <LockClosedIcon className="h-5 w-5 text-gray-400" />
                                    </div>
                                    <input
                                        id="confirmPassword"
                                        name="confirmPassword"
                                        type={showConfirmPassword ? "text" : "password"}
                                        value={formData.confirmPassword}
                                        onChange={handleChange}
                                        className={`block w-full pl-10 pr-10 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 ${
                                            errors.confirmPassword ? 'border-red-300 bg-red-50' : 'border-gray-300 bg-white'
                                        }`}
                                        placeholder="Nhập lại mật khẩu"
                                    />
                                    <button
                                        type="button"
                                        className="absolute inset-y-0 right-0 pr-3 flex items-center"
                                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                    >
                                        {showConfirmPassword ? (
                                            <EyeSlashIcon className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                                        ) : (
                                            <EyeIcon className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                                        )}
                                    </button>
                                </div>
                                {errors.confirmPassword && (
                                    <motion.p
                                        initial={{ opacity: 0, y: -5 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="mt-1 text-sm text-red-600"
                                    >
                                        {errors.confirmPassword}
                                    </motion.p>
                                )}
                            </div>

                            {/* Benefits */}
                            <div className="bg-indigo-50 rounded-xl p-4">
                                <h4 className="text-sm font-medium text-indigo-900 mb-3">Bạn sẽ nhận được:</h4>
                                <ul className="space-y-2">
                                    {benefits.map((benefit, index) => (
                                        <li key={index} className="flex items-center text-sm text-indigo-700">
                                            <CheckCircleIcon className="h-4 w-4 text-indigo-500 mr-2 flex-shrink-0" />
                                            {benefit}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Terms Agreement */}
                            <div>
                                <div className="flex items-start">
                                    <input
                                        id="agreeTerms"
                                        name="agreeTerms"
                                        type="checkbox"
                                        checked={formData.agreeTerms}
                                        onChange={handleChange}
                                        className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded mt-1"
                                    />
                                    <label htmlFor="agreeTerms" className="ml-3 block text-sm text-gray-700">
                                        Tôi đồng ý với{' '}
                                        <Link to="/terms" className="text-indigo-600 hover:text-indigo-500 font-medium">
                                            Điều khoản sử dụng
                                        </Link>{' '}
                                        và{' '}
                                        <Link to="/privacy" className="text-indigo-600 hover:text-indigo-500 font-medium">
                                            Chính sách bảo mật
                                        </Link>
                                    </label>
                                </div>
                                {errors.agreeTerms && (
                                    <motion.p
                                        initial={{ opacity: 0, y: -5 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="mt-1 text-sm text-red-600"
                                    >
                                        {errors.agreeTerms}
                                    </motion.p>
                                )}
                            </div>

                            {/* Navigation Buttons */}
                            <div className="flex gap-4">
                                <motion.button
                                    type="button"
                                    onClick={() => setStep(1)}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="flex-1 py-3 px-4 border border-gray-300 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-200"
                                >
                                    Quay lại
                                </motion.button>

                                <motion.button
                                    type="submit"
                                    disabled={isLoading}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="flex-1 py-3 px-4 border border-transparent text-lg font-semibold rounded-xl text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
                                >
                                    {isLoading ? (
                                        <div className="flex items-center justify-center">
                                            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                                            Đang tạo...
                                        </div>
                                    ) : (
                                        "Tạo tài khoản"
                                    )}
                                </motion.button>
                            </div>
                        </form>
                    )}
                </motion.div>

                {/* Sign In Link */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-center"
                >
                    <p className="text-gray-600">
                        Đã có tài khoản?{' '}
                        <Link
                            to="/login"
                            className="font-medium text-indigo-600 hover:text-indigo-500 transition-colors duration-200"
                        >
                            Đăng nhập ngay
                        </Link>
                    </p>
                </motion.div>
            </div>
        </div>
    );
};

export default Register;