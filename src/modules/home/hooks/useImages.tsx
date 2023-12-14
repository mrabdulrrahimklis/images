import {useQuery} from "@tanstack/react-query";
import {imageApiService} from "../services/imageService.ts";
import {IImagesResponse} from "../interface/IImages.tsx";

export interface ISearch {
    query: string
}

export const useImages = ({ query }: ISearch) => {
    const {
        data: imagesData,
        isLoading: areImagesLoading,
        refetch: refetchImages,
        isFetching: areImagesFetching,
    } = useQuery({
        queryKey: [
            "banners",
            query
        ],
        queryFn: imageApiService.getImages
    });

    return {
        imagesData: imagesData ?? ({} as IImagesResponse),
        areImagesLoading,
        refetchImages,
        areImagesFetching,
    };
}