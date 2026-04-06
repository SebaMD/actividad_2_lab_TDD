import { useState } from 'react'
import heroImg from './assets/hero.png'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header className='bg-blue-400 h-16 flex justify-center items-center w-full border-black border-2'>
        <p className='text-center'>
          Sebastian Medina
        </p>
      </header>
      <div className='bg-amber-50 flex justify-between px-48'>
        <div className='flex-col flex justify-center items-baseline gap-8'>
          <h1 className='text-4xl font-bold'>
            Sistema web para Gestinar el inventario, ventas <br/>
            y prediccion de stock para una Ferreteria
          </h1>
          <p>
            Solución orientada a optimizar el control de productos, registrar ventas, apoyar la reposición y habilitar ventas online.
          </p>
          <div className='flex gap-4'>
            <a href='https://github.com/SebaMD/actividad_2_lab_TDD' className='bg-blue-700 px-4 py-2 border-2 rounded-md hover:bg-red-500 transition-all hover:scale-110 text-white shadow-lg'> {/*la a se usa para enlaces*/}
              Ir al proyecto
            </a>
            <a className='bg-blue-300 px-4 py-2 border-2 rounded-md hover:bg-red-500 transition-all hover:scale-110 text-white shadow-lg'>
              Ver funcionalidades
            </a>
          </div>
        </div>
        <img src={heroImg} alt="logo" />
      </div>
    </>
  )
}

export default App
