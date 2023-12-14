import {ROUTES} from "../const/routes.ts";

export function pathBuilder(
    path: ROUTES,
    paramToReplace: string,
    paramValue: string
): string {
    return  path.replace(paramToReplace, paramValue);
}
