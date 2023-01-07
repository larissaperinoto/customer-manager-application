import { useEffect, useState } from "react";
import { requestDogs } from "../services/requests";
import "../style/Dogs.css";

export default function Dogs() {
  const [dog, setDog] = useState("");

  async function requestAPI() {
    const dog = await requestDogs();
    setDog(dog);
  }

  useEffect(() => {
    requestAPI();
  }, []);

  useEffect(() => {
    if (dog.includes("mp4")) {
      requestAPI();
    }
  }, [dog]);

  return (
    <section className="dogs_section">
      <div className="reload_container">
        <h2>Recarregue um doguinho</h2>
        <button type="button" onClick={() => requestAPI()}>
          <img
            src="https://img.icons8.com/office/480/null/synchronize.png"
            alt="Reload"
          />
        </button>
      </div>
      <div className="dog_image_container">
        <img src={dog} alt="Dog" />
      </div>
    </section>
  );
}
