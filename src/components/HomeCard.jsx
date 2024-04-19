import {useNavigate} from 'react-router-dom'


export const HomeCard = (props) => {
    const navigate = useNavigate()

    return(
        
        <figure className=" w-96 mt-20 border-[1px] border-slate-500 hover:shadow-2xl hover:shadow-cyan-500 bg-white hover:cursor-pointer flex flex-col" onClick={() => navigate(props.navigate)  }>
            <img src={props.source} alt={props.alternative} />
            <figcaption className="p-2 h-full">
                <h2 className=" text-center h-[20%]">
                    {props.title}
                </h2>
                <div className='text-center h-[80%] flex items-center'>
                    <p className="  ">
                        {props.caption}
                    </p>
                </div>
                
            </figcaption>
        </figure>
    )
}