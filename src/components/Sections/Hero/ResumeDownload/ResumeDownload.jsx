import React from "react";
import { Button } from "../../../Common/Button/Button";

export default function ResumeDownload() {
  const resumeUrl = `${process.env.PUBLIC_URL}/Resume.pdf`;
  const fileName = "Ananya_Vishwakarma_Resume.pdf";

  return (
    <Button
      as="a" // makes it behave like a link
      href={resumeUrl}
      download={fileName} // triggers download
      variant="primary"
      size="lg"
      className="hero-buttons animate-fade-in-up"
    >
      Download Resume
    </Button>
  );
}