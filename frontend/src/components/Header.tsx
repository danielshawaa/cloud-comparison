export default function Header() {
  return (
    <header className="bg-aws-dark text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
        <div className="flex items-center gap-4">
          <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-aws-orange text-white text-xl font-bold select-none">
            ☁
          </div>
          <div>
            <h1 className="text-2xl font-bold tracking-tight">
              AWS Service{' '}
              <span className="text-aws-orange">Comparison</span>
            </h1>
            <p className="text-gray-400 text-sm mt-0.5">
              Explore {' '}
              <span className="text-white font-medium">33 services</span>
              {' '}across Compute, Storage, Database, Networking, AI/ML, Security, Analytics &amp; DevOps
            </p>
          </div>
        </div>
      </div>
    </header>
  )
}
