
const teamData = {
    "CSK": { color: "#f1c40f", captainImg: "https://example.com/csk.jpg", chance: "Medium", nrr: "+0.3" },
    "RCB": { color: "#d32f2f", captainImg: "https://example.com/rcb.jpg", chance: "High", nrr: "+0.6" },
    "MI": { color: "#3498db", captainImg: "https://example.com/mi.jpg", chance: "Low", nrr: "-0.2" },
    "GT": { color: "#34495e", captainImg: "https://example.com/gt.jpg", chance: "Medium", nrr: "+0.1" },
    "LSG": { color: "#2ecc71", captainImg: "https://example.com/lsg.jpg", chance: "Low", nrr: "-0.1" },
    "DC": { color: "#2980b9", captainImg: "https://example.com/dc.jpg", chance: "Low", nrr: "-0.3" },
    "SRH": { color: "#e67e22", captainImg: "https://example.com/srh.jpg", chance: "Medium", nrr: "+0.2" },
    "RR": { color: "#9b59b6", captainImg: "https://example.com/rr.jpg", chance: "Medium", nrr: "+0.0" },
    "KKR": { color: "#8e44ad", captainImg: "https://example.com/kkr.jpg", chance: "High", nrr: "+0.5" },
    "PBKS": { color: "#c0392b", captainImg: "https://example.com/pbks.jpg", chance: "Low", nrr: "-0.4" }
};

document.getElementById("team-select").addEventListener("change", function() {
    const team = this.value;
    const data = teamData[team];
    if (data) {
        document.body.style.backgroundColor = data.color;
        const img = document.getElementById("captain-img");
        img.src = data.captainImg;
        img.style.display = "block";
        document.getElementById("playoff-chance").textContent = `Playoff Chance: ${data.chance}`;
        document.getElementById("nrr-info").textContent = `Net Run Rate (NRR): ${data.nrr}`;
        document.getElementById("weather-info").textContent = "Weather integration coming soon.";
    }
});
