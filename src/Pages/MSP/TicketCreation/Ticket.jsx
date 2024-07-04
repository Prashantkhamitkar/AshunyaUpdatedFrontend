import React, { useEffect, useState } from "react";
import {
  Card,
  CardBody,
  CardTitle,
  Col,
  Form,
  Input,
  Label,
  Row,
} from "reactstrap";
import CreatableSelect from "react-select/creatable";
import makeAnimated from "react-select/animated";
import Dropzone from "react-dropzone";
import { Link } from "react-router-dom";

const Ticket = ({ setTicketData, reset }) => {
  const [subject, setSubject] = useState("");
  const [description, setDescription] = useState("");
  const [selectedMulti, setSelectedMulti] = useState([]);
  const [selectedFiles, setSelectedFiles] = useState([]);

  useEffect(() => {
    if (reset) {
      setSubject("");
      setDescription("");
      setSelectedMulti([]);
      setSelectedFiles([]);
      setTicketData({
        subject: "",
        description: "",
        watchlist: [],
        files: [],
      });
    }
  }, [reset, setTicketData]);

  const handleAcceptedFiles = (files) => {
    const formattedFiles = files.map((file) =>
      Object.assign(file, {
        preview: URL.createObjectURL(file),
        formattedSize: formatBytes(file.size),
      })
    );
    setSelectedFiles(formattedFiles);
    setTicketData({
      subject,
      description,
      watchlist: selectedMulti,
      files: formattedFiles,
    });
  };

  const formatBytes = (bytes, decimals = 2) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
  };

  const handleMultiChange = (selectedOptions) => {
    setSelectedMulti(selectedOptions);
    setTicketData({
      subject,
      description,
      watchlist: selectedOptions,
      files: selectedFiles,
    });
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
    setTicketData({
      subject,
      description: e.target.value,
      watchlist: selectedMulti,
      files: selectedFiles,
    });
  };

  const handleSubjectChange = (e) => {
    setSubject(e.target.value);
    setTicketData({
      subject: e.target.value,
      description,
      watchlist: selectedMulti,
      files: selectedFiles,
    });
  };

  const truncateString = (str, numWords) => {
    const words = str.split(" ");
    const truncated = words.slice(0, numWords).join(" ");
    if (words.length > numWords) {
      return truncated + "...";
    }
    return truncated;
  };

  return (
    <>
      <Row>
        <Col md={12}>
          <CardTitle className="mt-0">Ticket</CardTitle>
          <Card body>
            <CardBody>
              
                <Row>
                  <Col lg="6">
                    <div className="mb-3">
                      <Label>SUBJECT</Label>
                      <Input
                        type="text"
                        value={subject}
                        onChange={handleSubjectChange}
                        placeholder="Enter Subject..."
                        className="custominput"
                      />
                    </div>
                    <div className="mb-3">
                      <Label>DESCRIPTION</Label>
                      <div>
                        <textarea
                          placeholder="Enter Description"
                          required
                          className="form-control custominput"
                          rows="5"
                          value={description}
                          onChange={handleDescriptionChange}
                        ></textarea>
                      </div>
                    </div>
                  </Col>
                  <Col lg="6">
                    <div className="mb-3">
                      <Label>WATCHLIST</Label>
                      <CreatableSelect
                        isMulti
                        placeholder="Enter Multiple Watchlist"
                        value={selectedMulti}
                        onChange={handleMultiChange}
                        classNamePrefix="select2-selection"
                        components={makeAnimated()}
                        noOptionsMessage={() => null}
                        formatCreateLabel={(inputValue) =>
                          `Add "${inputValue}"`
                        }
                      />
                    </div>
                    <div className="mb-3">
                      <Label>UPLOAD</Label>
                      <Form className="dropzone">
                        <Dropzone
                          onDrop={(acceptedFiles) => {
                            handleAcceptedFiles(acceptedFiles);
                          }}
                        >
                          {({ getRootProps, getInputProps }) => (
                            <div style={{ textAlign: "center" }}>
                              <div
                                className="dz-message needsclick mt-4"
                                {...getRootProps()}
                              >
                                <input {...getInputProps()} />
                                <div className="mb-3">
                                  <i className="display-4 text-muted mdi mdi-cloud-upload-outline"></i>
                                </div>
                                <h4>Drop files here to upload</h4>
                              </div>
                            </div>
                          )}
                        </Dropzone>
                        <div
                          className="dropzone-previews mt-2"
                          id="file-previews"
                        >
                          {selectedFiles.map((file, index) => (
                            <Card
                              className="mt-1 mb-0 shadow-none border dz-processing dz-image-preview dz-success dz-complete"
                              key={index + "-file"}
                            >
                              <div className="p-2">
                                <Row className="align-items-center">
                                  <Col className="col-auto">
                                    <img
                                      data-dz-thumbnail=""
                                      height="80"
                                      className="avatar-sm rounded bg-light"
                                      alt={file.name}
                                      src={file.preview}
                                    />
                                  </Col>
                                  <Col>
                                    <Link
                                      to="#"
                                      className="text-muted font-weight-bold"
                                    >
                                      {truncateString(file.name, 4)}
                                    </Link>
                                    <p className="mb-0">
                                      <strong>{file.formattedSize}</strong>
                                    </p>
                                  </Col>
                                </Row>
                              </div>
                            </Card>
                          ))}
                        </div>
                      </Form>
                    </div>
                  </Col>
                </Row>
              
            </CardBody>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Ticket;
