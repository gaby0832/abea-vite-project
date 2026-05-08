import React from 'react'
import styles from './Header.module.css'
import { Link, useLocation } from 'react-router-dom'


function Header() {


    const [mobile, setMobile] = React.useState(false)
    const [title, setTitle] = React.useState(null)
    const location = useLocation();

    React.useEffect(()=>{
        function menuMobile(){
            setMobile(false)
        }
        window.addEventListener('resize',menuMobile);


        return ()=> window.removeEventListener('resize', menuMobile)
    },[])


    React.useEffect(()=>{
        const {pathname} = location;
        switch(pathname){
        case '/services':
        setTitle('services');
        break;
        case '/adopt':
        setTitle('adopt');
        break;
        case '/about-us':
        setTitle('about');
        break;
        case '/contact':
        setTitle('contact');
        break;
        case '/turn-partner':
        setTitle('partner');
        break;
        default:
        setTitle('home')
    }

    },[location])

    const [show, setShow] = React.useState(true);
    const [lastScrollY, setLastScrollY] = React.useState(0);

    const controlNavbar = () => {
        if (window.scrollY > lastScrollY) { 
          setShow(false);
          setMobile(false) 
        } else { 
          setShow(true);  
        }

        setLastScrollY(window.scrollY); 
    };

    React.useEffect(() => {
        window.addEventListener('scroll', controlNavbar);

        return () => {
           window.removeEventListener('scroll', controlNavbar);
        };
    }, [lastScrollY]);


  return (
    <header className={`${styles.header} ${!show ? styles.hide : ""}`}>
        <div className='container'>
            <div className={styles.navbar}>
                <div className={styles.mobileNav}>

                    <div className={styles.logoWrapper}>
                        <Link to="/" className={`${styles.logo}`}>
                            <img src="https://res.cloudinary.com/dqx5v6hfi/image/upload/v1778176921/image_fchoa3.webp" alt="" loading='lazy'/>
                        </Link>
                    </div>    
                    
                    <div className={styles.menuButtonWrapper}>
                    <button className={styles.menuButton} onClick={()=>{setMobile(!mobile)}}><div className={`${styles.bars} ${mobile ? styles.ex : ""}`}></div></button>
                    </div>

                </div>
                <div className={styles.navigation} >
                    <ul style={{height: mobile ? "350px" : "0px"}}>
                        <li><Link to="/" className={ title === "home" ? "pagina" : ""}>Home</Link></li>
                        <li><Link to="/services" className={ title === "services" ? "pagina" : ""}>Serviços & Eventos</Link></li>
                        <li><Link to="/adopt" className={ title === "adopt" ? "pagina" : ""}>Adote um Amigo</Link></li>
                        <li><Link to="/about-us" className={ title === "about" ? "pagina" : ""}>Sobre nós</Link></li>
                        <li><Link to="/contact" className={ title === "contact" ? "pagina" : ""}>Contato</Link></li>
                        <li className={styles.mobilePartner}><Link to="/turn-partner" className={title === "partner" ? "pagina" : "" }>Seja um apoiador</Link></li>
                    </ul>
                </div>
                <div className={styles.buttonPartner}>
                    <Link to="/turn-partner">Seja um Apoiador</Link>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header