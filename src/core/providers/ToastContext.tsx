import {createContext, FC, Fragment, PropsWithChildren, useState} from 'react';
import {Dialog, Transition} from '@headlessui/react';
import {XMarkIcon} from '@heroicons/react/24/outline';

interface IToastContextProps {
    open: (message: string) => void;
}

export const ToastContext = createContext<IToastContextProps>({
    open: (message) => console.log(message),
});

const ToastProvider: FC<PropsWithChildren> = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [message, setMessage] = useState<string>('');

    const open = (message: string) => {
        setMessage(message);
        setIsOpen(true);


        setTimeout(() => {
            setIsOpen(false);
        }, 1000);
    };

    const close = () => {
        setIsOpen(false);
    };

    return (
        <ToastContext.Provider
            value={{
                open,
            }}
        >
            <Transition appear show={isOpen}>
                <Dialog as="div" className="z-10" onClose={close}>
                    <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

                    <div className="fixed bottom-0 left-0 items-center justify-center p-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Dialog.Panel className="w-full max-w-md transform overflow-hidden bg-white p-6 text-left align-middle shadow-xl transition-all">
                                <div className="mt-2 flex">
                                    <p className="text-gray-500">
                                        {message}
                                    </p>
                                    <p onClick={close} className='hover:bg-gray-200 rounded-full p-1'>
                                        <XMarkIcon height='1.2rem' />
                                    </p>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition>

            {children}
        </ToastContext.Provider>
    );
};

export default ToastProvider;
