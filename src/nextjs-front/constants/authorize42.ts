export const authorizationLink = `https://api.intra.42.fr/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_FT_CLIENT_ID}&redirect_uri=${process.env.NEXT_PUBLIC_FT_REDIRECT_URI}&response_type=code`;