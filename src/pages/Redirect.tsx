import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

// Contoh data array/JSON yang berisi ID dan URL iklan
const adLinks = [
  { id: "b5Hsb8Hd", url: "https://bmmads.com/get/?spot_id=2006837&cat=25&subid=808526990", name: "MyBid" },
  { id: "Gs86shHs", url: "https://lovingassociate.com/bG3SVz0xP.3/pfvobLmSVjJ/ZjDf0Q0tOODvQsziOlDkMI3ILHT/QQ4dN/DZMF4YMizmg-", name: "HillTop" },
  { id: "G6shSh7H", url: "https://so-gr3at3.com/go/1239096", name: "Roller" },
  { id: "Hsh4hI8s", url: "https://behoneyono.com/ilcDrCNYWkby/94691", name: "Galaxion" },
];

const Redirect = () => {
  const { id } = useParams(); // Mendapatkan ID dari URL
  const navigate = useNavigate();

  useEffect(() => {
    // Mencari URL iklan berdasarkan ID yang diberikan
    const ad = adLinks.find((ad) => ad.id === id);

    if (ad) {
      // Jika ditemukan, redirect ke URL iklan
      window.location.href = ad.url;
    } else {
      // Jika tidak ditemukan, bisa redirect ke halaman error atau halaman lain
      navigate("/404"); // Misalnya halaman error 404
    }
  }, [id, navigate]);

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black">
      <p className="text-white text-xl">Redirecting...</p>
    </div>
  );
};

export default Redirect;
