function updateTheme() {
  const team = document.getElementById('team-select').value;
  const playoffText = document.getElementById('playoff-text');
  const captainImg = document.getElementById('captain-img');

  document.body.className = team;

  const teamData = {
    CSK: {
      chances: "76% chance of qualifying. Strong batting depth.",
      captain: "https://upload.wikimedia.org/wikipedia/commons/1/19/MS_Dhoni_in_2023.jpg"
    },
    MI: {
      chances: "68% chance. Middle-order needs consistency.",
      captain: "https://upload.wikimedia.org/wikipedia/commons/6/63/Hardik_Pandya.jpg"
    },
    RCB: {
      chances: "59% chance. Depends on net run rate.",
      captain: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Faf_du_Plessis_2015.jpg"
    },
    DC: {
      chances: "42% chance. Must win remaining matches.",
      captain: "https://upload.wikimedia.org/wikipedia/commons/3/32/Rishabh_Pant.jpg"
    },
    RR: {
      chances: "80% chance. Top order in excellent form.",
      captain: "https://upload.wikimedia.org/wikipedia/commons/3/30/Sanju_Samson.jpg"
    },
    KKR: {
      chances: "75% chance. Solid all-round performances.",
      captain: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Shreyas_Iyer_in_2018.jpg"
    },
    PBKS: {
      chances: "38% chance. Struggling with form.",
      captain: "https://upload.wikimedia.org/wikipedia/commons/f/f2/Shikhar_Dhawan.jpg"
    },
    SRH: {
      chances: "65% chance. Consistent bowling helping them.",
      captain: "https://upload.wikimedia.org/wikipedia/commons/e/e5/Pat_Cummins.jpg"
    },
    GT: {
      chances: "55% chance. Mixed performance season.",
      captain: "https://upload.wikimedia.org/wikipedia/commons/6/63/Shubman_Gill.jpg"
    },
    LSG: {
      chances: "50% chance. Depends on other results.",
      captain: "https://upload.wikimedia.org/wikipedia/commons/7/74/KL_Rahul.jpg"
    }
  };

  if (teamData[team]) {
    playoffText.textContent = teamData[team].chances;
    captainImg.src = teamData[team].captain;
    captainImg.style.display = "block";
    captainImg.alt = team + " Captain";
  } else {
    playoffText.textContent = "Select a team to view their chances...";
    captainImg.style.display = "none";
  }
}
