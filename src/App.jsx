import { useState } from "react";

/* ---- SIMPLE MOCK DATA (trimmed version) ---- */
const VEHICLES = [
  { id:1, name:"Tesla Model 3", status:"available" },
  { id:2, name:"BMW X5", status:"rented" },
  { id:3, name:"Toyota RAV4", status:"available" }
];

const BOOKINGS = [
  { id:1, renter:"Mike Johnson", status:"active", total:1200 },
  { id:2, renter:"Sarah Williams", status:"pending", total:1750 }
];

/* ---- LOGIN ---- */
function Login({ onLogin }) {
  return (
    <div style={{ padding:40, textAlign:"center" }}>
      <h2>Fleet OS</h2>
      <button onClick={() => onLogin("admin")}>Login as Admin</button>
      <button onClick={() => onLogin("va")}>Login as VA</button>
    </div>
  );
}

/* ---- DASHBOARD ---- */
function Dashboard() {
  return (
    <div style={{ padding:20 }}>
      <h2>Dashboard</h2>
      <p>Revenue, Vehicles, Bookings overview will go here.</p>
    </div>
  );
}

/* ---- VEHICLES ---- */
function Vehicles() {
  return (
    <div style={{ padding:20 }}>
      <h2>Vehicles</h2>
      {VEHICLES.map(v => (
        <div key={v.id} style={{ padding:10, border:"1px solid #ccc", marginBottom:10 }}>
          {v.name} - {v.status}
        </div>
      ))}
    </div>
  );
}

/* ---- BOOKINGS ---- */
function Bookings() {
  return (
    <div style={{ padding:20 }}>
      <h2>Bookings</h2>
      {BOOKINGS.map(b => (
        <div key={b.id} style={{ padding:10, border:"1px solid #ccc", marginBottom:10 }}>
          {b.renter} - ${b.total} - {b.status}
        </div>
      ))}
    </div>
  );
}

/* ---- APP ROOT ---- */
export default function App() {
  const [user, setUser] = useState(null);
  const [page, setPage] = useState("dashboard");

  if (!user) return <Login onLogin={setUser} />;

  return (
    <div>
      <div style={{ display:"flex", gap:10, padding:10 }}>
        <button onClick={() => setPage("dashboard")}>Dashboard</button>
        <button onClick={() => setPage("vehicles")}>Vehicles</button>
        <button onClick={() => setPage("bookings")}>Bookings</button>
        <button onClick={() => setUser(null)}>Logout</button>
      </div>

      {page === "dashboard" && <Dashboard />}
      {page === "vehicles" && <Vehicles />}
      {page === "bookings" && <Bookings />}
    </div>
  );
}
