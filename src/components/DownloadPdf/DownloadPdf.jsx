import { FaDownload } from "react-icons/fa";

const DownloadPdf = () => {


  return (
    <div className="mb-20 text-center flex justify-center">
      <a href="ResumeOfSayedul.pdf" download="ResumeOfSayedul.pdf">
        <button className="uppercase bg-[#221E22] px-3 font-bold shadow-xl shadow-green-600 flex justify-center items-center gap-2 py-[6px]">Download Resume <span><FaDownload></FaDownload></span> </button>
      </a>
    </div>
  );
};

export default DownloadPdf;



