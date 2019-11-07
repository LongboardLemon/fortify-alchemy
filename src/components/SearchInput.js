import React, { useEffect, useState } from "react";
import { graphql, useStaticQuery } from "gatsby";
import * as JsSearch from "js-search";
import { InputAdornment, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

import { SearchIcon } from "./icons";

export const SearchContext = React.createContext();
export const SearchStore = ({ children }) => {
    let [search, setSearch] = useState([]);
    let [searchQuery, setSearchQuery] = useState("")
    let [searchResults, setSearchResults] = useState([]);

    useEffect(() => rebuildIndex(), []);
    const { allEffectsJson, allIngredientsJson } = useStaticQuery(graphql`
        query {
            allEffectsJson {
                edges {
                    node {
                        name
                        school
                        slug
                    }
                }
            }
            allIngredientsJson {
                edges {
                    node {
                        name
                        slug
                    }
                }
            }
        }
    `);
    const rebuildIndex = () => {
        let dataToSearch = new JsSearch.Search(["node", "name"]);
        dataToSearch.indexStrategy = new JsSearch.AllSubstringsIndexStrategy();
        dataToSearch.sanitizer = new JsSearch.LowerCaseSanitizer();
        dataToSearch.searchIndex = new JsSearch.UnorderedSearchIndex();
        dataToSearch.addIndex(["node", "name"]);
        dataToSearch.addDocuments(allEffectsJson.edges);
        dataToSearch.addDocuments(allIngredientsJson.edges);
        setSearch(dataToSearch);
    };

    return (
        <SearchContext.Provider
            value={{
                search,
                searchQuery,
                searchResults,
                setSearchQuery,
                setSearchResults
            }}>
            {children}
        </SearchContext.Provider>
    );
};

const SearchInput = React.forwardRef((props, ref) => {
    let styles = searchStyles();
    return (
        <SearchContext.Consumer>
            {({ search, searchQuery, setSearchQuery, setSearchResults }) => (
                <form
                    className={styles.form}
                    onSubmit={event => event.preventDefault()}>
                    <TextField
                        autoFocus
                        className={styles.input}
                        hiddenLabel={true}
                        InputProps={{
                            inputProps: { "aria-label": "search" },
                            startAdornment: (
                                <InputAdornment position="start">
                                    <SearchIcon />
                                </InputAdornment>
                            ),
                        }}
                        inputRef={ref}
                        onChange={event => {
                            setSearchResults(search.search(event.target.value));
                            setSearchQuery(event.target.value);
                        }}
                        placeholder="Search"
                        value={searchQuery} />
                </form>
            )}
        </SearchContext.Consumer>
    );
});

const searchStyles = makeStyles(theme => ({
    form: {
        margin: theme.spacing(2),
    },
    input: {
        width: "100%",
    },
}));

export default SearchInput;
