import { useCallback, useEffect, useState } from 'react';
import { IoInformationCircle } from 'react-icons/io5'
import { RiSendPlane2Fill } from 'react-icons/ri'
import { sendReqToServer } from "../../../api/useAxios";
import { USER, axios } from "../../../api";
import SplitPane, { Pane } from 'split-pane-react';
import Modal from '@mui/material/Modal';
import 'split-pane-react/esm/themes/default.css'
import AboutDiv from '../../components/About';

const modelStyle = {
    overlay: {
        backgroundColor: 'rgba(255, 255, 255, 0.65)',
        filter: 'blur(35px)',
    },
}
export default function Main2() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(true);
        document.getElementById('rootDiv').style.filter = 'blur(2px)';
    };
    const handleClose = () => {
        setOpen(false);
        document.getElementById('rootDiv').style.filter = 'blur(0px)';
    };

    const [state, setState] = useState({
        videoId: "",
        videoLink: "",
        transcript: "",
        promptValue: "",
        chat: [],
    });

    const extractVideoId = (link) => {
        const regex = /[?&]v=([^&]+)/;
        const match = link.match(regex);
        return match && match[1];
    };

    const [sizes, setSizes] = useState([
        'auto',
        400
    ]);

    const layoutCSS = {
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    };

    const getTranscript = useCallback(async (videoLink) => {
        try {
            const { response, error } = await sendReqToServer({
                axiosInstance: axios,
                url: USER.getTranscript,
                method: "POST",
                requestConfig: {
                    videoURL: videoLink,
                },
            });

            if (response) {

                console.log(response);
                setState((prevState) => ({
                    ...prevState,
                    transcript: response.openaiAPIResult,
                }));
            }
        } catch (err) {
            console.log(err);
        }
    }, []);

    const summarize = async (videoLink) => {
        try {
            const { response, error } = await sendReqToServer({
                axiosInstance: axios,
                url: USER.summarize,
                method: "POST",
                requestConfig: {
                    videoURL: videoLink,
                },
            });
            if (response) {
                const updatedChat = [
                    ...state.chat,
                    { question: "Summarize the video for me", answer: response.openaiAPIResult },
                ];

                setState((prevState) => ({
                    ...prevState,
                    chat: updatedChat,
                }));
            }
        }
        catch (err) {
            console.log(err)
        }
    }

    const genQuiz = async (videoLink) => {
        try {
            const { response, error } = await sendReqToServer({
                axiosInstance: axios,
                url: USER.quiz,
                method: "POST",
                requestConfig: {
                    videoURL: videoLink,
                },
            });
            if (response) {
                console.log(response)
                const updatedChat = [
                    ...state.chat,
                    { question: "Generate a quiz based on the video for me", answer: response.openaiAPIResult },
                ];

                setState((prevState) => ({
                    ...prevState,
                    chat: updatedChat,
                }));
            }
        }
        catch (err) {
            console.log(err)
        }
    }

    const promptResult = async (value, videoLink) => {
        try {
            const { response, error } = await sendReqToServer({
                axiosInstance: axios,
                url: USER.anyPrompt,
                method: "POST",
                requestConfig: {
                    videoURL: videoLink,
                    prom: value,
                },
            });

            console.log(response);

            if (response) {
                // Update the chat item with both question and answer
                const updatedChat = [
                    ...state.chat,
                    { question: value, answer: response.openaiAPIResult },
                ];

                setState((prevState) => ({
                    ...prevState,
                    promptValue: "",
                    chat: updatedChat,
                }));
            }

        } catch (err) {
            console.log(err);
        }
    };

    const getResult = async () => {
        // Call the promptResult function with the question
        promptResult(state.promptValue, state.videoId);
    };

    useEffect(() => {
        const savedVideoLink = localStorage.getItem("videoLink");
        const extractedVideoId = extractVideoId(savedVideoLink);
        console.log("Extracted video", extractedVideoId)
        setState((prevState) => ({
            ...prevState,
            videoLink: savedVideoLink,
            videoId: extractedVideoId,
        }));

        if (extractedVideoId !== "") {
            getTranscript(extractedVideoId);
        }
    }, [getTranscript]);
    // Function to handle sending a message (you can implement your logic here)

    return (
        <div className="p-1 justify-between overflow-hidden w-screen h-screen flex flex-col bg-[#1e1f22] gap-1" id="rootDiv">
            <div className=" pr-4 flex flex-initial justify-between items-center bg-[#222528] rounded-md text-white text-lg font-bold">
                <h1 className='p-3'>RecapAI</h1>
                <div className='text-2xl cursor-pointer' onClick={handleOpen}><IoInformationCircle /></div>
                <Modal
                    open={open}
                    onClose={handleClose}
                    style={modelStyle}
                >
                    <AboutDiv />
                </Modal>
            </div>
            {/* <div className="flex h-[80%] flex-auto justify-between gap-1">
                <div className="w-[70%] flex-1 relative p-2 h-full bg-[#2F3136] rounded-md flex flex-col justify-between ">
                    <div className='text-white absolute top-0 bg-[#2F3136] shadow-md items-center left-0 w-full p-2 flex justify-between'>
                        <div>Chat with AI</div>
                        <div className='flex gap-2'>
                            <button type="button" className="text-slate-300 p-2 rounded-lg hover:shadow-sm hover:text-gray-200" onClick={() => summarize(state.videoLink)}>Summarize</button>
                            <button type="button" className="text-slate-300 p-2 rounded-lg hover:shadow-sm hover:text-gray-200" onClick={() => genQuiz(state.videoLink)}>Generate Quiz</button>
                        </div>
                    </div>
                    <div className="w-full pb-24 pt-12 text-slate-400 overflow-y-auto flex-1 h-full mt-4">
                        {state.chat.map((chatItem, index) => (
                            <div key={index}>
                                <div className="py-2 w-full px-6 text-slate-100 font-semibold">{chatItem.question}</div>
                                <div className="py-2 w-full px-6 bg-transparent">{chatItem.answer}</div>
                            </div>
                        ))}
                    </div>
                    <div className="w-full flex flex-col p-4 bg-gradient-to-t from-[#2F3136] via-[#2F3136] to-transparent pt-20 absolute bottom-0 left-0">

                        <div className="relative w-full">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 21 21">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.15 5.6h.01m3.337 1.913h.01m-6.979 0h.01M5.541 11h.01M15 15h2.706a1.957 1.957 0 0 0 1.883-1.325A9 9 0 1 0 2.043 11.89 9.1 9.1 0 0 0 7.2 19.1a8.62 8.62 0 0 0 3.769.9A2.013 2.013 0 0 0 13 18v-.857A2.034 2.034 0 0 1 15 15Z" />
                                </svg>
                            </div>
                            <input type="text" value={state.promptValue} onChange={(e) => {
                                setState((prevState) => ({
                                    ...prevState,
                                    promptValue: e.target.value
                                }));
                            }} id="voice-search" className="bg-gray-50 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-[#383b41] dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Send a Message" required />
                            <button type="button" onClick={getResult} className="absolute inset-y-0 right-0 flex items-center pr-3">
                                <RiSendPlane2Fill className="text-gray-400" />
                            </button>
                        </div>
                    </div>

                </div>

                <div className=" p-2 w-[400px] gap-2 flex flex-col bg-[#2b2d31] rounded-md justify-between">
                    <div className='w-full flex-none border-2 border-solid overflow-hidden border-white rounded-lg'>
                        <iframe
                            className="w-full aspect-video"
                            src={`https://www.youtube.com/embed/${state.videoId}`}
                            title="YouTube Video Player"
                            allowFullScreen
                        ></iframe>
                    </div>
                    <div className='flex h-full overflow-hidden text-slate-300'>
                        <div className='overflow-y-auto text-justify w-full'>
                            {state.transcript}
                        </div>
                    </div>
                </div>
            </div> */}

            <SplitPane
                split='vertical'
                sizes={sizes}
                onChange={setSizes}
            >
                <div style={{ ...layoutCSS }}>
                    <div className="w-[70%] flex-1 relative p-2 h-full bg-[#2F3136] rounded-md flex flex-col justify-between ">
                        <div className='text-white absolute top-0 bg-[#2F3136] shadow-md items-center left-0 w-full p-2 flex justify-between'>
                            <div>Chat with AI</div>
                            <div className='flex gap-2'>
                                <button type="button" className="text-slate-300 p-2 rounded-lg hover:shadow-sm hover:text-gray-200" onClick={() => summarize(state.videoId)}>Summarize</button>
                                <button type="button" className="text-slate-300 p-2 rounded-lg hover:shadow-sm hover:text-gray-200" onClick={() => genQuiz(state.videoId)}>Generate Quiz</button>
                            </div>
                        </div>
                        <div className="w-full pb-24 pt-12 text-slate-400 overflow-y-auto flex-1 h-full mt-4">
                            {state.chat.map((chatItem, index) => (
                                <div key={index}>
                                    <div className="py-2 w-full px-6 text-slate-100 font-semibold">{chatItem.question}</div>
                                    <div className="py-2 w-full px-6 bg-transparent">{chatItem.answer}</div>
                                </div>
                            ))}
                        </div>
                        <div className="w-full flex flex-col p-4 bg-gradient-to-t from-[#2F3136] via-[#2F3136] to-transparent pt-20 absolute bottom-0 left-0">

                            <div className="relative w-full">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 21 21">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.15 5.6h.01m3.337 1.913h.01m-6.979 0h.01M5.541 11h.01M15 15h2.706a1.957 1.957 0 0 0 1.883-1.325A9 9 0 1 0 2.043 11.89 9.1 9.1 0 0 0 7.2 19.1a8.62 8.62 0 0 0 3.769.9A2.013 2.013 0 0 0 13 18v-.857A2.034 2.034 0 0 1 15 15Z" />
                                    </svg>
                                </div>
                                <input type="text" value={state.promptValue} onChange={(e) => {
                                    setState((prevState) => ({
                                        ...prevState,
                                        promptValue: e.target.value
                                    }));
                                }} id="voice-search" className="bg-gray-50 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-[#383b41] dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Send a Message" required />
                                <button type="button" onClick={getResult} className="absolute inset-y-0 right-0 flex items-center pr-3">
                                    <RiSendPlane2Fill className="text-gray-400" />
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
                <Pane minSize={400} maxSize='50%'>
                    <div style={{ ...layoutCSS }}>
                        <div className=" p-2 gap-2 h-full w-full flex flex-col bg-[#2b2d31] rounded-md justify-between">
                            <div className='w-full flex-none border-2 border-solid overflow-hidden border-white rounded-lg'>
                                <iframe
                                    className="w-full aspect-video"
                                    src={`https://www.youtube.com/embed/${state.videoId}`}
                                    title="YouTube Video Player"
                                    allowFullScreen
                                ></iframe>
                            </div>
                            <div className='flex h-full overflow-hidden text-slate-300'>
                                <div className='overflow-y-auto text-justify w-full'>
                                    {state.transcript}
                                </div>
                            </div>
                        </div>
                    </div>
                </Pane>
            </SplitPane>
        </div>

    )
}
