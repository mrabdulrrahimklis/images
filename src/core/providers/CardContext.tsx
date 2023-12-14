import {createContext, FC, PropsWithChildren, useState} from "react";

interface ICardContextProps {
    cardItems: string[];
    setCard: (item: string) => void,
    numberOfItems: number
}

export const CardContext = createContext<ICardContextProps>({
    cardItems: [],
    setCard: (item: string) => console.log(item),
    numberOfItems: 0
});

const CardProvider: FC<PropsWithChildren> = ({ children }) => {
    const [cardItems, setCardItems] = useState<string[]>([]);

    const setCard = (item: string) => {
        console.log('item TT::', item)
        setCardItems([...cardItems, item])
    }

    return (
        <CardContext.Provider
            value={{
                cardItems,
                setCard,
                numberOfItems: cardItems.length
            }}
        >
            {children}
        </CardContext.Provider>
    );
};

export default CardProvider;
