import React from 'react';
import './App.css';


function App() {
 
  return (

    <>
      <div >
        <h1 className='text-yellow-400 text-4xl text-center mt-10'>Portfolio</h1>
        <h1 className='text-white text-4xl text-center mt-10'>Hi I'm Naveen Kumar</h1>
        <h1 className='text-white text-4xl text-center mt-10'>Check Out My Links</h1>
        <center>
          <div className='grid grid-rows-4 text-white mt-10 w-fit  '>

            <button onClick={() => { window.location.href = "https://github.com/Naveen17k" }} className="mb-2 bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">
              GitHub
            </button>
            <button onClick={() => { window.location.href = "https://t.me/Naveen1110k" }} className="mb-2 bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">
              Telegram
            </button>
            <button onClick={() => { window.location.href = "https://t.me/+WKbYTwqB40oyNDNl" }} className="mb-2 bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded\">
              Developement Discussion
            </button>
            <button onClick={() => { window.location.href = "https://www.instagram.com/n_aveen.nk/" }} className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">
              Instagram
            </button>

          </div>
        </center>
      </div>
    </>
  );
}

export default App;
