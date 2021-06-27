import { useState } from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
// import resume from '../resume.pdf'

function ResumePage({ pdf }) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1); 

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  return (
    <div> Hi </div>
    // <Document file={pdf}>
    //   <Page pageNumber={1} />
    // </Document>
  )
}

export default ResumePage;