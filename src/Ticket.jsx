function Ticket({ ticket }) {
  return (
    <div className="ticket">
      {ticket.map((num, index) => (
        <span key={index} className="digit">
          {num}
        </span>
      ))}
    </div>
  );
}

export default Ticket;
