import {FC, PropsWithChildren} from "react";

export const BaseLayout: FC<PropsWithChildren> = ({ children }) => (
    <div className='px-10 my-6'>
        {children}
    </div>
);