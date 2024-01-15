"use client"

import MinimizeNavbar from "../ui/minimizeNavBar/MinimizeNavbar";
import CurrentPage from "../ui/currentPage/CurrentPage";
import MinimizeHeader from "../ui/minimizeHeader/MinimizeHeader";
import {useForm, SubmitHandler} from "react-hook-form"
import { Inputs } from "../lib/definitions";
import { useRef } from "react";
import emailjs from "emailjs-com"


const ContactPage = () => {

    const serviceId = process.env.NEXT_PUBLIC_REACT_APP_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_REACT_APP_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_REACT_APP_EMAILJS_PUBLIC_KEY

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
      } = useForm<Inputs>()

      const form = useRef<HTMLFormElement | null>(null)

    
    const onSubmit: SubmitHandler<Inputs> =  (data) => {
        const currentForm = form.current ?? null;
        console.log(currentForm)
        if (currentForm && serviceId && templateId && publicKey) {
            emailjs.sendForm(
                serviceId,
                templateId,
                currentForm,
                publicKey
            )
            .then((result) => {
                console.log(result)
            }, (error) => {
                console.log(error.text)
            })
        reset();
        } 
    }
    

    return (
        <div className="flex border-box w-screen h-screen">
            <MinimizeNavbar pageName="about"/>
            <MinimizeNavbar pageName="projects"/>
            <CurrentPage>
                <main className="flex justify-center">
                    <h1>Contact Me</h1>
                    <form onSubmit={handleSubmit(onSubmit)} ref={form}>
                        <div>
                            <label>Name:</label>
                            <input {...register("from_name")}/>
                        </div>
                        <div>
                            <label>Email:</label>
                            <input type="email"{...register("from_email")}/>
                        </div>
                        <div>
                            <label>Message:</label>
                            <input type="textbox"{...register("message")}/>
                        </div>
                        <button type="submit">Submit</button>
                    </form>
                </main>

            </CurrentPage>
            <MinimizeHeader/>
        </div>
    );
};

export default ContactPage;