import React from 'react'
import styles from './Home.module.css'
import { Link } from 'react-router-dom'
import Head from '../Components/Head'
import Card from '../Components/Card'
import CardDog from '../Components/CardDog'
import LinkButton from '../Components/Inputs/LinkButton'

function home() {

  


 return (
    <div className={styles.home}>
      <Head title="Home" description="Juntos, promovendo o bem-estar dos animais <br></br>desabrigados e necessitados."/>
      <section className={styles.presentation}>
          <div className={`container ${styles.container}`}>
            <div className={`containerWrapper ${styles.containerWrapper}`}>
                <div className={`${styles.logoPress} animeLeft`}>
                  <div className={`${styles.abeaIcon}`}>
                    <p className="margarine">abea</p>
                    <i className="fa-solid fa-paw"></i>
                  </div>
                  <div className={styles.infoButton}>
                    <p>Juntos, promovendo o bem-estar dos animais desabrigados e necessitados.</p>
                    <Link to="/about-us" className={styles.buttonLink}>Sobre nós</Link>
                  </div>
                </div>
                <div className={`${styles.dogImage} animeBottom`}></div>
            </div>
          </div>
      </section>

      <section className={styles.cards}>
        <div className='container'>
          <h1 className={styles.cardTitle}>Serviços & Eventos</h1>
          <div className='containerWrapper'>
              <div className={styles.cardWrapper}>
                 <Card icon="fa-solid fa-house" image="https://res.cloudinary.com/dqx5v6hfi/image/upload/v1778181185/copy_of_chatgpt_image_7_de_mai_de_2026_16_06_45_lo57bw_5016ef.webp" title="Abrigo & Adoção" desc="Abrigamos animais de rua, os tratamos e os colocamos para adoção." />
                 <Card icon="fa-solid fa-dog" image="https://res.cloudinary.com/dqx5v6hfi/image/upload/v1778177439/image_xmthel.webp" title="Ache seu amigo" desc="Todo mês fazemos um evento de adoção, para você que está procrurando um amigo." />
                 <Card icon="fa-solid fa-handshake-angle" image="https://res.cloudinary.com/dqx5v6hfi/image/upload/v1778177652/image_eep5lq.webp" title="Ajudamos Pets" desc="Você está sem condições de cuidar do seu pet? que tal não fazer nada precipitado e nós contatar." />
                 <Card icon="fa-solid fa-heart" image="https://res.cloudinary.com/dqx5v6hfi/image/upload/v1778177667/image_dngy34.webp" title="Doações" desc="Todo mês um evento de doações é feito, parar recebermos ou doarmos mantimentos para os bichinhos." />
              </div>
          </div>
        </div>
      </section>


      <section className={styles.aboutUs}>
          <div className="container">
            <div className={styles.aboutUsInfo}>
              <h1 className='margarine'>QUEM SOMOS NÓS?</h1>
              <p>A Associação de Bem-Estar Animal (ABEA) é um grupo comprometido com o cuidado e a proteção dos animais. Nossa jornada começou há 2 anos, impulsionada por uma paixão unânime por criar um impacto positivo na vida dos animais desabrigados e vulneráveis.</p>
              <LinkButton link="/about-us" name="Saiba mais"/>
            </div>
          </div>
      </section>

      <section className={styles.partner}>
          <div className="container">
            <div className={styles.partnerInfo}>
              <h1>Torne-se um apoiador</h1>
              <p>Junte-se à Associação de Bem-Estar Animal (ABEA) e faça a diferença na vida dos animais desabrigados e necessitados. Sua contribuição é fundamental para oferecer cuidados, abrigo e amor a esses animais. Existem várias maneiras de se envolver: faça uma doação, torne-se um voluntário, patrocine um animal ou participe de nossos eventos. Cada gesto de apoio nos aproxima ainda mais de alcançar nosso objetivo comum: proporcionar uma vida melhor para todos os animais.</p>
              <LinkButton link="/turn-partner" name="Seja um Apoiador"/>
            </div>
          </div>
      </section>

       <section className={styles.cardsDog}>
        <div className='container'>
          <h1 className={styles.cardDogsTitle}>Depoimentos & Histórias</h1>
              <div className={styles.cardDogsWrapper}>
                 <CardDog name="Bolinha" image="https://res.cloudinary.com/dqx5v6hfi/image/upload/v1778178244/image_ud4vhm.webp" depoiment="“Oi, pessoal! Eu sou o Bolinha, e minha vida mudou completamente quando fui adotado pela ABEA. Antes, eu vivia nas ruas sem ter um lar para chamar de meu. Agora, graças ao amor e cuidado que recebi, tenho uma família incrível que me ama muito. Obrigado, ABEA, por me encontrar e por todo o carinho que me deram”"/>
                 <CardDog name="Luna" image="https://res.cloudinary.com/dqx5v6hfi/image/upload/v1778178265/image_lnjv5q.webp" depoiment="“Olá a todos! Sou a Luna, uma sortuda que teve a chance de ser adotada pela Associação de Bem-Estar Animal. Eu não acreditava que alguém me daria uma segunda chance, mas eles acreditaram em mim. Agora, tenho um lar aconchegante, uma família amorosa e muito carinho. Estou imensamente grata à ABEA por ter mudado minha vida para sempre.”"/>
                 <CardDog name="Thor" image="https://res.cloudinary.com/dqx5v6hfi/image/upload/v1778178279/image_ludgsn.webp" depoiment="“Oi, pessoal! Meu nome é Thor e minha história começou a brilhar quando fui adotado pela ABEA. Eu estava sozinho, mas agora tenho um lugar para chamar de lar e pessoas que me fazem sentir amado todos os dias. Obrigado, Associação de Bem-Estar Animal, por me mostrar que a felicidade está em encontrar um lar cheio de amor.”"/>
              </div>
        </div>
      </section>
    </div>
  )
}

export default home