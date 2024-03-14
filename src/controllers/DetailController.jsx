import { useParams } from "react-router-dom";
import DetailView from "../views/DetailView";
import { useEffect, useState } from "react";
import DetailModel from "../models/DetailModel";

const DetailController = () => {
  const [coin, setCoin] = useState(null);
  // 1 ) url den id yi almak

  const { id } = useParams();

  // 2)coinin detay verilerini ve fiyat gecmişini apiden al

  useEffect(() => {
    DetailModel.getCoin(id).then((data) => setCoin(data));
  }, []);

  // clastan ornek alma

  const model = new DetailModel(coin);
  console.log(model);

  return <DetailView model={model} />;
};

export default DetailController;
