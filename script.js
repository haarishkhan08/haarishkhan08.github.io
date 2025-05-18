
const playoffChances = {
    CSK: "85% - Very likely to qualify with strong NRR.",
    MI: "40% - Needs to win remaining matches and depend on other results.",
    RCB: "30% - Outside chance, depends on big-margin wins.",
    KKR: "90% - Almost qualified, top 2 finish possible.",
    SRH: "75% - Strong team, a win or two secures spot.",
    RR: "95% - Almost guaranteed, currently leading.",
    DC: "10% - Very slim chance, needs miracles.",
    PBKS: "20% - Needs strong comeback.",
    LSG: "60% - In the race, one or two wins needed.",
    GT: "0% - Already eliminated from playoffs."
};

function updateChances() {
    const team = document.getElementById("team-select").value;
    const resultDiv = document.getElementById("result");
    if (team && playoffChances[team]) {
        resultDiv.textContent = playoffChances[team];
    } else {
        resultDiv.textContent = "";
    }
}
