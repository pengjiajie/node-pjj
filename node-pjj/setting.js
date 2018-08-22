module.exports = {
    cookieSecret: 'myblog',
    db: 'blog',
    host: 'localhost',
    port: 27017,
    session: {
        name: 'Blog',
        secret: 'Blog',
        cookie: {
            httpOnly: true,
            secure: false,
            maxAge: 365 * 24 * 60 * 60 * 1000
        }
    }
}