import logo from '../../img/logo.png'
import './header.css'
const header = () => {
    return (
        <div> 
            <header className = 'center'>
                <img src={logo} alt="" />
            </header>
        </div>
    )
}

export default header
