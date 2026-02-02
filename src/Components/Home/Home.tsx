import {Button} from "@/Components/ui/button.tsx";
import logo from "../../../public/vite.svg"
import '/src/App.css'
import {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleXmark} from "@fortawesome/free-solid-svg-icons";

const Home = () => {

    const [dialog,setDialog]=useState(false);


    function handleCreateNew() {

    }

    function HandleJoinTeam() {

    }

    return (
        <div className={`bg-black w-full h-[100dvh] m-0 p-0 grid place-items-center`}>
            <div className={"border-white/70 bg-blue-950 border-1 w-[20vw] h-max rounded-2xl place-items-center grid gap-2 p-3"}>
                <div className={"w-[full] m-auto place-items-center text-center"}>
                    <img src={logo} className={"aspect-square w-[3vw]"} alt=""/>
                    <span className={"text-sm text-white/50"}>A collaborative interface to share ideas of individual and evaluate them properly.</span>
                </div>
                <div className={"w-[75%] flex gap-3 h-max  items-center justify-center m-auto p-3"}>
                    <Button onClick={()=>setDialog(true)} variant={'secondary'} className={"button-shadow"} style={{background:"darkgoldenrod",color:"white"}}>
                        Create new
                    </Button>
                    <Button onClick={()=>HandleJoinTeam()} variant={'secondary'}>
                        Join team
                    </Button>
                </div>
                <div className={"w-full"}>
                    <div className={"w-[90%] border-1 m-auto opacity-30"}></div>
                    <div className={"w-full m-auto text-center"}>
                        <Button variant={"link"} className={"p-1 text-white/60 text-sm"}>Privacy</Button>
                    </div>
                </div>
                <dialog className={`${dialog? "block":"hidden"} border-1 w-[20rem] h-[20rem] inset-0 m-auto rounded-2xl`}>
                    <div className={"p-2"}><FontAwesomeIcon icon={faCircleXmark} onClick={()=>setDialog(false)} /></div>
                </dialog>
            </div>
        </div>
    );
};

export default Home;