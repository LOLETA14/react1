import imag1 from './../assets/imag/shop_08.jpg'
import imag2 from './../assets/imag/shop_06.jpg'
import imag3 from './../assets/imag/shop_02.jpg'
import imag4 from './../assets/imag/shop_11.jpg'
const serv =[
    {imag:imag1,
     title: "Home",
    },
    {
        imag:imag2,
        title: "About",
    },
    {
        imag:imag3,
        title: "Link1",
    },
    {
        imag:imag4,
        title: "Link2",
    }]
export default function Serveses() {
    return(
     <>
     <div className='baba'>
     {serv.map( element =>{
            return(
                <div className='serv-son'>
                <img className='serv-img'
                 src={element.imag}/>
                <h1>{element.title}</h1>
                </div>
            )
        })}
     </div>
     
     
     </>
      
     
    )
    }
  
