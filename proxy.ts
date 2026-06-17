import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const BLOCKED_EXTENSIONS =
  /\.(sql|sqlite|sqlite3|db|dump|tgz|zip|7z|rar|bak|backup|old|orig|copy|swp|tmp|pem|key|crt|pfx|p12|log|env)$/i

const BLOCKED_PATHS = [
  /^\/\.env(\..*)?$/,
  /^\/\.git\//,
  /^\/\.svn\//,
  /^\/\.htaccess$/,
  /^\/\.htpasswd$/,
  /^\/web\.config$/,
  /^\/backup\//,
  /^\/backups\//,
  /^\/db\//,
  /^\/database\//,
  /^\/dump\//,
  /^\/dumps\//,
  /^\/sql\//,
  /^\/tmp\//,
  /^\/temp\//,
  /^\/logs\//,
  /^\/phpmyadmin\//,
  /^\/pma\//,
  /^\/adminer\//,
  /^\/adminer\.php$/,
  /^\/wp-admin\//,
  /^\/wp-login\.php$/,
  /^\/wp-config\.php$/,
  /^\/xmlrpc\.php$/,
  /^\/wp-content\//,
  /^\/wp-includes\//,
  /^\/admin\//,
  /^\/administrator\//,
  /^\/\.DS_Store$/,
  /^\/Thumbs\.db$/i,
]

export function proxy(request: NextRequest) {
  // 1. Geo block — allow AU only (header is set by Netlify; absent on local dev)
  const country = request.headers.get('x-nf-country')
  if (country !== null && country !== 'AU') {
    return new Response(null, { status: 403 })
  }

  const { pathname } = request.nextUrl

  // 2. Block sensitive file extensions (including multi-part .tar.gz / .tar.bz2 / .tar.xz)
  if (
    BLOCKED_EXTENSIONS.test(pathname) ||
    /\.tar$/.test(pathname) ||
    /\.tar\.(gz|bz2|xz)$/.test(pathname)
  ) {
    return new Response(null, { status: 404 })
  }

  // 3. Block sensitive paths
  if (BLOCKED_PATHS.some((pattern) => pattern.test(pathname))) {
    return new Response(null, { status: 404 })
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
}
