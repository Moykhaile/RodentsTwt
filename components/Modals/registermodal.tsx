import { useCallback, useState } from "react";

import Input from "../input";
import Modal from "../modal";

import useRegisterModal from "@/hooks/useRegisterModal";
import useLoginModal from "@/hooks/useLoginModal";

const RegisterModal = () => {
    const registerModal = useRegisterModal();
    const loginModal = useLoginModal();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const onSubmit = useCallback(() => {
        try {
            setIsLoading(true);

            // TODO: Add register AND login

            registerModal.onClose();
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    }, [registerModal]);

    const bodyContent = (
        <div className="flex flex-col gap-4">
            <Input placeholder="Your email" value={email} disabled={isLoading} type="email"
                onChange={(e) => setEmail(e.target.value)} />
            <Input placeholder="Your name" value={name} disabled={isLoading} type="text"
                onChange={(e) => setName(e.target.value)} />
            <Input placeholder="Your username" value={username} disabled={isLoading} type="text"
                onChange={(e) => setUsername(e.target.value)} />
            <Input placeholder="Your password" value={password} disabled={isLoading} type="password"
                onChange={(e) => setPassword(e.target.value)} />
        </div>
    );

    return (
        <Modal disabled={isLoading} isOpen={registerModal.isOpen} title="Create your acount" actionLabel="Sign up!" onClose={registerModal.onClose} onSubmit={onSubmit} body={bodyContent} />
    );
}

export default RegisterModal;