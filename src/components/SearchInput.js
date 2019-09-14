import React, { useEffect, useState } from "react";
import { graphql, Link, useStaticQuery } from "gatsby";
import * as JsSearch from "js-search";

const renderQueryResults = queryResults => {
    let effectResults = [];
    let ingredientResults =[];
    for (let result of queryResults) {
        result.node.school
            ? effectResults.push(result)
            : ingredientResults.push(result);
    }
    return (
        <div>
            {effectResults.length > 0 && effectResults.map((result, i) => (
                <Link to={`/effect/${result.node.slug}`} key={`effect-${i}`}>
                    {result.node.name}
                </Link>
            ))}
            {ingredientResults.length > 0 && ingredientResults.map((result, i) => (
                <Link to={`/ingredient/${result.node.slug}`} key={`ingredient-${i}`}>
                    {result.node.name}
                </Link>
            ))}
        </div>
    );
};

const SearchContainer = props => {
    let [search, setSearch] = useState([]);
    let [searchQuery, setSearchQuery] = useState("")
    let [searchResults, setSearchResults] = useState([]);
    useEffect(() => {
        if (search.search) return;
        rebuildIndex();
    });
    const data = useStaticQuery(graphql`
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
        dataToSearch.addDocuments(data.allEffectsJson.edges);
        dataToSearch.addDocuments(data.allIngredientsJson.edges);
        setSearch(dataToSearch);
    };
    const handleChange = event => {
        let queryResults = search.search(event.target.value);
        setSearchResults(queryResults);
        setSearchQuery(event.target.value);
    };

    return (
        <div>
            <form onSubmit={event => event.preventDefault()}>
                <input
                    onChange={handleChange}
                    placeholder="Search"
                    value={searchQuery} />
            </form>
            {searchResults.length > 0 && renderQueryResults(searchResults)}
        </div>
    );
};

export default SearchContainer;
