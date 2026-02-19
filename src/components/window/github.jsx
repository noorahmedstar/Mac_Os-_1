import React from "react";
import "./github.scss";
import MacWindow from "./MacWindow";

const users = [
    { id: 1, name: "Noor Ahmed", skill: "React", img: "https://i.pravatar.cc/150?img=1" },
    { id: 2, name: "Rahul Dev", skill: "Node.js", img: "https://i.pravatar.cc/150?img=2" },
    { id: 3, name: "Aman Kumar", skill: "UI/UX", img: "https://i.pravatar.cc/150?img=3" },
    { id: 4, name: "Sara Khan", skill: "Python", img: "https://i.pravatar.cc/150?img=4" },
    { id: 5, name: "Rohit Singh", skill: "Java", img: "https://i.pravatar.cc/150?img=5" },
    { id: 6, name: "Anjali Verma", skill: "Next.js", img: "https://i.pravatar.cc/150?img=6" },
    { id: 7, name: "Arjun Patel", skill: "MongoDB", img: "https://i.pravatar.cc/150?img=7" },
    { id: 8, name: "Neha Gupta", skill: "CSS", img: "https://i.pravatar.cc/150?img=8" },
    { id: 9, name: "Karan Mehta", skill: "TypeScript", img: "https://i.pravatar.cc/150?img=9" },
    { id: 10, name: "Priya Sharma", skill: "DevOps", img: "https://i.pravatar.cc/150?img=10" },
];

const Github = ({windowName,windowState,setWindowState}) => {
    return (
        <MacWindow windowName={windowName} windowState={windowState} setWindowState={setWindowState} >
            <div className="git-container">
                {users.map((user) => (
                    <div className="git-card" key={user.id}>
                        <img src={user.img} alt="profile" />
                        <h3>{user.name}</h3>
                        <span>{user.skill}</span>
                    </div>
                ))}
            </div>
        </MacWindow>
    );
};

export default Github;
