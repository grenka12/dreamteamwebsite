import React from "react";

const people = [
  {
    id: 1,
    name: "Chornobryvets Yehor",
    position: "Software Engineer",
    photo: "/avatar-default.png",
  },
   {
    id: 2,
    name: "Storozhenko Anastasiia",
    position: "Software Engineer",
    photo: "/avatar-default.png",
  },
   {
    id: 3,
    name: "Khorovets Bohdan",
    position: "Software Engineer",
    photo: "/avatar-default.png",
  },
    {
    id: 4,
    name: "Cherkun Mariia-Anna",
    position: "Software Engineer",
    photo: "/avatar-default.png",
  },
];

const Body = () => {
  return (
    <main style={styles.body}>
      {people.map((person) => (
        <div key={person.id} style={styles.card}>
          <img src={person.photo} alt={person.name} style={styles.photo} />
          <div style={styles.textContainer}>
            <h2 style={styles.name}>{person.name}</h2>
            <p style={styles.position}>{person.position}</p>
          </div>
        </div>
      ))}
    </main>
  );
};

const styles = {
  body: {
    display: "flex",
    flexWrap: "wrap",
  },
  card: {
    width: "150px",
    padding: "1em",
    borderRadius: "10px",
    backgroundColor: "#fff",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    margin: "1em",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  photo: {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    objectFit: "cover",
  },
  textContainer: {
    marginTop: "0.5em",
  },
  name: {
    fontSize: "1em",
    fontWeight: "bold",
    color: "#333",
    margin: "0",
  },
  position: {
    fontSize: "0.9em",
    color: "#6a0dad", // Same purple color as header
    margin: "0.5em 0 0 0",
  },
};

export default Body;
