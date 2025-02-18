export default function Ticket() {
  return (
    <div className="container-ticket">
      <div className="container-ticket-details">
        <img src="/public/logo-ticket.svg" alt="" />
        <div className="container-ticket-details-text">
          <p className="title-ticket">Coding Conf</p>
          <p className="subtitle-ticket">Jan 31, 2025 / Austin, TX</p>
        </div>
      </div>
      <div className="container-ticket-content">
        <div className="uploaded-image"></div>
        <div className="container-ticket-content-text">
            <p className="title-name-ticket">Jonatan Kristof</p>
            <div className="container-ticket-content-git">
                <img src="/public/git-icon.svg" alt="git-icon" />
                <p>@jonatankristof0101</p>
            </div>
        </div>
      </div>
    </div>
  );
}
