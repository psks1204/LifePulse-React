import React, { useEffect, useState } from "react";
import axios from "axios";
import "./addTherapy.css";
import { Link, useLocation, useNavigate } from "react-router-dom";

import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
} from "@material-ui/core";
import {
  faPlay,
  faSave,
  faCircleQuestion,
  faEdit,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ActionDialog from "../actionDialog/ActionDialog";

const AddTherapy = () => {
  const search = useLocation().search;
  const id = new URLSearchParams(search).get("id");
  let history = useNavigate();
  const [pDetail, setpDetail] = useState(null);

  //Theraphy
  const [theraphyName, setTheraphyName] = useState("");
  const [tindication, setTindication] = useState("");
  const [tumorType, setTumorType] = useState("");
  const [length, setLength] = useState("");
  const [width, setWidth] = useState("");
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

  const [checkbox1, setCheckbox1] = useState(false);
  const [checkbox2, setCheckbox2] = useState(false);
  //const[allergies,setAllergies] = useState({ val: []});

  const [tvolume, setTVolume] = useState(0);

  const addTherapy = () => {
    const obj = {
      theraphyName: theraphyName,
      tindication: tindication,
      tumorType: tumorType,
      tumorVolume: tumorVolume.toString(),
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
    //const patientId = "925e7f6f-fa41-4118-90ef-5fe7536374e6";
    axios
      .post(`https://lifepulse-backend.herokuapp.com/addtherapy/${id}`, obj)
      .then((res) => history(`/patientDetail?id=${id}`));
  };
  const setTValue = (val) => {
    let vol = (length * width * width * 3.14) / 6;
    if (val == "Cisplatin") {
      vol = (vol * 1) / 2;
    } else if (val == "Bleomycin") {
    } else if (val == "Calcium Cloride") {
      vol = (vol * 1) / 2;
    } else {
      vol = 0;
    }
    setTVolume(vol);
    setTumorVolume(vol.toString());
    setTname(val);
  };
  useEffect(() => {
    axios
      .get(`https://lifepulse-backend.herokuapp.com/patient?key=${id}`)
      .then((res) => setpDetail(res.data))
      .catch((err) => console.log(err));
  }, []);

  const [openAction, setOpenAction] = useState(false);

  const openDialog = () => {
    setOpenAction(true);
  };
  const closeDialog = () => {
    setOpenAction(false);
  };

  const dialogAction = () => {
    setOpenAction(false);
    history(`/patientDetail?id=${id}`);
  };

  return (
    <>
      <div>
        <div
          className="cardtitle"
          style={{
            display: "flex",
            justifyContent: "space-between",
            height: 74,
            alignItems: "center",
          }}
        >
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
          <Button
            onClick={openDialog}
            variant="contained"
            color="secondary"
            style={{
              marginRight: 31,
              backgroundColor: "#D95767",
              display: 'flex',
              alignItems: 'center'
            }}
          >
            <FontAwesomeIcon
              icon={faEdit}
              style={{
                marginRight: 10
              }}
            />
            Cancel
          </Button>
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
                }}
              >
                <div
                  style={{
                    display: "flex",
                    paddingLeft: 42,
                    paddingRight: 20,
                    justifyContent: "space-between",
                    marginBottom: "8px",
                  }}
                >
                  <span className="label">Theraphy Name </span>
                  <input
                    type="text"
                    className="inputTypeTherapy"
                    onChange={(e) => setTheraphyName(e.target.value)}
                    value={theraphyName}
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    paddingLeft: 42,
                    paddingRight: 20,
                    justifyContent: "space-between",
                    marginBottom: "8px",
                  }}
                >
                  <span className="label">Indication</span>
                  <input
                    type="text"
                    className="inputTypeTherapy"
                    onChange={(e) => setTindication(e.target.value)}
                    value={tindication}
                  />
                </div>

                <div
                  style={{
                    display: "flex",
                    paddingLeft: 42,
                    paddingRight: 20,
                    justifyContent: "space-between",
                    marginBottom: "8px",
                  }}
                >
                  <span className="label">Tumor Size(cm)</span>
                  <div className="tumor-div">
                    <div>Length</div>
                    <input
                      type="text"
                      className="tumor-size"
                      onChange={(e) => setLength(e.target.value)}
                      value={length}
                    />
                    <div>Width</div>
                    <input
                      type="text"
                      className="tumor-size"
                      onChange={(e) => setWidth(e.target.value)}
                      value={width}
                    />
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    paddingLeft: 42,
                    paddingRight: 20,
                    justifyContent: "space-between",
                    marginBottom: "8px",
                  }}
                >
                  <span className="label">Tumor Type</span>
                  <input
                    type="text"
                    className="inputTypeTherapy"
                    onChange={(e) => setTumorType(e.target.value)}
                    value={tumorType}
                  />
                </div>

                <div
                  style={{
                    display: "flex",
                    paddingLeft: 42,
                    paddingRight: 20,
                    justifyContent: "space-between",
                    marginBottom: "8px",
                  }}
                >
                  <span className="label">Grade</span>
                  <input
                    type="text"
                    className="inputTypeTherapy"
                    onChange={(e) => setGrade(e.target.value)}
                    value={grade}
                  />
                </div>

                <div
                  style={{
                    display: "flex",
                    paddingLeft: 42,
                    paddingRight: 20,
                    justifyContent: "space-between",
                    marginBottom: "8px",
                  }}
                >
                  <span className="label">Cell Type</span>
                  <input
                    type="text"
                    className="inputTypeTherapy"
                    onChange={(e) => setCellType(e.target.value)}
                    value={cellType}
                  />
                </div>

                <div
                  style={{
                    display: "flex",
                    paddingLeft: 42,
                    paddingRight: 20,
                    justifyContent: "space-between",
                    marginBottom: "8px",
                  }}
                >
                  <span className="label">TNM Stage</span>
                  <input
                    type="text"
                    className="inputTypeTherapy"
                    onChange={(e) => setTnmStage(e.target.value)}
                    value={tnmStage}
                  />
                </div>

                <div
                  style={{
                    display: "flex",
                    paddingLeft: 42,
                    paddingRight: 20,
                    justifyContent: "space-between",
                    marginBottom: "8px",
                  }}
                >
                  <span className="label">Overall Stage</span>
                  <input
                    type="text"
                    className="inputTypeTherapy"
                    onChange={(e) => setOverAllStage(e.target.value)}
                    value={overAllStage}
                  />
                </div>
              </div>
              <div
                style={{
                  width: "50%",
                  marginTop: "10px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    paddingLeft: 42,
                    paddingRight: 20,
                    justifyContent: "space-between",
                    marginBottom: "8px",
                  }}
                >
                  <span className="label">Patient Weight(kg) </span>
                  <input
                    type="text"
                    className="inputTypeTherapy"
                    onChange={(e) => setPweight(e.target.value)}
                    value={pweight}
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    paddingLeft: 42,
                    paddingRight: 20,
                    justifyContent: "space-between",
                    marginBottom: "8px",
                  }}
                >
                  <span className="label">Therapeutic Used?</span>
                  <input
                    type="text"
                    placeholder="Yes/No"
                    className="inputTypeTherapy"
                    onChange={(e) => setTherapeutic(e.target.value)}
                    value={therapeutic}
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    paddingLeft: 42,
                    paddingRight: 20,
                    justifyContent: "space-between",
                    marginBottom: "8px",
                  }}
                >
                  <span className="label">Therapeutic Name</span>
                  <input
                    type="text"
                    placeholder="Cisplatin/Bleomycin/Calcium Cloride"
                    className="inputTypeTherapy"
                    onChange={(e) => setTValue(e.target.value)}
                    value={tname}
                  />
                </div>

                <div
                  className="span-history"
                  style={{
                    display: "flex",
                    paddingLeft: 42,
                    paddingRight: 10,
                    justifyContent: "space-between",
                    marginBottom: "8px",
                  }}
                >
                  <span>
                    <b>Suggested Injection Volume(ml)</b>
                  </span>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "flex-start",
                      width: 265,
                      alignItems: "center",
                    }}
                  >
                    <div>
                      <b>{tvolume}</b>
                    </div>
                    <FontAwesomeIcon
                      icon={faCircleQuestion}
                      color="#0d99ff"
                      style={{
                        height: "20px",
                        marginLeft: 10,
                      }}
                    ></FontAwesomeIcon>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    paddingLeft: 42,
                    paddingRight: 20,
                    justifyContent: "space-between",
                    marginBottom: "8px",
                  }}
                >
                  <span className="label">Injection Volume Used(ml)</span>
                  <input
                    type="text"
                    className="inputTypeTherapy"
                    onChange={(e) => setIvolume(e.target.value)}
                    value={ivolume}
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    paddingLeft: 42,
                    paddingRight: 20,
                    justifyContent: "space-between",
                    marginBottom: "8px",
                  }}
                >
                  <span className="label">Objective Response(%)</span>
                  <input
                    type="text"
                    className="inputTypeTherapy"
                    onChange={(e) => setOres(e.target.value)}
                    value={ores}
                  />
                </div>

                <div
                  style={{
                    display: "flex",
                    paddingLeft: 42,
                    paddingRight: 20,
                    justifyContent: "space-between",
                    marginBottom: "8px",
                  }}
                >
                  <span className="label">Retreatment Required</span>
                  <input
                    type="text"
                    className="inputTypeTherapy"
                    onChange={(e) => setRetreat(e.target.value)}
                    value={retreat}
                  />
                </div>

                <div
                  style={{
                    display: "flex",
                    paddingLeft: 42,
                    paddingRight: 20,
                    justifyContent: "space-between",
                    marginBottom: "8px",
                  }}
                >
                  <span className="label">Necrosis</span>
                  <input
                    type="text"
                    className="inputTypeTherapy"
                    onChange={(e) => setNacrosis(e.target.value)}
                    value={nacrosis}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div>
            <div className="cardbody-theraphy-checkbox">
              <div className="checkbox-container">
                <div className="main-ck-box">
                  <div className="svgIcon">
                    <svg
                      width="47"
                      height="47"
                      viewBox="0 0 47 47"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width="47" height="47" fill="#F3C140" />
                      <path
                        d="M15.6302 4C15.499 4 15.375 4.05195 15.2802 4.14844C13.1 6.39727 11.7511 9.49219 11.7511 12.9062C11.7511 14.8508 12.1886 16.684 12.9615 18.3242C11.3573 18.5023 9.76772 18.9996 8.28022 19.8457C5.76459 21.2781 3.97084 23.475 3.03022 25.9688C2.97918 26.0949 2.99376 26.2434 3.06668 26.3547C3.22709 26.6293 3.60626 26.6738 3.83959 26.4512C7.6823 22.8738 14.5219 22.191 17.949 28.0469C21.3761 33.9027 17.3583 39.4098 12.2906 40.9016C11.9844 40.9906 11.8313 41.3395 11.9917 41.6141C12.0646 41.7328 12.1813 41.8145 12.3198 41.8367C14.9813 42.2746 17.8031 41.8441 20.3188 40.4117C21.8063 39.5656 23.0458 38.4449 24.001 37.1609C24.9563 38.4449 26.1958 39.5656 27.6833 40.4117C30.199 41.8441 33.0281 42.282 35.6823 41.8367C35.8208 41.8145 35.9375 41.7328 36.0104 41.6141C36.1708 41.3395 36.0177 40.9906 35.7115 40.9016C30.6438 39.4098 26.626 33.9102 30.0531 28.0469C33.4802 22.1836 40.3125 22.8664 44.1625 26.4586C44.3958 26.6738 44.775 26.6293 44.9354 26.3621C45.0083 26.2434 45.0156 26.1023 44.9719 25.9762C44.0313 23.4824 42.2375 21.2855 39.7146 19.8531C38.2271 19.007 36.6375 18.5098 35.0333 18.3316C35.8135 16.684 36.251 14.8508 36.251 12.9062C36.251 9.49219 34.9021 6.39727 32.7219 4.14844C32.6271 4.05195 32.5031 4 32.3719 4C32.0073 4 31.7594 4.38594 31.8833 4.73477C33.75 9.97461 31.1177 17.0625 24.001 17.0625C16.8844 17.0625 14.2521 9.97461 16.1188 4.73477C16.2427 4.38594 16.0021 4 15.6302 4ZM27.501 24.1875C27.501 26.1543 25.9333 27.75 24.001 27.75C22.0688 27.75 20.5011 26.1543 20.5011 24.1875C20.5011 22.2207 22.0688 20.625 24.001 20.625C25.9333 20.625 27.501 22.2207 27.501 24.1875ZM16.25 34.9937C16.7094 34.118 16.9646 33.1309 16.8771 32.0398C15.4552 30.7039 14.3979 28.9672 13.8729 27.0078C12.9615 26.4066 11.9625 26.132 10.9563 26.0875C10.3 26.0578 9.63647 26.132 8.98022 26.2879C9.54897 30.5258 11.8021 34.2145 15.025 36.634C15.5208 36.1367 15.9438 35.5875 16.25 34.9937ZM24.001 8.75C21.9011 8.75 19.8958 9.18789 18.0802 9.97461C18.2261 10.5906 18.4448 11.177 18.7365 11.7188C19.2323 12.6391 19.9542 13.4332 20.9313 13.9676C21.9011 13.6633 22.9365 13.5 24.0083 13.5C25.0802 13.5 26.1083 13.6633 27.0854 13.9676C28.0625 13.4332 28.7844 12.6391 29.2802 11.7188C29.5719 11.177 29.7906 10.5906 29.9365 9.97461C28.1063 9.18789 26.101 8.75 24.001 8.75ZM34.1292 27.0078C33.6042 28.9672 32.5469 30.6965 31.125 32.0398C31.0375 33.1309 31.2854 34.1254 31.7521 34.9937C32.0656 35.5875 32.4813 36.1367 32.9771 36.634C36.2073 34.2145 38.4604 30.5258 39.0219 26.2879C38.3656 26.1246 37.7021 26.0578 37.0458 26.0875C36.0396 26.132 35.0406 26.4141 34.1292 27.0078Z"
                        fill="black"
                      />
                    </svg>
                  </div>
                  <FormGroup>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={checkbox1}
                          onChange={(event) =>
                            setCheckbox1(event.target.checked)
                          }
                          name="ppe"
                        />
                      }
                      label={
                        <span className="ckLabel">
                          I used PPE in preparing and administering the
                          therapeutic agent.
                        </span>
                      }
                    />
                    <FormControlLabel
                      style={{ marginTop: -15 }}
                      control={
                        <Checkbox
                          checked={checkbox2}
                          onChange={(event) =>
                            setCheckbox2(event.target.checked)
                          }
                          name="disposed"
                        />
                      }
                      label={
                        <span className="ckLabel">
                          I properly disposed of any biohazardous waste.
                        </span>
                      }
                    />
                  </FormGroup>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-around",
                  height: "100px",
                }}
              >
                <div
                  style={{
                    width: "50%",
                    marginTop: "10px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      paddingLeft: 42,
                      paddingRight: 20,
                      justifyContent: "space-between",
                      marginBottom: "8px",
                    }}
                  >
                    <span className="label">Device </span>
                    <input
                      type="text"
                      className="inputTypeTherapy"
                      onChange={(e) => setTheraphyName(e.target.value)}
                      value={theraphyName}
                    />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      paddingLeft: 42,
                      paddingRight: 20,
                      justifyContent: "space-between",
                      marginBottom: "8px",
                    }}
                  >
                    <span className="label">Electrode Type</span>
                    <input
                      type="text"
                      className="inputTypeTherapy"
                      onChange={(e) => setTindication(e.target.value)}
                      value={tindication}
                    />
                  </div>
                </div>
                <div
                  style={{
                    width: "50%",
                    marginTop: "45px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      paddingLeft: 42,
                      paddingRight: 20,
                      justifyContent: "space-between",
                      marginBottom: "8px",
                    }}
                  >
                    <span className="label">Pin/Needle Count*</span>
                    <input
                      type="text"
                      className="inputTypeTherapy"
                      onChange={(e) => setTumorType(e.target.value)}
                      value={tumorType}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <button className="start-treatment">
          <FontAwesomeIcon icon={faPlay} />
          <span style={{ marginLeft: "10px" }}> {"Start Treatment"} </span>
        </button>

        <div>
          <div>
            <div className="cardbody-theraphy-device">
              <h2 className="device-heading">Device Response</h2>
              <div className="therapy-main-tile">
                <div className="therapy-tile">
                  <span className="tile-heading">Pulse Parameters</span>
                  <span className="tile-content">value here</span>
                </div>
                <div className="therapy-tile">
                  <span className="tile-heading">Pulses Delivered</span>
                  <span className="tile-content">value here</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div>
            <div className="cardbody-theraphy-notes">
              <h2 className="device-heading">Notes</h2>
              <div className="note-main-tile">
                <textArea className="text-area"></textArea>
              </div>
            </div>
          </div>
        </div>

        <button className="save-treatment" onClick={addTherapy}>
          <FontAwesomeIcon icon={faSave} />
          <span style={{ marginLeft: "10px" }}> {"Save Therapy"} </span>
        </button>
      </div>
      <ActionDialog
        open={openAction}
        title={"Are you sure you want to cancel?"}
        titleContent={"You will lose any unsaved changes. "}
        handleClose={closeDialog}
        handleEnter={dialogAction}
        closeText={"Continue editing"}
        enterText={"Yes, cancel my changes"}
      />
    </>
  );
};

export default AddTherapy;
