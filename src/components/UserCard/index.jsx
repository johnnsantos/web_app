import UndefinedAvatar from "../../img/undefined_avatar.png";
import { MainCard } from "./style";
import {
  AiOutlineMail,
  AiOutlineFieldNumber,
  AiOutlinePhone,
} from "react-icons/ai";
import { GrLocation } from "react-icons/gr";
import { FaInternetExplorer } from "react-icons/fa";
import { IoBusinessOutline } from "react-icons/io5";
import { BiArrowBack } from "react-icons/bi";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const UserCard = () => {
  const history = useHistory();
  const user = useSelector((state) => state.GetUser);

  const { id, name, age, email, address, phone, website, company } = user;

  return (
    <MainCard>
      {user !== [] && (
        <>
          <div className="header">
            <div className="button-area">
              <button onClick={() => history.push("/")}>
                <BiArrowBack />
                Voltar
              </button>
            </div>
            <img src={UndefinedAvatar} alt="Avatar" />

            <span>
              {id} - {name}
            </span>
          </div>
          <div className="contents">
            <ul>
              <li>
                <AiOutlineFieldNumber />
                Idade: {age}
              </li>
              <li>
                <AiOutlineMail />
                E-mail: {email && email.toLowerCase()}
              </li>
              <li>
                <GrLocation />
                Cidade: {address?.city}
              </li>
              <li>
                <AiOutlinePhone />
                Telefone: {phone}
              </li>
              <li>
                <FaInternetExplorer />
                Website: {website}
              </li>
              <li>
                <IoBusinessOutline />
                Empresa: {company?.name}
              </li>
            </ul>
          </div>
          <div className="map-content">
            {!isNaN(parseFloat(address?.geo.lat)) &&
              !isNaN(parseFloat(address?.geo.lng)) && (
                <>
                  <MapContainer
                    center={[
                      parseFloat(address?.geo.lat),
                      parseFloat(address?.geo.lng),
                    ]}
                    zoom={1}
                    scrollWheelZoom={false}
                    style={{ width: "100%", height: "35vh" }}
                  >
                    <TileLayer
                      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker
                      position={[
                        parseFloat(address?.geo.lat),
                        parseFloat(address?.geo.lng),
                      ]}
                    >
                      <Popup>{name}</Popup>
                    </Marker>
                  </MapContainer>
                </>
              )}
          </div>
        </>
      )}
    </MainCard>
  );
};

export default UserCard;
