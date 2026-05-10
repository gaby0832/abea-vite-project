import React from 'react'
import styles from './AboutUs.module.css'
import Head from '../Components/Head'
import SectionInfo from '../Components/SectionInfo'
const AboutUs = () => {
  return (
    <div className={styles.aboutus}>
        <Head title="Sobre nós" description="Juntos, promovendo o bem-estar dos animais <br></br>desabrigados e necessitados."/>
        <SectionInfo name="Sobre Nós" image="https://res.cloudinary.com/dqx5v6hfi/image/upload/v1778273012/cachorro35_ep1iq8.webp" info="Conheça nossa história, abraçando o compromisso com o bem-estar animal." />
        <section className={styles.aboutInfo}>
            <div className='container'>
                <div className={styles.aboutWrapper}>
                  <div className={styles.aboutSingle}>
                    <div className={styles.infos}>
                      <h1>ABEA - Associação de Bem-Estar Animal</h1>
                      <p>Desde a nossa fundação em 2018, a ABEA tem sido uma voz comprometida na proteção e cuidado dos animais desabrigados e em situação de vulnerabilidade. Nossa jornada começou com um grupo dedicado de voluntários apaixonados por criar um impacto positivo na vida dos animais.</p>
                      <p>Com uma equipe comprometida de 12 de colaboradores e voluntários incansáveis, resgatamos e cuidamos de centenas de animais todos os anos, oferecendo-lhes amor, abrigo, cuidados médicos e, o mais importante, uma segunda chance para uma vida melhor.</p>
                      <p>Ao longo dos anos, expandimos nossos esforços, implementando programas educacionais, campanhas de castração e eventos de adoção responsável para sensibilizar a comunidade sobre a importância do bem-estar animal.</p>
                      <p>Nossa missão é clara: proporcionar uma vida digna e feliz para todos os animais, promovendo a adoção responsável e a conscientização sobre os direitos e necessidades desses seres tão especiais.</p>
                      <p>Acreditamos firmemente que cada vida importa. Ao unir forças com nossos apoiadores, parceiros e comunidade, continuaremos a fazer a diferença na vida dos animais e a inspirar mudanças significativas para um mundo mais compassivo.</p>
                    </div>
                    <img src="https://res.cloudinary.com/dqx5v6hfi/image/upload/v1778273623/escritorio_k9i5zu.webp" loading='lazy' alt=''/>
                  </div>
                  <div className={styles.aboutSingle}>
                    <div className={styles.infos}>
                      <h1>Como nossa história começou?</h1>
                      <p>Tudo começou com um pequeno grupo de corações compassivos e uma visão clara: fazer a diferença na vida dos animais desabrigados e necessitados. Em 2018, um momento significativo marcou o início da jornada da Associação de Bem-Estar Animal (ABEA).</p>
                      <p>Um grupo de voluntários determinados e apaixonados se uniu, movido por um profundo desejo de oferecer cuidado e proteção aos animais que precisavam de ajuda. Com dedicação incansável, esses pioneiros dedicaram seu tempo e esforço para resgatar, cuidar e encontrar lares amorosos para animais desabrigados.</p>
                      <p>Desde então, nossa história tem sido marcada por momentos emocionantes de resgate, reabilitação e adoção, enquanto continuamos a crescer e expandir nossos esforços para criar um impacto cada vez maior na comunidade e no bem-estar animal.</p>
                      <p>Nossa trajetória é um testemunho do compromisso contínuo de muitos indivíduos determinados que acreditam que cada animal merece amor, cuidado e uma chance de viver feliz.</p>
                    </div>
                    <img src="https://res.cloudinary.com/dqx5v6hfi/image/upload/v1778274045/escritorio2_vpxfsc.webp" loading='lazy' alt=''/>
                  </div>
                  <div className={styles.ownersSingle}>
                      <h1>Nossa Equipe</h1>
                      <div className={styles.owners}>

                        <div className={styles.owner}>
                          <img src="https://res.cloudinary.com/dqx5v6hfi/image/upload/v1778439141/Face_4_wiinbn.webp" alt='' loading='lazy'/>
                          <div className={styles.ownerInfo}>
                            <h3>Yasmin Ayla</h3>
                            <p>fundadora</p>
                          </div>  
                        </div>  

                        <div className={styles.owner}>
                          <img src="https://res.cloudinary.com/dqx5v6hfi/image/upload/v1778439140/Face_3_cyy4om.webp" alt='' loading='lazy'/>
                          <div className={styles.ownerInfo}>
                            <h3>Elisa Liz Silveira</h3>
                            <p>cuidadora</p>
                          </div>  
                        </div> 

                        <div className={styles.owner}>
                          <img src="https://res.cloudinary.com/dqx5v6hfi/image/upload/v1778439140/Face_8_vjfkhj.webp" alt='' loading='lazy'/>
                          <div className={styles.ownerInfo}>
                            <h3>Heitor Joaquim Cardoso</h3>
                            <p>cuidador</p>
                          </div>  
                        </div> 


                        <div className={styles.owner}>
                          <img src="https://res.cloudinary.com/dqx5v6hfi/image/upload/v1778439140/Face_7_sqeac4.webp" alt='' loading='lazy'/>
                          <div className={styles.ownerInfo}>
                            <h3>Felipe Fernando</h3>
                            <p>co-fundador</p>
                          </div>  
                        </div> 


                        <div className={styles.owner}>
                          <img src="https://cdn.discordapp.com/attachments/1088120399478390897/1188576832614838272/image.png?ex=659b076f&is=6588926f&hm=39a2b0182db2c690f37c6e4011d46af3ddf5a18f82aa9db96e4b6de27019ffc0&" alt='' loading='lazy'/>
                          <div className={styles.ownerInfo}>
                            <h3>Ana Emanuelly </h3>
                            <p>atendente</p>
                          </div>  
                        </div> 

                        <div className={styles.owner}>
                          <img src="https://res.cloudinary.com/dqx5v6hfi/image/upload/v1778439140/Face_2_fiqkn3.webp" alt='' loading='lazy'/>
                          <div className={styles.ownerInfo}>
                            <h3>Jéssica Bárbara da Silva</h3>
                            <p>cuidadora</p>
                          </div>  
                        </div> 

                        <div className={styles.owner}>
                          <img src="https://res.cloudinary.com/dqx5v6hfi/image/upload/v1778439140/Face_5_npdgv7.webp" alt='' loading='lazy'/>
                          <div className={styles.ownerInfo}>
                            <h3>Nina Analu Silveira</h3>
                            <p>atendente</p>
                          </div>  
                        </div> 

                        <div className={styles.owner}>
                          <img src="https://res.cloudinary.com/dqx5v6hfi/image/upload/v1778439140/Face_1_hltmbv.webp" alt='' loading='lazy'/>
                          <div className={styles.ownerInfo}>
                            <h3>Regina Maya Moreira</h3>
                            <p>Co-fundadora</p>
                          </div>  
                        </div> 

                        <div className={styles.owner}>
                          <img src="https://res.cloudinary.com/dqx5v6hfi/image/upload/v1778439140/Face_9_ygahw7.webp" alt='' loading='lazy'/>
                          <div className={styles.ownerInfo}>
                            <h3>André José Fernandes</h3>
                            <p>cuidador</p>
                          </div>  
                        </div> 

                      </div>  
                  </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default AboutUs