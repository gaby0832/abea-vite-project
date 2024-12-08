import React from 'react'
import styles from './PainelHeader.module.css'
import { Link, useLocation } from 'react-router-dom'
import { UserContext } from '../../../../UserContext'


function PainelHeader() {


    const { data , out } = React.useContext(UserContext)
    const [title, setTitle] = React.useState(null)
    const [name, setName] = React.useState("")
    const [toogle, setToogle] = React.useState(false)
    const [menu, setMenu] = React.useState(false);

    React.useEffect(()=>{
        function menuMobile(){
            setMenu(false)
        }
        window.addEventListener('resize',menuMobile);


        return ()=> window.removeEventListener('resize', menuMobile)
    },[])


 
    const location = useLocation();
    React.useEffect(()=>{
        const {pathname} = location;
        switch(pathname){
        case '/painel/donation':
        setTitle('donation');
        break;
        case '/painel/adoptme':
        setTitle('adoptme');
        break;
        case '/painel/events':
        setTitle('events');
        break;
        case '/painel/help':
        setTitle('help');
        break;
        default:
        setTitle('main')
    }

    },[location])

    React.useEffect(()=>{
        if((data[0].doc.name).split(" ").length >= 0){
            setName((data[0].doc.name).split(" ")[0])
        }else{
            setName(data[0].doc.name)
        }
    },[data])




  return (
    <header className={styles.header}>
        <div className={styles.buttonWrapper}><button className={styles.buttonMobile} onClick={()=>setMenu(!menu)}><div className={`${styles.bars} ${menu ? styles.ex : ""}`}></div></button></div>
            <div className={`${styles.navbar} ${menu ? styles.menuActive : "" }`}>
                <div className={styles.headerUser}>
                    <Link to="/" className={styles.logo}>
                        <i className="fa-solid fa-paw"></i>
                    </Link>
                    <button className={styles.buttonUser} onClick={()=>setToogle(!toogle)}>
                            <i className="fa-solid fa-user"></i>   
                    </button>
                </div>
                <div className={styles.navigation}>
                    <ul>
                        <li className={styles.navbarTitle}>PAINEL</li>
                        <li><Link to="/painel/" className={ title === "main" ? styles.pagination : ""}><i className="fa-solid fa-house"></i> Inicio</Link></li>
                        <li><Link to="/painel/donation" className={ title === "donation" ? styles.pagination : ""}><i className="fa-solid fa-hand-holding-dollar"></i> Fazer uma doação</Link></li>
                        <li><Link to="/painel/adoptme" className={ title === "adoptme" ? styles.pagination : ""}><i className="fa-solid fa-dog"></i> Adote um Amigo</Link></li>
                        <li><Link to="/painel/events" className={ title === "events" ? styles.pagination: ""}><i className="fa-regular fa-calendar-days"></i> Eventos</Link></li>
                        <li><Link to="/painel/help" className={ title === "help" ? styles.pagination : ""}><i className="fa-solid fa-handshake"></i> Precisa de Ajuda?</Link></li>
                    </ul>
                    <div className={`${styles.userMenu} ${toogle ? "" : styles.show}`}>
                                <ul>
                                    <li className={styles.userWelcome}>Bem-vindo(a) {name}</li>
                                    <li><Link to="/">Voltar para o site</Link></li>
                                    <li onClick={out}>Sair</li>
                                </ul>
                    </div>
                </div>
            </div>
    </header>
  )
}

export default PainelHeader