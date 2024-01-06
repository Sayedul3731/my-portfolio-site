import { FaDownload } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const DownloadPdf = () => {

     useEffect(() => {
          AOS.init({
              duration: 3000
          })
      }, [])

  return (
    <div 
    data-aos="flip-left"
    className="mb-20 text-center flex justify-center">
      <a href="ResumeOfSayedul-2.pdf" download="ResumeOfSayedul-2.pdf">
        <button className="uppercase rounded-sm bg-[#221E22] px-3 font-bold shadow-xl shadow-green-600 flex justify-center items-center gap-2 py-[6px]">Download Resume <span><FaDownload></FaDownload></span> </button>
      </a>
    </div>
  );
};

export default DownloadPdf;



