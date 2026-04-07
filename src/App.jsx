import heroImg from './assets/ilustracion_inventario.webp'

function App() {

  return (
    <>
      <header className='bg-blue-400 h-16 flex justify-center items-center w-full border-black border-b-2 border-b-blue-700'>
        <p className='text-center font-bold text-lg '>
          Sebastian Medina
        </p>
      </header>
      <div className='text-white flex justify-between px-48 gap-12 py-24'>
        <div className='flex-col flex justify-center items-baseline gap-8'>
          <h1 className='text-4xl font-bold'>
            Sistema web para gestionar el inventario, ventas  
            y predicción de stock para una ferretería
          </h1>
          <p>
            Solución orientada a optimizar el control de productos, registrar ventas, apoyar la reposición y habilitar ventas online.
          </p>
          <div className='flex gap-4'>
            <a href='https://github.com/SebaMD/actividad_2_lab_TDD' className='font-bold bg-blue-700 px-4 py-2 border-2 border-blue-700 rounded-md hover:bg-red-500 transition-all hover:scale-110 text-white shadow-lg'> {/*la a se usa para enlaces*/}
              Ir al proyecto
            </a>
            <a className='font-medium border-blue-500 px-4 py-2 border-2 rounded-md hover:bg-red-200 transition-all hover:scale-110 text-blue-500 shadow-lg'>
              Ver funcionalidades
            </a>
          </div>
        </div>
        <img src={heroImg} alt="logo" className='w-110 rounded-2xl'/>
      </div>

      <div className='text-center border-t-2 border-t-gray-700 py-12 px-48'>
        <h2 className='text-3xl font-bold mb-4'>Problemas en el control de stock y ventas en ferreterías</h2>
        <p className='text-gray-400 max-w-md mx-auto text-center'>La ferretería no cuenta con un sistema eficiente para controlar su inventario y ventas. Esto genera errores, falta de información y pérdidas económicas, además de limitar su crecimiento al no tener ventas online.</p>

        <div className='text-start flex flex-row flex-wrap gap-8 mt-8'>
          <div className='bg-black border border-gray-700 rounded-md transition-all hover:border-blue-500 px-8 py-8 flex flex-row gap-4 flex-1 min-w-md hover:scale-104 shadow-lg'>
            <span>
              //falta icono
            </span>
            <div>
              <h3 className='text-lg font-semibold flex flex-row gap-4 mb-2'>
                Falta de precisión en el control de stock
              </h3>
              <p className='text-gray-400'>
                
              </p>
            </div>
          </div>
        </div>

        <div className='bg-black border border-gray-700 rounded-md transition-all hover:border-blue-500 px-8 py-8 flex-row gap-4 flex-1 min-w-md hover:scale-104 shadow-lg'>
            <span>
              //falta icono
            </span>
            <div>
              <h3 className='text-lg font-semibold flex flex-row gap-4 mb-2'>
                Baja capacidad de análisis
              </h3>
              <p className='text-gray-400'>
                
              </p>
            </div>
        </div>

        <div className="bg-black border border-gray-700 rounded-md transition-all hover:border-blue-500 px-8 py-8 flex flex-row gap-4 flex-1 min-w-md hover:scale-104 shadow-lg">
          <span>
            //falta icono
          </span>
          <div>
            <h3 className="text-lg font-semibold flex flex-row gap-4 mb-2">
              Procesos poco optimizados
            </h3>
            <p className="text-gray-400">
              
            </p>
          </div>
        </div>

        <div className="bg-black border border-gray-700 rounded-md transition-all hover:border-blue-500 px-8 py-8 flex flex-row gap-4 flex-1 min-w-md hover:scale-104 shadow-lg">
          <span>
            //Falta icono
          </span>
          <div>
            <h3 className="text-lg font-semibold flex flex-row gap-4 mb-2">
              Ausencia de un apartado de ventas online
            </h3>
            <p className="text-gray-400">
              
            </p>
          </div>
        </div>

      </div>
    </>
  )
}

export default App
