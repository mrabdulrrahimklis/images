import {createContext, FC, PropsWithChildren, useState} from "react";

interface ISearchContextProps {
    query: string;
    setQuery: (query: string) => void;
}

export const SearchContext = createContext<ISearchContextProps>({
    query: '',
    setQuery: (query) => console.log(query),
});

const SearchProvider: FC<PropsWithChildren> = ({ children }) => {
    const [query, setQuery] = useState<string>("");

    return (
        <SearchContext.Provider
            value={{
                query,
                setQuery
            }}
        >
            {children}
        </SearchContext.Provider>
    );
};

export default SearchProvider;
