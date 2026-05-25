import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'
import { NextRequest, NextResponse } from 'next/server'
export async function proxy(request: NextRequest) {
    const {isAuthenticated} = getKindeServerSession();
    const isLoggedin = await isAuthenticated();
    const path=request.nextUrl.pathname;
    if(isLoggedin&&path==="/"){
         return NextResponse.redirect(new URL("/dashboard",request.url));
    }
    if(!isLoggedin&&path.startsWith("/dashboard")){
        return NextResponse.redirect(new URL("/api/auth/login?post_login_redirect_url=/dashboard",request.url));
    }
    return NextResponse.next();
}

export const config = {
  matcher: ["/",'/dashboard/:path*'],
}