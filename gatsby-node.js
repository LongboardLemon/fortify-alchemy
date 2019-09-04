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
