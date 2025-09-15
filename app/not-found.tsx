import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
        <p className="text-gray-300 mb-8">
          The page you're looking for doesn't exist.
        </p>
        <Link 
          href="/"
          className="px-8 py-4 bg-white text-black font-semibold rounded-lg hover:bg-gray-100 transition-colors inline-block"
        >
          Go Home
        </Link>
      </div>
    </div>
  )
}