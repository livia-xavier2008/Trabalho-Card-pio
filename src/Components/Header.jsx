import { Link } from "react-router-dom"
export default function Header(){

    return(
        <div>
        <div className='cabeca'> 
        <div className='cabe'> <div className='tese'>
            
        <div className="teste1">
        <Link to='/'><h3 className='titulo'>Home</h3></Link>
        </div>
        <div className="teste2">
        <Link to='/Produtos'><h3 className='tag'>Produtos</h3></Link>
        </div>
        <div className="teste3">
        <Link to='/Ofertas'><h3 className='tag'>Ofertas</h3></Link>
        </div>
    </div>
    </div>
        </div>
        </div>
        
    )

}