import { useQuery } from "@tanstack/react-query";
import { mediaViewApiService } from "../services/mediaViewService.ts";
import { ISingleView } from "../interface/ISingleView.tsx";

export interface ISingleMediaView {
    id: string | undefined
}

export const useSingleMedia = ({ id }: ISingleMediaView) => {
    const {
        data: singleMediaView,
        isLoading: areSingleMediaViewLoading,
        refetch: refetchSingleMediaView,
        isFetching: areSingleMediaViewFetching,
    } = useQuery({
        queryKey: [
            "singleMedia",
            id
        ],
        queryFn: mediaViewApiService.getSingleMediaView
    });

    return {
        singleMediaView: singleMediaView ?? ({} as ISingleView),
        areSingleMediaViewLoading,
        refetchSingleMediaView,
        areSingleMediaViewFetching,
    };
}