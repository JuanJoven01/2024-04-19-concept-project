


export const Games = () => {

    return(
        <div className="pb-20">
        <section className=" h-screen">
           <div className=" absolute top-0 h-full w-full overflow-hidden" >
               <img width='100%' src="./games_image.jpeg" alt=" A girl with Vr glasses  " />
           </div>
           
           <div className="absolute top-0 h-full w-full flex flex-col justify-center">
               <div className="backdrop-blur-sm text-white drop-shadow-[2px_2px_2px_#00e1ff]">
                   <h1 className=" w-full text-center text-9xl  ">
                       ONLINE GAMES
                   </h1>

               </div>
           </div>
       </section>
       <section>
            <div>
                <h2 className=" my-10 w-full text-center text-6xl backdrop-blur-sm text-white drop-shadow-[2px_2px_2px_#00e1ff]  ">
                        PIANOGAMES
                </h2>
                <div className="flex justify-center">
                    <div className="mx-10">
                    <h3 className=" my-10 w-full text-center text-xl backdrop-blur-sm text-white drop-shadow-[2px_2px_2px_#00e1ff]  ">
                    PIANO TILES
                    </h3>
                    <iframe src="https://www.juegosjuegos.com/embed/perfect-piano" width="640" height="480" marginwidth="0" marginheight="0" hspace="0" vspace="0" frameborder="0" scrolling="no" webkitallowfullscreen="true" mozallowfullscreen="true" msallowfullscreen="true" allowfullscreen="true" />

                    </div>

                    <div className="mx-10">
                    <h3 className=" my-10 w-full text-center text-xl backdrop-blur-sm text-white drop-shadow-[2px_2px_2px_#00e1ff]  ">
                    PIANO TILES REFLEX
                    </h3>
                    <iframe src="https://www.juegosjuegos.com/embed/piano-tiles-reflex" width="860" height="485" marginwidth="0" marginheight="0" hspace="0" vspace="0" frameborder="0" scrolling="no" webkitallowfullscreen="true" mozallowfullscreen="true" msallowfullscreen="true" allowfullscreen="true" />
                    </div>
                </div>

                <h2 className=" my-10 w-full text-center text-6xl backdrop-blur-sm text-white drop-shadow-[2px_2px_2px_#00e1ff]  ">
                        SPORTS GAMES
                </h2>
                <div className="flex justify-center flex-wrap">
                    <div className="mx-10">
                    <h3 className=" my-10 w-full text-center text-xl backdrop-blur-sm text-white drop-shadow-[2px_2px_2px_#00e1ff]  ">
                    SOCCER HEADS
                    </h3>
                    <iframe src="https://www.juegosjuegos.com/embed/soccer-heads" width="870" height="545" marginwidth="0" marginheight="0" hspace="0" vspace="0" frameborder="0" scrolling="no" webkitallowfullscreen="true" mozallowfullscreen="true" msallowfullscreen="true" allowfullscreen="true" />
                    </div>

                    <div className="mx-10">
                    <h3 className=" my-10 w-full text-center text-xl backdrop-blur-sm text-white drop-shadow-[2px_2px_2px_#00e1ff]  ">
                    MINI GOLF
                    </h3>
                    <iframe src="https://www.juegosjuegos.com/embed/minigolf-world" width="800" height="600" marginwidth="0" marginheight="0" hspace="0" vspace="0" frameborder="0" scrolling="no" webkitallowfullscreen="true" mozallowfullscreen="true" msallowfullscreen="true" allowfullscreen="true" />
                    </div>

                    <div className="mx-10">
                    <h3 className=" my-10 w-full text-center text-xl backdrop-blur-sm text-white drop-shadow-[2px_2px_2px_#00e1ff]  ">
                    TABLE TENNIS
                    </h3>
                    <iframe src="https://www.juegosjuegos.com/embed/table-tennis-world-tour" width="640" height="480" marginwidth="0" marginheight="0" hspace="0" vspace="0" frameborder="0" scrolling="no" webkitallowfullscreen="true" mozallowfullscreen="true" msallowfullscreen="true" allowfullscreen="true" />
                    </div>
                </div>
            </div>
                
                
        </section>
   </div>
    )
}