export default function Footer() {
    return (
      <footer className="bg-white text-gray-800 font-semibold text-base py-8 mt-8 shadow-[0_-4px_6px_rgba(0,0,0,0.1)]">
        <div className="container mx-auto text-center">
          <h1 className="text-2xl font-semibold mb-4">Footer</h1>
          <p className="text-lg">Your company or website name here</p>
          <div className="flex justify-center space-x-6 mt-6">
            <a href="#" className="text-gray-800 hover:text-yellow-500 transition duration-300">Privacy Policy</a>
            <a href="#" className="text-gray-800 hover:text-yellow-500 transition duration-300">Terms of Service</a>
            <a href="#" className="text-gray-800 hover:text-yellow-500 transition duration-300">Contact Us</a>
          </div>
          <p className="text-sm mt-8">&copy; 2025  Malak . All rights reserved.</p>
        </div>
      </footer>
    );
}
