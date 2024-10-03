import './globals.css'
import  footer from './components/Footer'


export default function Home() {
  return (
    <div className="   font-[family-name:var(--font-geist-sans)]">
      
 
    
      <main className=" flex flex-col gap-8 items-center h-screen text-white bg-cover bg-center bg-no-repeat pt-40"  style={{ backgroundImage: "url('/images/webb.jpg') ",  backgroundSize: "cover" }}>
        <h1 className="text-3xl font-bold ">Welcome</h1> 
        
        <p className="text-lg ">
          My name is Sahar Stambouli, a full-stack developer based in Tunisia. I have worked on a wide range of front-end projects, from DJ applications to eCommerce booking platforms, with a focus on creating clean, well-crafted interfaces that not only look great but also provide a seamless user experience.
        </p> 
      </main>


    

   

     
    </div>
  );
}

