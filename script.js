function showTeamInfo() {
  const team = document.getElementById('team-select').value;
  const resultDiv = document.getElementById('result');

  if (!team) {
    resultDiv.textContent = "";
    return;
  }

  const chances = {
    RCB: "RCB has a 65% chance of qualifying!",
    MI: "MI needs to win all remaining matches to qualify.",
    CSK: "CSK is almost through to the playoffs.",
    GT: "GT is at risk; they need to improve NRR.",
    RR: "RR has high chances to qualify!"
  };

  resultDiv.textContent = chances[team] || "Data not available.";
}
