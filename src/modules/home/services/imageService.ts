import { QueryFunctionContext } from "@tanstack/react-query";
import { apiService } from "../../../core/api/services/apiService";
import {IImagesResponse} from "../interface/IImages.tsx";

class ImageApiService {
    async getImages({ queryKey }: QueryFunctionContext): Promise<IImagesResponse> {
        const [_, query] = queryKey;

        let search = `/search`;

        if (query) {
            const queryString = query.toString();
            const encodeSearchString = encodeURIComponent(queryString);

            search = `${search}?query=${encodeSearchString}`;
        }

        const data = apiService.responseHandler(await apiService.get<IImagesResponse>(search))

        return data;
    }
}

export const imageApiService = new ImageApiService();
