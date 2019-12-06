import React from "react";
import { Avatar, Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

import Layout from "../components/Layout";
import Link from "../components/Link";
import { PotionIcon, SaltIcon } from "../components/icons";

const IndexPage = props => {
    let styles = indexStyles();
    return (
        <Layout>
            <Box className={styles.root}>
                <Typography variant="h1">
                    Fortify Alchemy
                </Typography>
                <Typography variant="h4">
                    A simple alchemy tool for TES III: Morrowind.
                </Typography>
                <Box className={styles.homeLinks}>
                    <Link className={styles.homeLink} to="/effects">
                        <Avatar alt="Effects">
                            <PotionIcon color="primary" />
                        </Avatar>
                        Effects
                    </Link>
                    <Link className={styles.homeLink} to="/ingredients">
                        <Avatar alt="Ingredients">
                            <SaltIcon color="primary" />
                        </Avatar>
                        Ingredients
                    </Link>
                </Box>
            </Box>
        </Layout>
    );
};
const indexStyles = makeStyles(theme => ({
    root: {
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        marginTop: 80,
        width: "100%",
    },
    homeLink: {
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        margin: 24,
    },
    homeLinks: {
        display: "flex",
    },
}));

export default IndexPage;
