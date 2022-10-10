import React, { useState } from "react";
import { Link } from "react-router-dom";
//import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDog,
  faEdit,
  faPaw,
  faPlus,
  faCamera,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import "./singlepatient.css";
import { useNavigate } from "react-router-dom";

import axios from "axios";

function Singlepatient() {
  // const location = useLocation();
  //console.log(location)

  let navigate = useNavigate();
  const [name, setName] = useState("");
  const [owner, setOwner] = useState("");
  const [ownerContact, setOwnerContact] = useState("");
  const [species, setSpecies] = useState("");
  const [breed, setBreed] = useState("");
  const [dob, setDob] = useState("");
  const [sex, setSex] = useState("");
  const [reproduction, setReproduction] = useState("");

  //care history
  const [diagnosis, setDiagnosis] = useState("");
  const [indication, setIndication] = useState("");
  const [initMassSize, setInitMassSize] = useState("");
  const [surgery, setSurgery] = useState("");
  const [vaccinations, setVaccinations] = useState("");
  const [weight, setWeight] = useState("");
  const [comorbidity, setComorbidity] = useState("");

  //Theraphy
  const [theraphyName, setTheraphyName] = useState("");
  const [tindication, setTindication] = useState("");
  const [tumorType, setTumorType] = useState("");
  const [tumorVolume, setTumorVolume] = useState("");
  const [grade, setGrade] = useState("");
  const [cellType, setCellType] = useState("");
  const [tnmStage, setTnmStage] = useState("");
  const [overAllStage, setOverAllStage] = useState("");

  const [pweight, setPweight] = useState("");
  const [therapeutic, setTherapeutic] = useState("");
  const [tname, setTname] = useState("");
  const [ivolume, setIvolume] = useState("");
  const [ores, setOres] = useState("");
  const [retreat, setRetreat] = useState("");
  const [nacrosis, setNacrosis] = useState("");
  //const[allergies,setAllergies] = useState({ val: []});

  const [allergyList, setAllergyList] = useState([]);

  let handleChange = (index, item) => {
    let newFormValues = [...allergyList];
    newFormValues[index] = item;
    setAllergyList(newFormValues);
  };

  function addpatient() {
    var myJson = {
      name: name,
      owner: owner,
      ownerContact: ownerContact,
      species: species,
      breed: breed,
      dob: dob,
      sex: sex,
      reproduction: reproduction,
      diagnosis: diagnosis,
      indication: indication,
      initMassSize: initMassSize,
      surgery: surgery,
      vaccinations: vaccinations,
      weight: weight,
      comorbidity: comorbidity,
      theraphyName: theraphyName,
      tindication: tindication,
      tumorType: tumorType,
      tumorVolume: tumorVolume,
      grade: grade,
      cellType: cellType,
      tnmStage: tnmStage,
      overAllStage: overAllStage,
      pweight: pweight,
      therapeutic: therapeutic,
      tname: tname,
      ivolume: ivolume,
      ores: ores,
      retreat: retreat,
      nacrosis: nacrosis,
      allergyList: allergyList,
    };
    axios({
      method: "post",
      url: "https://lifepulse-backend.herokuapp.com/addpatient",
      data: myJson,
      headers: { "Content-Type": "application/json" },
    })
      .then(function (response) {
        //handle success
        navigate("/patients");
      })
      .catch(function (response) {
        //handle error
        alert("Please Enter Proper amount");
      });
  }

  const addAllergyList = (length) => {
    // if (allergyList.length === length) {
    //   setAllergyList((list) => {
    //     list.push(allergyList.length);
    //     return [...list];
    //   });
    // }

    setAllergyList([...allergyList, ""]);
  };
  const deleteAllergy = (index) => {
    setAllergyList((list) => {
      list.splice(index, 1);
      return [...list];
    });
  };

  return (
    <div>
      <Link to="/patients">Patients</Link>
      <>
        <span style={{ marginLeft: "10px" }}>
          {" > "} {"New Patient"}
        </span>
      </>

      <div>
        <div className="btn-container-main">
          <div>
            <FontAwesomeIcon
              icon={faPaw}
              style={{
                color: "#3C68B1",
                width: "45px",
                height: "43px",
                border: "1px solid #3C68B1",
                borderRadius: "50%",
                padding: 5,
                filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
              }}
            />
          </div>
          <div className="btn-container">
            <button className="upload-photo">
              <FontAwesomeIcon icon={faCamera} />
              <span style={{ marginLeft: "10px" }}> {"Upload Photo"} </span>
            </button>
            <button
              className="upload-photo-cancel"
              style={{
                width: "150px",
                backgroundColor: "#D95767",
                border: "1px solid #D95767",
              }}
            >
              <FontAwesomeIcon icon={faEdit} />
              <span style={{ marginLeft: "10px" }}> {"Cancel"} </span>
            </button>
          </div>
        </div>
      </div>

      <div>
        <div className="cardtitle">
          <div
            style={{
              fontWeight: 700,
              fontSize: "16px",
              marginLeft: "20px",
              paddingTop: "6px",
            }}
          >
            Profile
          </div>
        </div>
        <div>
          <div className="cardbody">
            <div style={{ display: "flex", justifyContent: "space-around" }}>
              <div
                style={{
                  width: "50%",
                  marginTop: "10px",
                  marginRight: "190px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    marginBottom: "8px",
                  }}
                >
                  <span className="label">
                    Patient Name <span style={{ color: "red" }}>*</span>{" "}
                  </span>
                  <input
                    type="text"
                    placeholder="Enter Patient Name"
                    className="inputType"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    marginBottom: "8px",
                  }}
                >
                  <span className="label">Owner</span>
                  <input
                    type="text"
                    className="inputType"
                    onChange={(e) => setOwner(e.target.value)}
                    value={owner}
                  />
                </div>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    marginBottom: "8px",
                  }}
                >
                  <span className="label">Owner Contact</span>
                  <input
                    type="text"
                    className="inputType"
                    onChange={(e) => setOwnerContact(e.target.value)}
                    value={ownerContact}
                  />
                </div>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    marginBottom: "8px",
                  }}
                >
                  <span className="label">Species</span>
                  <input
                    type="text"
                    className="inputType"
                    onChange={(e) => setSpecies(e.target.value)}
                    value={species}
                  />
                </div>
              </div>
              <div
                style={{
                  width: "50%",
                  marginTop: "10px",
                  marginRight: "190px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    marginBottom: "8px",
                  }}
                >
                  <span className="label">Breed</span>
                  <input
                    type="text"
                    className="inputType"
                    onChange={(e) => setBreed(e.target.value)}
                    value={breed}
                  />
                </div>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    marginBottom: "8px",
                  }}
                >
                  <span className="label">Date Of Birth</span>
                  <input
                    type="text"
                    className="inputType"
                    onChange={(e) => setDob(e.target.value)}
                    value={dob}
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    marginBottom: "8px",
                  }}
                >
                  <span className="label">Sex</span>
                  <input
                    type="text"
                    placeholder="Male/Female"
                    className="inputType"
                    onChange={(e) => setSex(e.target.value)}
                    value={sex}
                  />
                </div>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    marginBottom: "8px",
                  }}
                >
                  <span className="label">Reproduction</span>
                  <input
                    type="text"
                    placeholder="Intact/neutered/spayed"
                    className="inputType"
                    onChange={(e) => setReproduction(e.target.value)}
                    value={reproduction}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="cardtitle">
          <div
            style={{
              fontWeight: 700,
              fontSize: "16px",
              marginLeft: "20px",
              paddingTop: "6px",
            }}
          >
            Care History
          </div>
        </div>
        <div>
          <div className="cardbody">
            <div style={{ display: "flex", justifyContent: "space-around" }}>
              <div
                style={{
                  width: "50%",
                  marginTop: "10px",
                  marginRight: "190px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    marginBottom: "8px",
                  }}
                >
                  <span className="label">Diagnosis </span>
                  <input
                    type="text"
                    className="inputType"
                    onChange={(e) => setDiagnosis(e.target.value)}
                    value={diagnosis}
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    marginBottom: "8px",
                  }}
                >
                  <span className="label">Indication</span>
                  <input
                    type="text"
                    className="inputType"
                    onChange={(e) => setIndication(e.target.value)}
                    value={indication}
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    marginBottom: "8px",
                  }}
                >
                  <span className="label">Initial Mass Size</span>
                  <input
                    type="text"
                    className="inputType"
                    onChange={(e) => setInitMassSize(e.target.value)}
                    value={initMassSize}
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    marginBottom: "8px",
                  }}
                >
                  <span className="label">Surgery</span>
                  <input
                    type="text"
                    className="inputType"
                    onChange={(e) => setSurgery(e.target.value)}
                    value={surgery}
                  />
                </div>
              </div>
              <div
                style={{
                  width: "50%",
                  marginTop: "10px",
                  marginRight: "190px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    marginBottom: "8px",
                  }}
                >
                  <span className="label">Vaccinations Current </span>
                  <input
                    type="text"
                    onChange={(e) => setVaccinations(e.target.value)}
                    value={vaccinations}
                    style={{
                      marginLeft: "10px",
                      border: "1px solid #ccc",
                      boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                      borderRadius: "5px",
                    }}
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    marginBottom: "8px",
                  }}
                >
                  <span className="label">Partial Initial Weight</span>
                  <input
                    type="text"
                    className="inputType"
                    onChange={(e) => setWeight(e.target.value)}
                    value={weight}
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    marginBottom: "8px",
                  }}
                >
                  <span className="label">Comorbidity</span>
                  <input
                    type="text"
                    className="inputType"
                    onChange={(e) => setComorbidity(e.target.value)}
                    value={comorbidity}
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    marginBottom: "8px",
                  }}
                >
                  <button
                    className="createbtn"
                    style={{
                      marginTop: "-1px",
                      float: "left",
                      marginLeft: "-1px",
                      color: "#21AAE1",
                      width: "200px",
                      height: "40px",
                      backgroundColor: "#FFFFFF",
                    }}
                  >
                    <FontAwesomeIcon icon={faPlus} /> Add Comorbidity
                  </button>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    marginBottom: "8px",
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="cardtitle">
          <div
            style={{
              fontWeight: 700,
              fontSize: "16px",
              marginLeft: "20px",
              paddingTop: "6px",
            }}
          >
            Current Therapy
          </div>
        </div>
        <div>
          <div className="cardbody-theraphy">
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                height: "300px",
              }}
            >
              <div
                style={{
                  width: "50%",
                  marginTop: "10px",
                  marginRight: "190px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    marginBottom: "8px",
                  }}
                >
                  <span className="label">Theraphy Name </span>
                  <input
                    type="text"
                    className="inputType"
                    onChange={(e) => setTheraphyName(e.target.value)}
                    value={theraphyName}
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    marginBottom: "8px",
                  }}
                >
                  <span className="label">Indication</span>
                  <input
                    type="text"
                    className="inputType"
                    onChange={(e) => setTindication(e.target.value)}
                    value={tindication}
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    marginBottom: "8px",
                  }}
                >
                  <span className="label">Tumor Type</span>
                  <input
                    type="text"
                    className="inputType"
                    onChange={(e) => setTumorType(e.target.value)}
                    value={tumorType}
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    marginBottom: "8px",
                  }}
                >
                  <span className="label">Tumor Volume</span>
                  <input
                    type="text"
                    className="inputType"
                    onChange={(e) => setTumorVolume(e.target.value)}
                    value={tumorVolume}
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    marginBottom: "8px",
                  }}
                >
                  <span className="label">Grade</span>
                  <input
                    type="text"
                    className="inputType"
                    onChange={(e) => setGrade(e.target.value)}
                    value={grade}
                  />
                </div>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    marginBottom: "8px",
                  }}
                >
                  <span className="label">Cell Type</span>
                  <input
                    type="text"
                    className="inputType"
                    onChange={(e) => setCellType(e.target.value)}
                    value={cellType}
                  />
                </div>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    marginBottom: "8px",
                  }}
                >
                  <span className="label">TNM Stage</span>
                  <input
                    type="text"
                    className="inputType"
                    onChange={(e) => setTnmStage(e.target.value)}
                    value={tnmStage}
                  />
                </div>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    marginBottom: "8px",
                  }}
                >
                  <span className="label">Overall Stage</span>
                  <input
                    type="text"
                    className="inputType"
                    onChange={(e) => setOverAllStage(e.target.value)}
                    value={overAllStage}
                  />
                </div>
              </div>
              <div
                style={{
                  width: "50%",
                  marginTop: "10px",
                  marginRight: "190px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    marginBottom: "8px",
                  }}
                >
                  <span className="label">Patient Weight(kg) </span>
                  <input
                    type="text"
                    className="inputType"
                    onChange={(e) => setPweight(e.target.value)}
                    value={pweight}
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    marginBottom: "8px",
                  }}
                >
                  <span className="label">Therapeutic</span>
                  <input
                    type="text"
                    className="inputType"
                    onChange={(e) => setTherapeutic(e.target.value)}
                    value={therapeutic}
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    marginBottom: "8px",
                  }}
                >
                  <span className="label">Therapeutic Name</span>
                  <input
                    type="text"
                    className="inputType"
                    onChange={(e) => setTname(e.target.value)}
                    value={tname}
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    marginBottom: "8px",
                  }}
                >
                  <span className="label">Injection Volume(IV)</span>
                  <input
                    type="text"
                    className="inputType"
                    onChange={(e) => setIvolume(e.target.value)}
                    value={ivolume}
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    marginBottom: "8px",
                  }}
                >
                  <span className="label">Objective Response(%)</span>
                  <input
                    type="text"
                    className="inputType"
                    onChange={(e) => setOres(e.target.value)}
                    value={ores}
                  />
                </div>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    marginBottom: "8px",
                  }}
                >
                  <span className="label">Retreatment Required</span>
                  <input
                    type="text"
                    className="inputType"
                    onChange={(e) => setRetreat(e.target.value)}
                    value={retreat}
                  />
                </div>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    marginBottom: "8px",
                  }}
                >
                  <span className="label">Necrosis</span>
                  <input
                    type="text"
                    className="inputType"
                    onChange={(e) => setNacrosis(e.target.value)}
                    value={nacrosis}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="cardtitle" style={{}}>
          <div
            style={{
              fontWeight: 700,
              fontSize: "16px",
              marginLeft: "20px",
              paddingTop: "6px",
            }}
          >
            Allergies
          </div>
        </div>
        <div>
          <div className="cardbody">
            <div style={{ display: "flex", justifyContent: "space-around" }}>
              <div style={{ width: "50%", marginTop: "10px", float: "left" }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    flexDirection: "column",
                    marginBottom: "8px",
                  }}
                >
                  {allergyList &&
                    allergyList?.map((item, index) => (
                      <div
                        key={index}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          marginBottom: 5,
                        }}
                      >
                        <span className="label">Allergy</span>
                        <input
                          type="text"
                          onChange={(e) => handleChange(index, e.target.value)}
                        />
                        <FontAwesomeIcon
                          icon={faTrash}
                          style={{
                            marginLeft: 5,
                          }}
                          onClick={() => deleteAllergy(index)}
                        />
                      </div>
                    ))}
                </div>
              </div>

              <div
                style={{
                  width: "50%",
                  marginTop: "10px",
                  marginRight: "190px",
                }}
              ></div>
            </div>

            <button
              onClick={() => addAllergyList(allergyList.length)}
              className="createbtn"
              style={{
                marginTop: "-1px",
                marginLeft: "-1px",
                color: "#21AAE1",
                width: "140px",
                height: "40px",
                backgroundColor: "#FFFFFF",
              }}
            >
              <FontAwesomeIcon icon={faPlus} /> Add Allergy
            </button>
          </div>
        </div>
      </div>
      <button onClick={() => addpatient()} className="createbtn">
        <FontAwesomeIcon icon={faPlus} /> <FontAwesomeIcon icon={faPaw} />{" "}
        Create Patient
      </button>
    </div>
  );
}

export default Singlepatient;
