import styleclass from '../Button/Button.module.scss'

const Button = ({ children, className, ...rest }) =>{
	return(
        <button className={`${styleclass["Button"]} ${className ?? ""}`} {...rest}>
            {/* Texto o contenido del botón */}
            {children}
        </button>
)}

export default Button