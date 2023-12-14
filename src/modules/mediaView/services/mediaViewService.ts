import { QueryFunctionContext } from "@tanstack/react-query";
import { apiService } from "../../../core/api/services/apiService";
import {ISingleView} from "../interface/ISingleView.tsx";

class MediaViewApiService {
    async getSingleMediaView({ queryKey }: QueryFunctionContext): Promise<ISingleView> {
        const [_, id] = queryKey;

        const data = apiService.responseHandler(await apiService.get<ISingleView>(`/media/${id}`));

        return data;
    }
}

export const mediaViewApiService = new MediaViewApiService();
