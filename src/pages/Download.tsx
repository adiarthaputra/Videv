import { FaDownload } from 'react-icons/fa';

export function Download() {
  const videoUrl = sessionStorage.getItem('videoUrl');
  const videoTitle = sessionStorage.getItem('videoTitle');

  const randomUrls = [
    'https://otieu.com/4/10069259',
    'https://viidedss.com/dc/?blockID=388556',
    'https://viiukuhe.com/dc/?blockID=410871'
  ];
  
  const handleDownload = () => {
    if (videoUrl) {
      window.open(videoUrl, '_blank');

      setTimeout(() => {
        const randomUrl = randomUrls[Math.floor(Math.random() * randomUrls.length)];
        window.location.href = randomUrl;
      }, 2000);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-[#2C3539] text-gray-200">
      <div className="container mx-auto p-4 text-center">
        <h1 className="text-2xl font-bold mb-6 text-[#9FB6D8]">
          Download Video {videoTitle ? `- ${videoTitle}` : ''}
        </h1>
        {videoUrl ? (
          <button
            onClick={handleDownload}
            className="bg-[#3D4852] text-white p-4 rounded-lg flex items-center justify-center mx-auto hover:bg-[#4A5568] transition-colors shadow-lg"
          >
            <FaDownload className="mr-3" />
            Download Now
          </button>
        ) : (
          <p className="text-gray-400">No video URL is available for download.</p>
        )}
      </div>
    </div>
  );
}
