import React from "react";
import { Divider, Drawer, List, ListItem, ListItemText } from '@material-ui/core';
import { makeStyles } from "@material-ui/styles";

import Link from "./Link";
import SearchInput, { SearchContext } from "./SearchInput";

const ListItemLink = (props) => (
    <ListItem
        button
        component={React.forwardRef((linkProps, ref) => <Link innerRef={ref} {...linkProps} />)}
        {...props} />
);

const Sidebar = ({ onClose, open }) => {
    let styles = sidebarStyles();
    return (
        <SearchContext.Consumer>
            {({ searchQuery, searchResults }) => {
                let effectResults = [];
                let ingredientResults = [];
                for (let result of searchResults) {
                    result.node.school
                        ? effectResults.push(result)
                        : ingredientResults.push(result);
                }
                return (
                    <Drawer
                        anchor="right"
                        classes={{
                            root: `${styles.root} ${styles.drawerWidth}`,
                            paper: styles.drawerWidth,
                        }}
                        open={open}
                        onClose={onClose(false)}>
                        <SearchInput />
                        <List>
                            {effectResults.length > 0 && effectResults.map((result, i) => (
                                <ListItemLink
                                    key={`effect-${i}`}
                                    to={`/effect/${result.node.slug}`}>
                                    <ListItemText>{result.node.name}</ListItemText>
                                </ListItemLink>
                            ))}
                            {effectResults.length > 0 && ingredientResults.length > 0 && <Divider variant="middle" />}
                            {ingredientResults.length > 0 && ingredientResults.map((result, i) => (
                                <ListItemLink
                                    key={`ingredient-${i}`}
                                    to={`/ingredient/${result.node.slug}`}>
                                    <ListItemText>{result.node.name}</ListItemText>
                                </ListItemLink>
                            ))}
                        </List>
                    </Drawer>
                );
            }}
        </SearchContext.Consumer>
    );
};

const sidebarStyles = makeStyles(theme => ({
    root: {
        position: "absolute",
    },
    drawerWidth: {
        width: 320,
    },
}));

export default Sidebar;
