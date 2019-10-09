import React, { useEffect, useState } from "react";
import { graphql, useStaticQuery } from "gatsby";
import * as JsSearch from "js-search";

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

const SearchInput = () => <SearchContext.Consumer>
    {({ search, searchQuery, setSearchQuery, setSearchResults }) => (
        <form onSubmit={event => event.preventDefault()}>
            <input
                onChange={event => {
                    setSearchResults(search.search(event.target.value));
                    setSearchQuery(event.target.value);
                }}
                placeholder="Search"
                style={styles.input}
                value={searchQuery} />
        </form>
    )}
</SearchContext.Consumer>;

const styles = {
    root: {
        position: "relative",
    },

    input: {
        backgroundColor: "inherit",
        borderBottom: "1px solid #DEDEDE",
        borderLeft: "none",
        borderRight: "none",
        borderTop: "none",
        color: "inherit",
        fontFamily: "inherit",
        fontSize: 20,
    },
};

export default SearchInput;
