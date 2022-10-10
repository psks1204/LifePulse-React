import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDog, faCat,faPaw } from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-router-dom";
const columns = [
  {
    dataIndex: "species",
    render: (text, record) =>
      text === "Dog" ? (
        <FontAwesomeIcon
        icon={faPaw}
          style={{
           
            border: "1.5px solid blue",
            borderRadius: "50%",
          }}
        />
      ) : (
        <FontAwesomeIcon
          style={{
           
            border: "1.5px solid blue",
            borderRadius: "50%",
          }}
          icon={faPaw}
        />
      ),
  },
  {
    title: "Patient Name",
    dataIndex: "name",
    render: (text, record) => (
      <Link
        to={`/patientDetail?id=${record.key}`}
        state={{ from: text }}
        style={{ color: "blue" }}
      >
        {text}
      </Link>
    ),
    sorter: (a, b) => a.name.length - b.name.length,
  },
  {
    title: "Owner",
    dataIndex: "owner",
    defaultSortOrder: "descend",
    sorter: (a, b) => a.age - b.age,
  },
  {
    title: "Species",
    dataIndex: "species",
    sorter: (a, b) => a.species.length - b.species.length,
  },
  {
    title: "Diagnosis",
    dataIndex: "diagnosis",
    defaultSortOrder: "descend",
    sorter: (a, b) => a.diagnosis - b.diagnosis,
  },
  {
    title: "Last Session",
    dataIndex: "lastSession",
    defaultSortOrder: "descend",
    sorter: (a, b) => a.lastSession - b.lastSession,
  },
];

const patientTreatment = [
  {
    title: "Treatment",
    dataIndex: "treatmentName",
    render: (text, record) => (
      <Link
        to="/patientDetail"
        state={{ from: text }}
        style={{ color: "blue" }}
      >
        {text}
      </Link>
    ),
    sorter: (a, b) => a.treatment.length - b.treatment.length,
  },
  {
    title: "Specialist",
    dataIndex: "specialist",
    defaultSortOrder: "descend",
    sorter: (a, b) => a.specialist - b.specialist,
  },
  {
    title: "Session Length",
    dataIndex: "sessionLength",
    sorter: (a, b) => a.sessionLength.length - b.sessionLength.length,
  },
  {
    title: "Date",
    dataIndex: "date",
    sorter: (a, b) => a.date - b.date,
  },
];
const patientPrevTreatment = [
  {
    dataIndex: "species",
    render: (text, record) =>
      text === "Dog" ? (
        <FontAwesomeIcon
          icon={faDog}
          style={{
            color: "green",
            border: "1.5px solid green",
            borderRadius: "50%",
          }}
        />
      ) : (
        <FontAwesomeIcon
          style={{
            color: "green",
            border: "1.5px solid green",
            borderRadius: "50%",
          }}
          icon={faCat}
        />
      ),
  },
  {
    title: "Patient Name",
    dataIndex: "name",
    render: (text, record) => (
      <Link
        to="/patientDetail"
        state={{ from: text }}
        style={{ color: "blue" }}
      >
        {text}
      </Link>
    ),
    sorter: (a, b) => a.name.length - b.name.length,
  },
  {
    title: "Owner",
    dataIndex: "owner",
    defaultSortOrder: "descend",
    sorter: (a, b) => a.age - b.age,
  },
  {
    title: "Species",
    dataIndex: "species",
    sorter: (a, b) => a.species.length - b.species.length,
  },
  {
    title: "Diagnosis",
    dataIndex: "diagnosis",
    defaultSortOrder: "descend",
    sorter: (a, b) => a.diagnosis - b.diagnosis,
  },
  {
    title: "Last Session",
    dataIndex: "lastSession",
    defaultSortOrder: "descend",
    sorter: (a, b) => a.lastSession - b.lastSession,
  },
];

export default { columns, patientTreatment, patientPrevTreatment };
