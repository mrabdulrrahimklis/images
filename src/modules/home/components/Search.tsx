import {XMarkIcon} from "@heroicons/react/24/outline";
import {useContext} from "react";
import {SearchContext} from "../../../core/providers/SearchContext.tsx";
import {SubmitHandler, useForm} from "react-hook-form";

interface SearchInput {
    search: string
}

export const Search = () => {
    const search = useContext(SearchContext);
    const { register, handleSubmit } = useForm<SearchInput>();

    const onSubmit: SubmitHandler<SearchInput> = data => search.setQuery(data.search);

    return <form onSubmit={handleSubmit(onSubmit)}>
        <div className='bg-gray-100 py-10'>
            <div className="items-center h-10 hidden lg:flex px-4 md:px-14">
                <input
                    type="text"
                    className="h-full w-full pl-2 text-black border-r-0 focus:outline-none focus:ring-0 border border-gray-400 focus:border-1"
                    placeholder="Search..."
                    {...register('search')}
                />
                <div className="relative inline-block h-full">
                    <button
                        className="bg-white h-full pr-2 border-l-0 border border-gray-400 flex items-center justify-center cursor-pointer"
                    >
                        <XMarkIcon
                            className={`text-gray-400 h-4 w-4 transform duration-300`}
                        />
                    </button>
                </div>
            </div>
        </div>
    </form>
}