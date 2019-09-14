const path = require("path")

exports.createSchemaCustomization = ({ actions, schema }) => {
    actions.createFieldExtension({
        name: "slug",
        extend(options, prevFieldConfig) {
            return {
                resolve(source) {
                    return source.name.replace(/\s/g, "-").toLowerCase();
                }
            };
        },
    });
    const typeDefs = `
        type effectsJson implements Node {
            description: String
            effect: String!
            name: String!
            poison: Boolean
            school: String!
            slug: String @slug
        }
        type ingredientsJson implements Node {
            description: String
            effects: [effectsJson!]! @link(by: "slug")
            name: String!
            itemID: String
            slug: String @slug
            value: Int
            weight: Float
        }
    `;
    actions.createTypes(typeDefs);
}

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;
    const effectPage = path.resolve("./src/components/Effect.js");
    const ingredientPage = path.resolve("./src/components/Ingredient.js");
    const jsonResults = await graphql(`
        query {
            allEffectsJson {
                edges {
                    node {
                        slug
                    }
                }
            }
            allIngredientsJson {
                edges {
                    node {
                        slug
                    }
                }
            }
        }
    `);
    const effects = jsonResults.data.allEffectsJson.edges;
    const ingredients = jsonResults.data.allIngredientsJson.edges;
    effects.forEach((effect, index) => {
        createPage({
            component: effectPage,
            context: { slug: effect.node.slug },
            path: `/effect/${effect.node.slug}`
        })
    });
    ingredients.forEach((ingredient, index) => {
        createPage({
            component: ingredientPage,
            context: { slug: ingredient.node.slug },
            path: `/ingredient/${ingredient.node.slug}`,
        });
    });
};
