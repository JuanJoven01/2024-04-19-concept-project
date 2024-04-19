
export const ItemCard = (props) => {

    const sendMessage = () => {
        window.open(`https://api.whatsapp.com/send?phone=573217200994&text=Hola, quiero comprar: ${props.title}`, '_blank')
    }

    return(
        
        <figure className=" w-64 mt-20 mx-10 border-[1px] border-slate-500  flex flex-col">
            <div className="w-full h-[60%] overflow-hidden">
                <img className=" h-full w-full object-cover"  src={props.source} alt={props.alternative} />
            </div>
            
            <figcaption className="px-2 h-[40%] flex flex-col items-center bg-white">
                <h2 className=" text-center h-[20%]">
                    {props.title}
                </h2>
                <div className='text-center h-[55%] flex items-center'>
                    <p className="  ">
                        {props.caption}
                    </p>
                </div>
                <button onClick={sendMessage} className="h-[25%] w-[75%] border-2 mb-2 bg-blue-500 hover:shadow-lg hover:shadow-sky-600 hover:cursor-pointer hover:animate-pulse" >Comprar!</button>
            </figcaption>
        </figure>
    )
}