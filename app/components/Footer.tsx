import Link from "next/link"
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p>Made with ❤️ by Srushti Raste</p>
          </div>
          <div className="flex space-x-4">
            <Link href="https://github.com/ssraste" className="hover:text-blue-400 transition duration-300">
              <FaGithub size={24} />
            </Link>
            <Link href="https://linkedin.com/in/srushti-raste" className="hover:text-blue-400 transition duration-300">
              <FaLinkedin size={24} />
            </Link>
            <Link href="mailto:sru@bu.edu" className="hover:text-blue-400 transition duration-300">
              <FaEnvelope size={24} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

