const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;
    const ingredientPage = path.resolve("./src/components/Ingredient.js");
    const ingredientResult = await graphql(`
        query {
            allIngredientsJson {
                edges {
                    node {
                        fields {
                            slug
                        }
                    }
                }
            }
        }
    `);
    const ingredients = ingredientResult.data.allIngredientsJson.edges;
    ingredients.forEach((ingredient, index) => {
        createPage({
            component: ingredientPage,
            context: { slug: ingredient.node.fields.slug },
            path: `/ingredient/${ingredient.node.fields.slug}`,
        });
    });
};

exports.onCreateNode = ({ actions, getNode, node }) => {
    const { createNodeField } = actions;
    if (node.internal.type == "ingredientsJson" || node.internal.type == "effectsJson") {
        createNodeField({
            name: "slug",
            node,
            value: `${node.name.replace(/\s/g, "-").toLowerCase()}`
        });
    }
};
