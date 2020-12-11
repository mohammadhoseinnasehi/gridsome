// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
    siteName: "Gridsome",
    siteUrl: 'https://serene-nobel-605558.netlify.app/',
    plugins: [{
        use: "@gridsome/plugin-google-analytics",
        options: {
            id: "G-31KVR2ZEMN",
        },
    }, ],
};