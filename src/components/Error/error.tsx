import { useState, useEffect } from 'react';
import { RefreshCw, Home, ArrowLeft, AlertTriangle, Wifi, WifiOff } from 'lucide-react';

export default function ErrorPage() {
    const [isOnline, setIsOnline] = useState(navigator.onLine !== false);
    const [glitchEffect, setGlitchEffect] = useState(false);

    useEffect(() => {
        const handleOnline = () => setIsOnline(true);
        const handleOffline = () => setIsOnline(false);

        window.addEventListener('online', handleOnline);
        window.addEventListener('offline', handleOffline);

        // Glitch effect animation
        const glitchInterval = setInterval(() => {
            setGlitchEffect(true);
            setTimeout(() => setGlitchEffect(false), 200);
        }, 3000);

        return () => {
            window.removeEventListener('online', handleOnline);
            window.removeEventListener('offline', handleOffline);
            clearInterval(glitchInterval);
        };
    }, []);

    const handleRefresh = () => {
        window.location.reload();
    };

    const handleGoHome = () => {
        window.location.href = '/';
    };

    const handleGoBack = () => {
        window.history.back();
    };

    return (
        <div className="min-h-90 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 flex items-center justify-center p-4 relative overflow-hidden rounded-md">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-pulse"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-pulse animation-delay-2000"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-4000"></div>
            </div>

            {[...Array(20)].map((_, i) => (
                <div
                    key={i}
                    className="absolute w-2 h-2 bg-gray-400 rounded-full opacity-30 animate-ping"
                    style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        animationDelay: `${Math.random() * 3}s`,
                        animationDuration: `${2 + Math.random() * 2}s`
                    }}
                ></div>
            ))}

            <div className="relative z-10 text-center max-w-2xl mx-auto">
                <div className="mb-8 relative">
                    <div className={`inline-flex items-center justify-center w-32 h-32 bg-gradient-to-br from-red-500 to-pink-600 rounded-full shadow-2xl transform transition-all duration-300 hover:scale-110 ${glitchEffect ? 'animate-pulse' : ''}`}>
                        <AlertTriangle className="w-16 h-16 text-white animate-bounce" />
                    </div>

                    {glitchEffect && (
                        <div className="absolute inset-0 w-32 h-32 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full mix-blend-multiply opacity-70 animate-ping mx-auto"></div>
                    )}
                </div>

                <div className="mb-6">
                    <h1 className="text-8xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 animate-pulse">
                        ERROR
                    </h1>
                    <div className="text-2xl md:text-3xl font-bold text-gray-800 mt-2 tracking-wider">
                        Something went wrong
                    </div>
                </div>

                {/* Error Message */}
                <div className="mb-8 bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 shadow-lg">
                    <p className="text-gray-600 text-lg leading-relaxed">
                        We're experiencing some technical difficulties. Our team has been notified and is working to resolve the issue.
                    </p>

                    {/* Connection Status */}
                    <div className="mt-4 flex items-center justify-center gap-2 text-sm">
                        {isOnline ? (
                            <>
                                <Wifi className="w-4 h-4 text-green-500" />
                                <span className="text-green-500">Connected</span>
                            </>
                        ) : (
                            <>
                                <WifiOff className="w-4 h-4 text-red-500" />
                                <span className="text-red-500">No connection</span>
                            </>
                        )}
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <button
                        onClick={handleRefresh}
                        className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-3 min-w-[180px]"
                    >
                        <RefreshCw className="w-5 h-5 group-hover:rotate-180 transition-transform duration-500" />
                        Try Again
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                    </button>

                    <button
                        onClick={handleGoHome}
                        className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-3 min-w-[180px]"
                    >
                        <Home className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                        Go Home
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                    </button>

                    <button
                        onClick={handleGoBack}
                        className="group relative px-8 py-4 bg-gradient-to-r from-gray-600 to-gray-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-3 min-w-[180px]"
                    >
                        <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
                        Go Back
                        <div className="absolute inset-0 bg-gradient-to-r from-gray-600 to-gray-700 rounded-xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                    </button>
                </div>

                {/* Support Link */}
                <div className="mt-8 text-center">
                    <p className="text-gray-500 text-sm">
                        Need help?
                        <a
                            href="mailto:support@example.com"
                            className="text-purple-600 hover:text-purple-700 ml-1 underline hover:no-underline transition-colors duration-300"
                        >
                            Contact Support
                        </a>
                    </p>
                </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-10 left-10 w-20 h-20 border-2 border-purple-300/50 rounded-full animate-spin"></div>
            <div className="absolute bottom-10 right-10 w-16 h-16 border-2 border-pink-300/50 rounded-full animate-spin animation-delay-1000" style={{ animationDirection: 'reverse' }}></div>
            <div className="absolute top-1/2 left-10 w-12 h-12 border-2 border-blue-300/50 rounded-full animate-spin animation-delay-2000"></div>
        </div>
    );
}