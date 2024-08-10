import { authMiddleware } from "@clerk/nextjs/server";

export default authMiddleware({
	publicRoutes: ["/api/webhooks/clerk"],
	secretKey: process.env.CLERK_SECRET_KEY,
});

export const config = {
	matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
