export default function Ticket({form}) {

    const imgSrc = localStorage.getItem("uploadedImage") || ""

  return (
    <div className="container-ticket">
      <div className="container-ticket-details">
        <img src="/logo-ticket.svg" alt="" />
        <div className="container-ticket-details-text">
          <p className="title-ticket">Coding Conf</p>
          <p className="subtitle-ticket">Jan 31, 2025 / Austin, TX</p>
        </div>
      </div>
      <div className="container-ticket-content">
        <div className="uploaded-image" style={{
                backgroundImage: `url(${imgSrc})`,
                backgroundSize: "cover",
              }}></div>
        <div className="container-ticket-content-text">
            <p className="title-name-ticket">{form.name}</p>
            <div className="container-ticket-content-git">
                <img src="/git-icon.svg" alt="git-icon"  />
                <p>{form.github}</p>
            </div>
        </div>
      </div>
    </div>
  );
}
