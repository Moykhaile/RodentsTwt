import useLoginModal from "@/hooks/useLoginModal";
import { useCallback, useState } from "react";
import Input from "../input";
import Modal from "../modal";

const LoginModal = () => {
    const loginModal = useLoginModal();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const onSubmit = useCallback(() => {
        try {
            setIsLoading(true);

            // TODO: Add login

            loginModal.onClose();
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    }, [loginModal]);

    const bodyContent = (
        <div className="flex flex-col gap-4">
            <Input placeholder="Your email" value={email} disabled={isLoading} type="email"
                onChange={(e) => setEmail(e.target.value)} />
            <Input placeholder="Your password" value={password} disabled={isLoading} type="password"
                onChange={(e) => setPassword(e.target.value)} />
        </div>
    );

    return (
        <Modal disabled={isLoading} isOpen={loginModal.isOpen} title="Login" actionLabel="Sign in" onClose={loginModal.onClose} onSubmit={onSubmit} body={bodyContent} />
    );
}

export default LoginModal;