import { useEffect, useRef } from "react";
import '../css/webcam/webcam.css';
import Navbar from "../navbar/Navbar";


const Webcam = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const streamWebcam = async () => {
      try {
        videoRef.current.srcObject = await navigator.mediaDevices.getUserMedia({ video: true });
      } catch (error) {
        console.error("Webcam access error:", error);
      }
    };

    streamWebcam();

    // return () => videoRef.current?.srcObject?.getTracks().forEach(track => track.stop());
  }, []);

  return (
    <>
    <Navbar />
  <div id="webcam-body">
    <video ref={videoRef} id="vid" autoPlay />;
    </div>
    </>
    )
};

export default Webcam;
