import imag from './../assets/imag/shop_09.jpg'
export default function Hero() {
    return (
        <div className="hero">
             <div className="hero1">
                <h1>Hello in My website</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam exercitationem sint minus dignissimos aut architecto officia esse consectetur qui perspiciatis.</p>
             </div>
             <div className="hero2">
                <img className='images' src={imag}/>
             </div>
        </div>
    )

}
