import { useState } from "react";
import { useNavigate } from "react-router-dom";




const VideoCallForm = () => {

const[roomid , setRoomid] = useState("");

const nav = useNavigate();

const handleGenerateId = () => {
    const randomid = Math.random().toString(36).substring(2,9)

    setRoomid(randomid);
}


const HnadleCreateRoom = () => {
    if(roomid === "") {
        alert("Please generate the room id");
        return;
    }
    nav(`/room/${roomid}`);

}
    return (
        <div className="bg-blue-500 p-[20px] w-[500px] mx-auto mt-[50px]">

         <h1 className="text-[22px] text-white font-bold mb-[40px]">Generate a room id and create a meeting</h1>

            <div>
            <input type="text" className="py-[5px] w-[200px] pl-[20px] text-center mx-auto" value={roomid} placeholder="Generate a room id" />
            <button onClick={handleGenerateId} className="bg-yellow-400 py-[5px] px-[10px] text-white font-bold">Generate</button>
            </div>

            <div className="flex justify-center">
                <button onClick={HnadleCreateRoom} disabled ={!roomid} className="bg-red-400 mt-[20px] py-[5px] px-[10px] text-white font-bold">Create a Meeting</button>
            </div>
        </div>
    );
};

export default VideoCallForm;