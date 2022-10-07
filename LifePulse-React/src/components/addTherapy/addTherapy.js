import React, {useState} from 'react';
import axios from "axios";

const AddTherapy =() => {
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

  const addPatient = () => {
    const obj = {
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
    };
    const patientId = "925e7f6f-fa41-4118-90ef-5fe7536374e6";
    axios.post(
      `https://lifepulse-backend.herokuapp.com/addtherapy/${patientId}`, obj 
    );
  }

  return (
    <>
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
            Fido Mass Cell
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
        <button onClick={addPatient}>Add</button>
        <div className="cardtitle">
          <div
            style={{
              fontWeight: 700,
              fontSize: "16px",
              marginLeft: "20px",
              paddingTop: "6px",
            }}
          >
            Fido Mass Cell
          </div>
        </div>
        <div>
          <div className="cardbody-theraphy">
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                height: "100px",
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
                    justifyContent: "flex-start",
                    marginBottom: "8px",
                  }}
                >
                  <span className="label">Device </span>
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
                    justifyContent: "flex-start",
                    marginBottom: "8px",
                  }}
                >
                  <span className="label">Electrode Type</span>
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
                  <span className="label">Pin/Needle Count*</span>
                  <input
                    type="text"
                    className="inputType"
                    onChange={(e) => setTumorType(e.target.value)}
                    value={tumorType}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddTherapy;