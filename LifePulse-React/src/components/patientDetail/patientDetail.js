import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
//import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import columns from "../../shared/pateintcolumns/patient";
import {
  faDog,
  faEdit,
  faPaw,
  faPlus,
  faCamera,
  faTrash,
  faWarning,
} from "@fortawesome/free-solid-svg-icons";
import "./PatientDetail.css";
import Table from "../../shared/Table/Table";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import { Box } from "@material-ui/core";
import axios from "axios";
import ActionDialog from "../actionDialog/ActionDialog";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

const AntTabs = withStyles({
  root: {
    // border: "2px solid #ffffff",
  },
  indicator: {
    backgroundColor: "#FFF",
  },
})(Tabs);

const AntTab = withStyles((theme) => ({
  root: {
    textTransform: "none",
    minWidth: 72,
    fontWeight: theme.typography.fontWeightRegular,
    marginRight: theme.spacing(4),
    background: "#FFFFFF",
    borderWidth: "1px 1px 0px 1px",
    borderStyle: "solid",
    borderColor: "rgba(0, 0, 0, 0.25)",
    boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.25)",
    borderTopLeftRadius: "10px",
    borderTopRightRadius: "10px",
    width: 212,
    height: 44,
    padding: 0,
    marginRight: 4,
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:hover": {
      fontWeight: 700,
      fontSize: 20,
      opacity: 1,
    },
    "&$selected": {
      fontWeight: 700,
      fontSize: 20,
    },
    "&:focus": {
      color: "#000000",
    },
  },
  selected: {},
}))((props) => <Tab disableRipple {...props} />);

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 0,
  },
  padding: {
    // padding: theme.spacing(3),
  },
  demo1: {
    backgroundColor: theme.palette.background.paper,
  },
  demo2: {
    backgroundColor: "#2e1534",
  },
}));

