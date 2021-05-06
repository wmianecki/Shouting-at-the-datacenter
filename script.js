var text = [
    "I believe the City Officials are failing to see the noise pollution issue from the perspective of the sufferers.hence they are refusing to believe there is a problem. and therefore the inaction to help solve it.", 
    "The noise assault again this week is ridiculous! Call the Cyrus One Global Service Desk 866-297-8766 Option 2 spoke to a person who will escalate it to someone to respond. They know the schedule for when these 'temporary maintenance' will occur; asked for them to share this info with concerned residents. Everyone needs to make a call to that number and also call Cyrus One's Public Info Line at 877-200-8123 voicemail message line. It allows for very brief message with your nam… See More",
    ];

document.getElementById("words").innerHTML =
  text[Math.floor(Math.random() * text.length)] +
  " " +
  text[Math.floor(Math.random() * text.length)];