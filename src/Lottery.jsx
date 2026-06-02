import { useState } from "react";
import Ticket from "./Ticket";

function Lottery() {
  const generateTicket = () => {
    return [
      Math.floor(Math.random() * 10),
      Math.floor(Math.random() * 10),
      Math.floor(Math.random() * 10),
    ];
  };

  const [ticket, setTicket] = useState(generateTicket());

  const getNewTicket = () => {
    setTicket(generateTicket());
  };

  const sum = ticket.reduce((acc, curr) => acc + curr, 0);

  const isWinner = sum === 15;

  return (
    <div className="lottery-container">
      <h1>🎰 Lottery Game</h1>

      <Ticket ticket={ticket} />

      <h3>Sum = {sum}</h3>

      {isWinner ? (
        <h2 className="winner">🎉 Congratulations! You Won the Lottery!</h2>
      ) : (
        <h3 className="lose">😔 Better Luck Next Time</h3>
      )}

      <button onClick={getNewTicket}>Generate New Ticket</button>
    </div>
  );
}

export default Lottery;
