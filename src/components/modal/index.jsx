import imagem from '../../Assets/FrontEnd IllusionRO/ITEMS-REGISTER/1/PERSONAGEM-RECORTADO.png'
import iconProfile from '../../Assets/FrontEnd IllusionRO/ITEMS-REGISTER/1/PROFILE.png'
import iconEmail from '../../Assets/FrontEnd IllusionRO/ITEMS-REGISTER/1/EMAIL.png'
import iconWhatsapp from '../../Assets/FrontEnd IllusionRO/ITEMS-REGISTER/1/WHATSAPP.png'
import { ContainerModal, ContainerFormImagem, ContainerImagem, ContainerLabel } from './style'
import { useState } from 'react'

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from 'axios';
import { toast } from "react-toastify";


export const Modal = ({setOpenModal}) => {

    const [cellphone, setCellPhone] = useState("");


    const MaskCellphone = (value) => {
        return value
          .replace(/\D/g, "")
          .replace(/(\d{2})(\d)/, "($1)$2")
          .replace(/(\d{4})(\d)/, "$1-$2")
          .replace(/(\d{4})-(\d)(\d{4})/, "$1$2-$3")
          .replace(/(-\d{4})\d+?$/, "$1");
    };

    const schema = yup.object().shape({
        name: yup.string()
            .min(3, "Mínimo de 3 letras!")
            .matches(/^[a-zA-Z]+$/, "Este campo deve conter somente letras!")
            .required("Campo Obrigatório!"),
        last_name: yup.string()
            .required("Campo Obrigatório!"),
        email: yup.string()
            .email("Email Inválido!")
            .required("Campo Obrigatório!"),
        phone: yup.string()
            .min(14, 'Telefone deve conter no mínimo 11 caracteres!')
            .max(14, 'Telefone deve conter no máximo 11 caracteres!')
            .matches(
            /[0-9]|[1-9][0-9]|[1-9][0-9][0-9]/,
            "Este campo aceita somente número!")
            .required("Campo Obrigatório!"),
        username: yup.string()
            .min(3, "Mínimo de 3 letras!")
            .max(23, 'Máximo de 23 caracteres!')
            .required("Campo Obrigatório!"),
      });


    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({ resolver: yupResolver(schema) });


    const handleMyForm = (data) => {
        axios.post("https://illusion-ro.herokuapp.com/api/leads", data)
        .then((resp) => {
            toast.success("Registro feito com sucesso!", {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            
            reset();
            setOpenModal(false)
        
        })
        .catch((e) => {
            console.log(e.response.data.message)
            toast.error(e.response.data.message, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
              });
            });
        }
    

    return(
        <ContainerModal>
            <ContainerFormImagem>
                <button className='closedModal' onClick={ () => setOpenModal(false) }>X</button>
                <h3>Preencha os campos para garantir seus prêmios</h3>
                <h4>Tenha acesso exclusivo ao nosso discord!</h4>
                <div className='sub-container'>
                    <form onSubmit={handleSubmit(handleMyForm)} >
                        <ContainerLabel>
                            <label>*Nome</label>
                            <div className='input'>
                                <figure>
                                    <img alt='icon' src={iconProfile}/>
                                </figure>
                                <input placeholder='Nome' {...register('name')}/>
                            </div>
                            <span>{errors.name?.message}</span>
                        </ContainerLabel>
                        <ContainerLabel>
                            <label>*Sobrenome</label>
                            <div className='input'>
                                <figure>
                                    <img alt='icon' src={iconProfile}/>
                                </figure>
                                <input placeholder='Sobrenome' {...register('last_name')}/>
                            </div>
                            <span>{errors.last_name?.message}</span>
                        </ContainerLabel>
                        <ContainerLabel>
                            <label>*Email</label>
                            <div className='input'>
                                <figure>
                                    <img alt='icon' src={iconEmail}/>
                                </figure>
                                <input placeholder='Seu email' {...register('email')}/>
                            </div>
                            <span>{errors.email?.message}</span>
                        </ContainerLabel>
                        <ContainerLabel>
                            <label>*WhatsApp</label>
                            <div className='input'>
                                <figure>
                                    <img alt='icon' src={iconWhatsapp}/>
                                </figure>
                                <input placeholder='Seu número' {...register('phone')} value={MaskCellphone(cellphone)} onChange={(e) => setCellPhone(e.target.value)}/>
                            </div>
                            <span>{errors.phone?.message}</span>
                        </ContainerLabel>
                        <ContainerLabel>
                            <label>*Username</label>
                            <div className='input'>
                                <figure>
                                    <img alt='icon' src={iconProfile}/>
                                </figure>
                                <input placeholder='Seu nick dentro do jogo' {...register('username')}/>
                            </div>
                            <span>{errors.username?.message}</span>
                        </ContainerLabel>
                        <button type="submit">Receber Prêmios!</button>
                    </form>
                    <ContainerImagem>
                        <figure>
                            <img alt='imagem' src={ imagem }/>
                        </figure>
                    </ContainerImagem>
                </div>
            </ContainerFormImagem>
        </ContainerModal>
    )
}