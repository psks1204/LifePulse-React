import React from "react";
import { Link } from "react-router-dom";
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
        <Box p={3}>
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
    flexGrow: 1,
  },
  padding: {
    padding: theme.spacing(3),
  },
  demo1: {
    backgroundColor: theme.palette.background.paper,
  },
  demo2: {
    backgroundColor: "#2e1534",
  },
}));

function PatientDetail() {
  // const location = useLocation();
  //console.log(location)
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const tableData = [
    {
      key: 1,
      treatment: "#Treatment2",
      specialist: "John Hughes",
      sessionLength: "30 Minutes",
      date: "07/15/2022",
    },
    {
      key: 2,
      treatment: "#Treatment1",
      specialist: "Jenna Johnson",
      sessionLength: "30 Minutes",
      date: "07/15/2022",
    },
  ];

  return (
    <div>
      <Link to="/patients">Patients</Link>
      <>
        <span style={{ marginLeft: "10px" }}>
          {" > "} {"Fido Smith"}
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
        >
          <FontAwesomeIcon icon={faTrash} />
          <span style={{ marginLeft: "10px" }}> {"Delete"} </span>
        </button>
        <button className="upload-pt">
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
              <div className="span-history">
                Click Edit Patient to add or modify Histology Detail{" "}
              </div>
              <div className="therapy-box-history">
                <div className="therapy-tile">
                  <span className="tile-heading">Diagnosis</span>
                  <span className="tile-content">Sample Diagnosis</span>
                </div>
                <div className="therapy-tile">
                  <span className="tile-heading">Vaccinations Current</span>
                  <span className="tile-content">Yes</span>
                </div>
                <div className="therapy-tile">
                  <span className="tile-heading">Indicator</span>
                  <span className="tile-content">Mass Cell Tumor</span>
                </div>
                <div className="therapy-tile">
                  <span className="tile-heading">Initial Mass Size</span>
                  <span className="tile-content">1cm x 1cm</span>
                </div>
                <div className="therapy-tile">
                  <span className="tile-heading">Indicator</span>
                  <span className="tile-content">Mass Cell Tumor</span>
                </div>
                <div className="therapy-tile">
                  <span className="tile-heading">Indicator</span>
                  <span className="tile-content">Mass Cell Tumor</span>
                </div>
                <div className="therapy-tile">
                  <span className="tile-heading">Indicator</span>
                  <span className="tile-content">Mass Cell Tumor</span>
                </div>
                <div className="therapy-tile">
                  <span className="tile-heading">Indicator</span>
                  <span className="tile-content">Mass Cell Tumor</span>
                </div>
                <div className="therapy-tile">
                  <span className="tile-heading">Indicator</span>
                  <span className="tile-content">Mass Cell Tumor</span>
                </div>
                <div className="therapy-tile">
                  <span className="tile-heading">Indicator</span>
                  <span className="tile-content">Mass Cell Tumor</span>
                </div>
              </div>
            </div>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <div className="main-history-box">
              <div className="span-history">
                Click Edit Patient to add or modify Histology Detail{" "}
              </div>
              <div className="therapy-box-history">
                <div className="therapy-tile">
                  <span className="tile-heading">Patient Name</span>
                  <span className="tile-content">Fido </span>
                </div>
                <div className="therapy-tile">
                  <span className="tile-heading">Breed</span>
                  <span className="tile-content">Cocker spaniel</span>
                </div>
                <div className="therapy-tile">
                  <span className="tile-heading">Owner</span>
                  <span className="tile-content">John Mathus</span>
                </div>
                <div className="therapy-tile">
                  <span className="tile-heading">Date of Birth</span>
                  <span className="tile-content">March 20th, 2010</span>
                </div>
                <div className="therapy-tile">
                  <span className="tile-heading">Indicator</span>
                  <span className="tile-content">Mass Cell Tumor</span>
                </div>
                <div className="therapy-tile">
                  <span className="tile-heading">Indicator</span>
                  <span className="tile-content">Mass Cell Tumor</span>
                </div>
                <div className="therapy-tile">
                  <span className="tile-heading">Indicator</span>
                  <span className="tile-content">Mass Cell Tumor</span>
                </div>
                <div className="therapy-tile">
                  <span className="tile-heading">Indicator</span>
                  <span className="tile-content">Mass Cell Tumor</span>
                </div>
                <div className="therapy-tile">
                  <span className="tile-heading">Indicator</span>
                  <span className="tile-content">Mass Cell Tumor</span>
                </div>
                <div className="therapy-tile">
                  <span className="tile-heading">Indicator</span>
                  <span className="tile-content">Mass Cell Tumor</span>
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
              <span className="allergy">Dust Mites</span>
              <span className="allergy">Latex</span>
              <span className="allergy">Penicillin</span>
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
            <button className="createbtn">
              <FontAwesomeIcon icon={faPlus} /> Add Therapy
            </button>
          </div>
        </div>
        <div>
          <div className="cardbody">
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
                Fido Mast Cell in Leg
                <div className="therapy-box">
                  <div className="therapy-tile">
                    <span className="tile-heading">Indicator</span>
                    <span className="tile-content">Mass Cell Tumor</span>
                  </div>
                  <div className="therapy-tile">
                    <span className="tile-heading">Indicator</span>
                    <span className="tile-content">Mass Cell Tumor</span>
                  </div>
                  <div className="therapy-tile">
                    <span className="tile-heading">Indicator</span>
                    <span className="tile-content">Mass Cell Tumor</span>
                  </div>
                  <div className="therapy-tile">
                    <span className="tile-heading">Indicator</span>
                    <span className="tile-content">Mass Cell Tumor</span>
                  </div>
                  <div className="therapy-tile">
                    <span className="tile-heading">Indicator</span>
                    <span className="tile-content">Mass Cell Tumor</span>
                  </div>
                  <div className="therapy-tile">
                    <span className="tile-heading">Indicator</span>
                    <span className="tile-content">Mass Cell Tumor</span>
                  </div>
                  <div className="therapy-tile">
                    <span className="tile-heading">Indicator</span>
                    <span className="tile-content">Mass Cell Tumor</span>
                  </div>
                  <div className="therapy-tile">
                    <span className="tile-heading">Indicator</span>
                    <span className="tile-content">Mass Cell Tumor</span>
                  </div>
                  <div className="therapy-tile">
                    <span className="tile-heading">Indicator</span>
                    <span className="tile-content">Mass Cell Tumor</span>
                  </div>
                  <div className="therapy-tile">
                    <span className="tile-heading">Indicator</span>
                    <span className="tile-content">Mass Cell Tumor</span>
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
              >
                <FontAwesomeIcon icon={faPlus} /> Add Treatment
              </button>
            </div>
            <div style={{ display: "flex", justifyContent: "space-around" }}>
              <div
                style={{
                  margin: "6px",
                  width: "100%",
                  border: "1px solid #ccc",
                  boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.25)",
                }}
              >
                <Table columns={columns.patientTreatment} data={tableData} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div
          className="cardtitle"
          style={{
            height: 76,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div
            style={{
              fontWeight: 700,
              fontSize: 24,
              marginLeft: "20px",
              paddingTop: "6px",
            }}
            className="prev-treatment-header"
          >
            Previous Treatment
          </div>
          <button
            className="createbtn"
            style={{
              color: "#21AAE1",
              width: "177px",
              height: "40px",
              marginRight: 40,
              backgroundColor: "#FFFFFF",
            }}
          >
            <FontAwesomeIcon icon={faPlus} /> Add Treatment
          </button>
        </div>
        <div>
          <div className="cardbody">
            <div style={{ display: "flex", justifyContent: "space-around" }}>
              <div
                style={{
                  margin: "6px",
                  width: "100%",
                  border: "1px solid #ccc",
                  boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.25)",
                }}
              >
                <Table columns={columns.patientTreatment} data={tableData} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PatientDetail;
