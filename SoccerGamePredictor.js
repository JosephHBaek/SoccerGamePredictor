// Two arrays that will be randomly assigned to a soccer prediction. This first is the array for the teams. The second is the prediction about the team. //

let premierLeagueTeams = ['Arsenal', 'Man City', 'Newcastle', 'Man United', 'Tottenham', 'Liverpool', 'Fulham', 'Brighton', 'Brentford', 'Chelsea', 'Aston Villa', 'Crystal Palace', 'Leicester City', 'Leeds United', 'Nottingham Forest', 'Bournemouth', 'West Ham', 'Everton', 'Wolves', 'Southampton'];

let teamCondition = ['The winner of the year: ', 'The last place team of the year: ', 'The most improved team of the year: ', 'The most disapointing team: '];

// The Year that the prediction will take place. //

const randomNumber = (max) => {
    return Math.floor(Math.random() * max)
};

const randomFutureYear = (currentYear, years) => {
    return (currentYear + 1) + randomNumber(years);
};

// The function that will create the prediction. For this prediction to be in the future the current year must be inserted as the first parameter and the time span of which the prediciton could be made in the second parameter. The second parameter should be 1 less year past the span of the years the prediction to be made in order for the current year not to be accounted for within the prediction. //

const soccerGamePredictor = (currentYear, years) => {
    let pLTI =  Math.floor(Math.random() * 20);
    let futureYear = randomFutureYear(currentYear, years);
    let tCI =  Math.floor(Math.random() * 4);
    console.log(`${teamCondition[tCI]}${futureYear} is ${premierLeagueTeams[pLTI]}.`);
};

