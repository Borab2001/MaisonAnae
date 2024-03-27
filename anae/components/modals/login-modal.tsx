"use client";

import axios from 'axios';
import { useCallback, useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import useLoginModal from '@/hooks/use-login-modal';
import { FcGoogle } from 'react-icons/fc';

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { DropdownMenu, DropdownMenuGroup, DropdownMenuItem } from '@/components/ui/dropdown-menu';
import { User } from 'lucide-react';


const LoginModal = () => {
    const loginModal = useLoginModal();
    const [isLoading, setIsLoading] = useState(false);

    const {
        // login,
        handleSubmit,
        formState: {
            errors,
        }
    } = useForm<FieldValues>({
        defaultValues: {
            email: '',
            password: '',
        }
    });

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true);

        axios.post('/api/login', data)
            .then(() => {
                loginModal.onClose();
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                setIsLoading(false);
            })
    }

    return (
        <DropdownMenu>
            <Dialog>
                <DialogTrigger asChild>
                    <DropdownMenuItem>
                        <User className="mr-2 h-4 w-4" />
                        <span>Sign In</span>
                        {/* <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut> */}
                    </DropdownMenuItem>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Sign In</DialogTitle>
                        <DialogDescription>
                            Login to your existing account
                        </DialogDescription>
                    </DialogHeader>

                    <div className="grid gap-4 pt-4">
                        <div className="flex flex-col items-start gap-2">
                            <Label htmlFor="email" className="mt-2">Email</Label>
                            <Input
                                id="email"
                                type="email"
                                defaultValue=""
                                className="col-span-3"
                                placeholder="johndoe@email.com"
                            />
                            <Label htmlFor="password" className="mt-2">Password</Label>
                            <Input
                                id="password"
                                type="password"
                                defaultValue=""
                                className="col-span-3"
                                placeholder="Password"
                            />
                        </div>
                    </div>
                </DialogContent>
            </Dialog>
        </DropdownMenu>
    );
}
 
export default LoginModal;