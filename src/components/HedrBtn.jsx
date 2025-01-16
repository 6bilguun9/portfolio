import "/src/styles/hedrBtn.css";

function HedrBtn(props) {
  const downloadCv = () => {
    const cvUrl = "/src/assets/CV.docx";
    const link = document.createElement("a");
    link.href = cvUrl;
    link.download = "Bilguun_CV.docx";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div>
      <button
        className="btn"
        onClick={props.name === "CV" ? downloadCv : undefined}
      >
        {props.name}
      </button>
    </div>
  );
}

export default HedrBtn;
