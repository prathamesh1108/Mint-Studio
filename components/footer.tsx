import Link from "next/link"

export default function Footer() {
  return (
<footer className="py-5 bg-[#FEF3E2] border-t border-neutral-200">
<div className="container-custom">
  <div className="flex flex-col md:flex-row justify-between items-center">
    <div className="mb-4 md:mb-0">
      <Link href="/" className="font-bold text-lg">
        Mint Studio
      </Link>
      <p className="text-neutral-600 text-sm mt-1">© {new Date().getFullYear()} All Rights Reserved</p>
    </div>
    <div className="flex space-x-6">
      <Link href="/portfolio" className="text-neutral-600 hover:text-neutral-900">
        Portfolio
      </Link>
      <Link href="/services" className="text-neutral-600 hover:text-neutral-900">
        Services
      </Link>
      <Link href="/contact" className="text-neutral-600 hover:text-neutral-900">
        Contact
      </Link>
    </div>
  </div>
</div>
</footer>
)
}