function PatientDetail() {
  const [pDetail, setpDetail] = useState();
  const search = useLocation().search;
  const id = new URLSearchParams(search).get("id");
  localStorage.setItem('pid',id);
  const classes = useStyles();
  let history = useNavigate()
  const [value, setValue] = React.useState(0);
  useEffect(() => {
    axios
      .get(`https://lifepulse-backend.herokuapp.com/patient?key=${id}`)
      .then((res) => setpDetail(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleDeleteChange = () => {
    axios
      .delete(
        `https://lifepulse-backend.herokuapp.com/patient/${id}`
      )
      .then((res) => history("/patients"))
      .catch((err) => console.log(err));
  };

  const [openAction, setOpenAction] = useState(false);

  const openDialog = () => {
    setOpenAction(true);
  };
  const closeDialog = () => {
    setOpenAction(false);
  };

  const dialogAction = () => {
    setOpenAction(false);
    handleDeleteChange();
  };

  return (
    pDetail && (
      <div>
        <Link to="/patients">Patients</Link>
        <>
          <span style={{ marginLeft: "10px" }}>
            {" > "} {pDetail?.name}
          </span>
        </>

        <div
          style={{
            display: "flex",
            // height: "70px",
            justifyContent: "flex-end",
          }}
        >
          <button
            className="upload-pt"
            style={{
              width: "150px",
              backgroundColor: "#D95767",
              border: "1px solid #D95767",
            }}
            onClick={openDialog}
          >
            <FontAwesomeIcon icon={faTrash} />
            <span style={{ marginLeft: "10px" }}> {"Delete"} </span>
          </button>
          <button
            className="upload-pt"
            onClick={() => history(`/editPatient?id=${id}`)}
          >
            <FontAwesomeIcon icon={faEdit} />
            <span style={{ marginLeft: "10px" }}> {"Edit Patient"} </span>
          </button>
        </div>

        <div className={classes.root}>
          <div className={classes.demo1}>
            <AntTabs
              value={value}
              onChange={handleChange}
              aria-label="ant example"
            >
              <AntTab label="Histology" />
              <AntTab label="Patient Detail" />
            </AntTabs>
            {/* <Typography className={classes.padding} /> */}
            <TabPanel value={value} index={0}>
              <div className="main-history-box">
                
                <div className="therapy-box-history">
                  <div className="therapy-tile">
                    <span className="tile-heading">Diagnosis</span>
                    <span className="tile-content">
                      {pDetail?.histology?.diagnosis}
                    </span>
                  </div>
                  <div className="therapy-tile">
                    <span className="tile-heading">Vaccinations Current</span>
                    <span className="tile-content">
                      {pDetail?.histology?.vaccinations}
                    </span>
                  </div>
                  <div className="therapy-tile">
                    <span className="tile-heading">Indication</span>
                    <span className="tile-content">
                      {pDetail?.histology?.indication}
                    </span>
                  </div>
                  <div className="therapy-tile">
                    <span className="tile-heading">Patient Initial Weight</span>
                    <span className="tile-content">
                      {pDetail?.histology?.weight}
                    </span>
                  </div>
                  <div className="therapy-tile">
                    <span className="tile-heading">Initial Mass Size</span>
                    <span className="tile-content">
                      {pDetail?.histology?.initMassSize}
                    </span>
                  </div>
                  <div className="therapy-tile">
                    <span className="tile-heading">Comorbidities</span>
                    <span className="tile-content">
                      {pDetail?.histology?.comorbidities}
                    </span>
                  </div>
                  <div className="therapy-tile">
                    <span className="tile-heading">Surgery</span>
                    <span className="tile-content">
                      {pDetail?.histology?.surgery}
                    </span>
                  </div>
                </div>
              </div>
            </TabPanel>
            <TabPanel value={value} index={1}>
              <div className="main-history-box">
                
                <div className="therapy-box-history">
                  <div className="therapy-tile">
                    <span className="tile-heading">Patient Name</span>
                    <span className="tile-content">{pDetail?.name} </span>
                  </div>
                  <div className="therapy-tile">
                    <span className="tile-heading">Breed</span>
                    <span className="tile-content">{pDetail?.breed}</span>
                  </div>
                  <div className="therapy-tile">
                    <span className="tile-heading">Species</span>
                    <span className="tile-content">{pDetail?.species}</span>
                  </div>
                  <div className="therapy-tile">
                    <span className="tile-heading">Owner</span>
                    <span className="tile-content">{pDetail?.owner}</span>
                  </div>
                  <div className="therapy-tile">
                    <span className="tile-heading">Owner Contact</span>
                    <span className="tile-content">
                      {pDetail?.ownerContact}
                    </span>
                  </div>
                  <div className="therapy-tile" style={{paddingRight: 20}}>
                    <span className="tile-heading">Date of Birth</span>
                    <span className="tile-content">{pDetail?.dob}</span>
                    <span className="tile-heading">Age</span>
                    <span className="tile-content">{11}</span>
                  </div>
                  <div className="therapy-tile">
                    <span className="tile-heading">Last Session</span>
                    <span className="tile-content">
                      {pDetail?.lastSession ?? "NA"}
                    </span>
                  </div>
                  <div className="therapy-tile">
                    <span className="tile-heading">Sex</span>
                    <span className="tile-content">{pDetail?.sex}</span>
                  </div>
                  <div className="therapy-tile">
                    <span className="tile-heading">Reproduction</span>
                    <span className="tile-content">
                      {pDetail?.reproduction}
                    </span>
                  </div>
                </div>
              </div>
            </TabPanel>
          </div>
        </div>

        <div>
          <div
            className="cardtitle"
            style={{
              height: 61,
            }}
          >
            <div
              style={{
                fontWeight: 700,
                fontSize: "16px",
                marginLeft: "20px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <span style={{ fontSize: 34, color: "#E1B135" }}>
                <FontAwesomeIcon icon={faWarning} />
              </span>
              <span style={{ marginLeft: "14px" }}>Allergies</span>
            </div>
          </div>
          <div>
            <div className="cardbody">
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  minHeight: 100,
                }}
              >
                {pDetail?.allergies?.map((item, index) => (
                  <span className="allergy">{item}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div>
          <div
            className="cardtitle"
            style={{
              height: 87,
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                fontWeight: 700,
                fontSize: "30px",
                marginLeft: "20px",
                paddingTop: "20px",
              }}
            >
              Therapies
            </div>
            <div
              style={{
                marginRight: 28,
              }}
            >
              <button
                className="createbtn"
                onClick={() => history(`/addTherapy?id=${id}`)}
              >
                <FontAwesomeIcon icon={faPlus} /> Add Therapy
              </button>
            </div>
          </div>
          <div>
            {pDetail?.theraphies?.map((item, index) => (
              <div className="cardbody" key={item.key}>
                <div
                  className="cardtitle"
                  style={{
                    height: 461,
                  }}
                >
                  <div
                    style={{
                      marginLeft: "33px",
                      paddingTop: "27px",
                    }}
                    className="subtherapy"
                  >
                    {item.therpahyName}
                    <div className="therapy-box">
                      <div className="therapy-tile">
                        <span className="tile-heading">Therapy Name</span>
                        <span className="tile-content">
                          {item?.theraphyFields?.theraphyName}
                        </span>
                      </div>
                      <div className="therapy-tile">
                        <span className="tile-heading">
                          Current Weight (kg)
                        </span>
                        <span className="tile-content">
                          {item?.theraphyFields?.pweight}
                        </span>
                      </div>
                      <div className="therapy-tile">
                        <span className="tile-heading">Indication</span>
                        <span className="tile-content">
                          {item?.theraphyFields?.tindication}
                        </span>
                      </div>

                      <div className="therapy-tile">
                        <span className="tile-heading">Therapeutic used</span>
                        <span className="tile-content">
                          {item?.theraphyFields?.therapeutic}
                        </span>
                      </div>
                      <div className="therapy-tile">
                        <span className="tile-heading">Tumor Size (cm)</span>
                        <span className="tile-content">
                          {item?.theraphyFields?.tumorVolume}
                        </span>
                      </div>
                      <div className="therapy-tile">
                        <span className="tile-heading">Therapeutic Name</span>
                        <span className="tile-content">
                          {item?.theraphyFields?.tname}
                        </span>
                      </div>
                      <div className="therapy-tile">
                        <span className="tile-heading">Tumor Type</span>
                        <span className="tile-content">
                          {item?.theraphyFields?.tumorType}
                        </span>
                      </div>
                      <div className="therapy-tile">
                        <span className="tile-heading">
                          Injection Volume Used (ml)
                        </span>
                        <span className="tile-content">
                          {item?.theraphyFields?.ivolume}
                        </span>
                      </div>
                      <div className="therapy-tile">
                        <span className="tile-heading">Grade</span>
                        <span className="tile-content">
                          {item?.theraphyFields?.grade}
                        </span>
                      </div>
                      <div className="therapy-tile">
                        <span className="tile-heading">Cell Type</span>
                        <span className="tile-content">
                          {item?.theraphyFields?.cellType}
                        </span>
                      </div>

                      <div className="therapy-tile">
                        <span className="tile-heading">
                          Objective Response (%)
                        </span>
                        <span className="tile-content">
                          {item?.theraphyFields?.ores}
                        </span>
                      </div>
                      <div className="therapy-tile">
                        <span className="tile-heading">TNM Stage</span>
                        <span className="tile-content">
                          {item?.theraphyFields?.tnmStage}
                        </span>
                      </div>
                      <div className="therapy-tile">
                        <span className="tile-heading">Necrosis</span>
                        <span className="tile-content">
                          {item?.theraphyFields?.nacrosis}
                        </span>
                      </div>
                      <div className="therapy-tile">
                        <span className="tile-heading">Overall Stage</span>
                        <span className="tile-content">
                          {item?.theraphyFields?.overAllStage}
                        </span>
                      </div>

                      <div className="therapy-tile">
                        <span className="tile-heading">
                          Retreatment Required
                        </span>
                        <span className="tile-content">
                          {item?.theraphyFields?.retreat}
                        </span>
                      </div>
                    </div>
                  </div>
                  <button
                    className="createbtn-treat"
                    style={{
                      color: "#21AAE1",
                      width: "177px",
                      height: "40px",
                      marginRight: 40,
                      backgroundColor: "#FFFFFF",
                    }}
                    onClick={() => history(`/addTreatment?id=${id}`)}
                  >
                    <FontAwesomeIcon icon={faPlus} /> Add Treatment
                  </button>
                </div>
                <div
                  style={{ display: "flex", justifyContent: "space-around" }}
                >
                  <div
                    style={{
                      margin: "6px",
                      width: "100%",
                      border: "1px solid #ccc",
                      boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.25)",
                    }}
                  >
                    <Table
                      columns={columns.patientTreatment}
                      data={item?.treatments}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <ActionDialog
          open={openAction}
          title={"Are you sure you want to delete this patient?"}
          titleContent={"This action cannot be undone."}
          handleClose={closeDialog}
          handleEnter={dialogAction}
          closeText={"No, don’t delete"}
          enterText={"Yes, delete"}
        />
      </div>
    )
  );
}

export default PatientDetail;
