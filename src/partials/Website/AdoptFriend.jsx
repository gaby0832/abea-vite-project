import React from 'react'
import styles from './AdoptFriend.module.css'
import Head from '../Components/Head'
import SectionInfo from '../Components/SectionInfo'
import { Link } from 'react-router-dom'

const AdoptFriend = () => {
  return (
    <div className={styles.adoptFriend}>
        <Head title="Adote um amigo" description="Juntos, promovendo o bem-estar dos animais <br></br>desabrigados e necessitados."/>
        <SectionInfo name="Adote um amigo" image="https://res.cloudinary.com/dqx5v6hfi/image/upload/v1778272064/hvjhv_ulobis.webp" info="Encontre amor em quatro patas: Adote um amigo, mude duas vidas." />
        <div className={styles.adoptPartner}>
            <div className='container'>
                <div className={styles.adoptPainel}>
                    <div className={styles.adoptInfo}>
                        <h1>Adote um Amigo: Seja um Apoiador!</h1>
                        <p>Na busca por um amigo peludo? Encontre o companheiro perfeito e transforme vidas ao mesmo tempo! Ao adotar um amigo de quatro patas, você não apenas enriquece sua vida, mas também salva outra.</p>
                        <p>
                        Ao se tornar um apoiador da nossa causa, você ajuda a Associação de Bem-Estar Animal (ABEA) a oferecer cuidados, amor e abrigo para animais resgatados à espera de um lar.
                        Ser um parceiro desta jornada de amor e cuidado é totalmente gratuito! Junte-se a nós para tornar a diferença na vida de animais desabrigados, proporcionando-lhes um recomeço cheio de carinho e esperança.</p>
                        <p>Clique abaixo e torne-se um apoiador da ABEA, fazendo parte desta missão de amor e compaixão por animais necessitados.</p>
                        <div className={styles.buttonPartner}>
                            <Link to="/turn-partner">Seja um Apoiador</Link>
                        </div>
                    </div>
                    <div className={styles.adoptImage}>
                        <img src="https://res.cloudinary.com/dqx5v6hfi/image/upload/v1778272642/cachorro36_cpuq47.webp" alt=""/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AdoptFriend