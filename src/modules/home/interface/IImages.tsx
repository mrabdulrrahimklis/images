export interface IImagesResponse {
    "took-ms": number,
    "amount": number,
    "media": IImages[]
}

export interface IImages {
    "media-id": number,
    "preview": string,
    "height": number,
    "width": number
}