
import { CommunityCards } from "../components/CommunityCards"

export const Community = () => {

    const sendMessage = () => {
        window.open(`https://api.whatsapp.com/send?phone=573217200994&text=Hola, Hello, I need support `, '_blank')
    }

    return(
        <div>
        <section className=" h-screen">
           <div className=" absolute top-0 h-full w-full overflow-hidden" >
               <img width='100%' src="./community_image.jpeg" alt=" A girl with Vr glasses  " />
           </div>
           
           <div className="absolute top-0 h-full w-full flex flex-col justify-center">
               <div className="backdrop-blur-sm text-white drop-shadow-[2px_2px_2px_#00e1ff]">
                   <h1 className=" w-full text-center text-9xl  ">
                       COMMUNITY
                   </h1>

               </div>
           </div>
       </section>
       <section className="flex justify-around px-40">
                <CommunityCards community='of gamers' source='./gamer.jpeg' alternative='face and planets generated by IA' title='JOIN THE GAMER COMMUNITY' caption='If you are passionate about gaming, this community is perfect for you, you can interact with other players until you join a competitive team.' />
                <CommunityCards community='of developers' source='./developer.jpeg' alternative='face and planets generated by IA' title='JOIN THE COMMUNITY OF DEVELOPERS' caption='Our community has developers in all areas of programming, from data science to mobile development, join us to continue improving together.' />
                <CommunityCards community='of athletes' source='./excercise.jpeg' alternative='face and planets generated by IA' title='JOIN THE COMMUNITY OF ATHLETES' caption='One of the best communities for doing sports, you can do sports in the metaverse with your colleagues supported by virtual and/or mixed reality, you can also attend meetups in different cities.' />            
            </section>
            <section className="flex justify-around px-40">
                <div className="  my-20 border-[1px] border-slate-500 hover:shadow-2xl hover:shadow-cyan-500 bg-white hover:cursor-pointer" >
                    <figure className="flex" onClick={sendMessage}>
                        <figcaption className="w-[200px] text-center flex flex-col justify-center">
                            <h2 className="pb-10">
                                SUPPORT 
                            </h2>
                            <p className="mx-4">
                            If you have any questions or require support, you can contact us and we will be happy to help you.
                            </p>
                        </figcaption>
                        <img width="500px" className="" src="./fixer.jpeg" alt="a photo of the earth" />
                    </figure>
                    
                </div>
            </section>
   </div>
    )
}