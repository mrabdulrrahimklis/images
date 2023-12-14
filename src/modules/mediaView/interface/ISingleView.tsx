export interface IUsageLicences {
    "credits": number,
    "currency": string,
    "languagePointer": string,
    "name": string,
    "price": number,
    "licenseid": number
}

export interface IMediaReference {
    "id": number,
    "source": string,
    "type": number
}

export interface ISingleView {
    "caption": string,
    "categories": [],
    "cliplength": number,
    "creationdate": Date,
    "creator": string,
    "height": number,
    "keywords": string,
    "licencelanguagepointer": string,
    "licensetype": string,
    "masterimage": null,
    "mediaid": number,
    "mediaidpadded": string,
    "mediaprev": null,
    "mediasrc": string,
    "mediathumb": string,
    "mediatype": string,
    "similarmedia": null,
    "source": string,
    "territoryrestrictions": string,
    "title": string,
    "usagelicences": IUsageLicences[],
    "width": number,
    "mediaReference": IMediaReference,
    "searchindexing": boolean
}

