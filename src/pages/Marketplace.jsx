import { useRef, useState, useEffect } from "react"
import { ItemCard } from "../components/ItemCard"


export const Marketplace = () => {

    const hardwareRef = useRef(true)
    const softwareRef = useRef(true)

    const hardware = [
        {
            'source': './products/quest2.jpeg',
            'alternative': 'Meta quest 2',
            'title': 'Quest 2',
            'caption': 'Oculus meta quest 2, VR glasses',
            'value': 1000000,
        },
        {
            'source': './products/quest3.jpeg',
            'alternative': 'Meta quest 3',
            'title': 'Quest 3',
            'caption': 'Oculus meta quest 3, VR glasses',
            'value': 3000000,
        },
        {
            'source': './products/pc_gaming.jpg',
            'alternative': 'Pc gaming complete ',
            'title': 'PC Gaming',
            'caption': 'Combo PC Gaming!',
            'value': 4000000,
        },
        {
            'source': './products/proyector.jpeg',
            'alternative': 'Video Beam',
            'title': 'Video Beam',
            'caption': 'The best Video Beam',
            'value': 1000000,
        },
        {
            'source': './products/tv_3d.jpeg',
            'alternative': ' 3d Televisor',
            'title': ' 3D Televisor',
            'caption': 'Tv to enjoy 3d content',
            'value': 1000000,
        },
        {
            'source': './products/vision_pro.jpeg',
            'alternative': 'Apple Vision pro',
            'title': 'Apple vision pro',
            'caption': 'Apple vision pro, VR Glasses',
            'value': 10000000,
        },
        
    ]

    const software = [
        {
            'source': './products/ace_combat.jpeg',
            'alternative': 'Ace combat game play image',
            'title': 'Ace combat 7',
            'caption': 'Ace Combat 7, VR game',
            'value': 1000000,
        },
        {
            'source': './products/beat_saber.jpeg',
            'alternative': 'Beat saber game play image',
            'title': 'Beat Saber',
            'caption': 'Beat Saber,  VR game',
            'value': 1000000,
        },
        {
            'source': './products/f1.jpeg',
            'alternative': 'F1 game play image',
            'title': 'Formula 1',
            'caption': 'Formula 1, VR game',
            'value': 1000000,
        },
        {
            'source': './products/fs.jpeg',
            'alternative': 'Flight simulator game play image',
            'title': 'Microsoft Flight Simulator',
            'caption': 'Microsoft Flight Simulator,  VR game',
            'value': 1000000,
        },
        {
            'source': './products/super_hot.jpeg',
            'alternative': 'Super Hot game play image',
            'title': 'Super Hot',
            'caption': 'Super Hot,  VR game',
            'value': 1000000,
        },
    ]

    const[elements, setElements] = useState([])

    const verifyItems = () => {
        if (hardwareRef.current.checked && softwareRef.current.checked){
            setElements([...software,...hardware])
        } else if(hardwareRef.current.checked && !softwareRef.current.checked ){
            setElements([...hardware])
        } else if (softwareRef.current.checked && !hardwareRef.current.checked){
            setElements([...software])
        } else{
            setElements([])
        }
    }

    useEffect(() => {
        verifyItems()
    }, []
    )

    

    const itemsToRender = () => {
        if (elements.length == 0){
            return (
                <h2 className="backdrop-blur-sm text-white drop-shadow-[2px_2px_2px_#00e1ff] text-center text-2xl my-44">
                    SELECT ITEMS TO SHOW
                </h2> 
            )
        }else{
            return (
                <div className="flex flex-wrap justify-center">
                    {elements.map((item,index)=>(
                    <ItemCard key={index} source={item.source} alternative={item.alternative} title={item.title} caption={item.caption}   value={item.value}   />
                    ))}
                
                </div>
            )
        }
        
    }

    return(
        <div>
             <section className=" h-screen">
                <div className=" absolute top-0 h-full w-full overflow-hidden" >
                    <img width='100%' src="./marketplace_image.jpeg" alt=" A girl with Vr glasses  " />
                </div>
                
                <div className="absolute top-0 h-full w-full flex flex-col justify-center">
                    <div className="backdrop-blur-sm text-white drop-shadow-[2px_2px_2px_#00e1ff]">
                        <h1 className=" w-full text-center text-9xl  ">
                            MARKETPLACE
                        </h1>

                    </div>
                </div>
            </section>
            <section className="mt-10">
                <h2 className="backdrop-blur-sm text-white drop-shadow-[2px_2px_2px_#00e1ff] text-center text-2xl">
                    SELECT WHICH TYPES OF ELEMENTS YOU WANT TO DISPLAY:
                </h2>
                <div className=" my-10 flex w-full justify-center backdrop-blur-sm text-white drop-shadow-[2px_2px_2px_#00e1ff] text-center text-xl">
                    <label className="px-10"  htmlFor="software">
                        Software
                        <input defaultChecked='true' className="mx-5" name="software"  type="checkbox" ref={softwareRef} onChange={verifyItems} />
                    </label>
                    
                    <label className="px-10" htmlFor="hardware">
                        Hardware
                        <input defaultChecked='true' className="mx-5" name="hardware" type="checkbox" ref={hardwareRef} onChange={verifyItems} />
                    </label>    
                </div>
            </section>
            <section className="">
                {itemsToRender()}
            </section>c
        </div>
    )
}