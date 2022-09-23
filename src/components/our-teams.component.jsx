import React, { useState, useEffect } from "react";
import profile1 from "../assets/images/profile.jpg";
import { urls } from "../url";
import Loading from "./loading.component";
import defaultProfile from "../assets/images/default-profile.png";

const profile =
  "https://images.pexels.com/photos/1454187/pexels-photo-1454187.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load";

const profile2 =
  "https://images.pexels.com/photos/635270/pexels-photo-635270.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

const profile4 =
  "https://images.pexels.com/photos/8748315/pexels-photo-8748315.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load";

const profile3 =
  "https://images.pexels.com/photos/7791882/pexels-photo-7791882.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

const profile5 =
  "https://images.pexels.com/photos/64385/pexels-photo-64385.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";

const profile6 =
  "https://images.pexels.com/photos/623305/pexels-photo-623305.jpeg?auto=compress&cs=tinysrgb&w=800  ";

const OurTeamsComponent = () => {
  const [teams, setTeams] = useState([]);
  const [BOD, setBOD] = useState(false);

  useEffect(() => {
    fetch(urls + "teams/")
      .then((res) => res.json())
      .then((data) => {
        setTeams(data);
        data.filter((data) => (data.role === "BOD" ? setBOD(true) : null));
      });
  }, []);

  return (
    <>
      {teams[0] !== undefined ? (
        <div className="our-teams">
          <div className="sec">
            {BOD && <div className="title">BOD</div>}

            <div className="team-list">
              {teams
                .filter((data) => data.role === "BOD")
                .map((team) => (
                  <div className="item" key={team.id}>
                    <div className="image-sec">
                      <img
                        src={team.image ? team.image : defaultProfile}
                        alt=""
                      />
                    </div>
                    <div className="details-sec">
                      <h3 className="name">{team.name}</h3>
                      <p className="desc">{team.description}</p>
                    </div>
                  </div>
                ))}
            </div>
          </div>

          <div className="sec">
            <div className="team-list">
              {teams
                .filter((data) => data.role === "CEO")
                .map((team) => (
                  <div className="item" key={team.id}>
                    <div className="image-sec">
                      <img
                        src={team.image ? team.image : defaultProfile}
                        alt=""
                      />
                    </div>
                    <div className="details-sec">
                      <h3 className="name">{team.name}</h3>
                      <h5 className="depart">{team.role}</h5>
                    </div>
                  </div>
                ))}
            </div>

            <div className="team-list">
              {teams
                .filter((data) => data.role === "HOD")
                .map((team) => (
                  <div className="item" key={team.id}>
                    <div className="image-sec">
                      <img
                        src={team.image ? team.image : defaultProfile}
                        alt=""
                      />
                    </div>
                    <div className="details-sec">
                      <h3 className="name">{team.name}</h3>
                      <h5 className="depart">{team.role}</h5>
                    </div>
                  </div>
                ))}
            </div>

            <div className="team-list">
              {teams
                .filter((data) => data.role === "Staff")
                .map((team) => (
                  <div className="item" key={team.id}>
                    <div className="image-sec">
                      <img src={team.image} alt="" />
                    </div>
                    <div className="details-sec">
                      <h3 className="name">{team.name}</h3>
                      <h5 className="depart">{team.role}</h5>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default OurTeamsComponent;
