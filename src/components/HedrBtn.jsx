import "/src/styles/hedrBtn.css";
import cv from "/src/assets/CV.docx";

function HedrBtn(props) {
  const downloadCv = () => {
    const link = document.createElement("a");
    link.href = cv;
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
