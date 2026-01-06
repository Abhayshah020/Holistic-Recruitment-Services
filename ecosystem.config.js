module.exports = {
    apps: [
        {
            name: "holisticrs-frontend",
            script: "node_modules/next/dist/bin/next",
            args: "start -p 5025",
            cwd: "/var/www/site2.holisticrs.com.au",
            env: {
                NODE_ENV: "production",
                PORT: 5025
            }
        }
    ]
};
