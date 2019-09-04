module.exports = {
    siteMetadata: {
        title: "Fortify Alchemy",
    },
    plugins: [
        {
            resolve: "gatsby-transformer-json",
            options: {
                typeName: ({ node, object }) => object.effects ? "ingredientsJson" : "effectsJson",
            },
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                path: "./src/data/",
            },
        },
    ]
};
