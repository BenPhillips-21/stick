export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Melbourne's trusted construction and carpentry specialists, delivering quality workmanship across all suburbs.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Stick Build Construction</h3>
            <div className="space-y-2 text-gray-300 text-sm">
              <p>Newport, Melbourne VIC</p>
              <p>Operating across all Melbourne suburbs</p>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <div className="space-y-3 text-sm">
              <a
                href="tel:0468347781"
                className="flex items-center gap-2 text-gray-300 hover:text-soft-peach transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 shrink-0">
                  <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clipRule="evenodd" />
                </svg>
                0468 347 781
              </a>
              <a
                href="mailto:info@stickbuild.com.au"
                className="flex items-center gap-2 text-gray-300 hover:text-soft-peach transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 shrink-0">
                  <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                  <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
                </svg>
                info@stickbuild.com.au
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-900 pt-6 text-center text-gray-400 text-sm">
          © 2025 Stick Build Construction. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
