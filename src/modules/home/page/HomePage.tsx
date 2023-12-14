import {Nav} from "../../../core/components/sharede/Nav.tsx";
import {BaseLayout} from "../../../core/components/sharede/Layout.tsx";
import {useImages} from "../hooks/useImages.tsx";
import {Search} from "../components/Search.tsx";
import {IImages} from "../interface/IImages.tsx";
import {useNavigate} from "react-router-dom";
import {ROUTES} from "../../../core/conts/routes.ts";
import {pathBuilder} from "../../../core/helper/pathBuilder.ts";
import logo from "../../../assets/logo.png";
import {useContext} from "react";
import {SearchContext} from "../../../core/providers/SearchContext.tsx";

export const HomePage = () => {
    const navigate = useNavigate();
    const search = useContext(SearchContext);

    const { imagesData: { media: imagesList }, areImagesLoading } = useImages({ query: search.query });

    if (areImagesLoading) {
        return <>
            <Nav />
            <Search />
            <div className='w-full h-full flex justify-items-center mt-16 justify-center'>
                <h3 className='text-md'>
                    <img className='animate-ping' src={logo} alt='Logo' />
                    Loading...
                </h3>
            </div>
        </>
    }

    return <>
        <Nav />
        <Search />

        <BaseLayout>
            <div className="flex flex-wrap -mx-2">
                {imagesList?.map((item: IImages, index: number) => (
                        <div
                            onClick={() => navigate(pathBuilder(ROUTES.SINGLE_IMAGE, ':id', item["media-id"].toString()))}
                            key={item["media-id"]}
                            className={`${index < 4 ? 'w-full md:w-1/4' : 'w-full sm:w-1/3'} px-2 mb-4 `}
                        >
                            <img
                                className='cursor-pointer h-80 w-full object-cover'
                                src={`https://www.imago-images.com${item.preview}`}
                                alt='image'
                            />
                        </div>
                    )
                )}
            </div>
        </BaseLayout>
    </>
}