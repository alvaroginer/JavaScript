//Tipo de objeto que hay que pasar
const person = {
  id: 12345,
  name: "John Doe",
  number: "+1234567890",
  calls: [
    {
      number: 1,
      customerInterest: { score: 0, weight: 0.2 },
      objectionsRaised: { score: 0, weight: 0.15 },
      conversionPotential: { score: 0, weight: 0.2 },
      callClosure: { score: 0, weight: 0.2 },
      callDuration: { score: 0, weight: 0.1 },
      technicalQuality: { score: 0, weight: 0.15 },
    },
  ],
  callsRating: 0,
  emails: {
    sent: 4,
    open: 2,
    clicked: 1,
    openRate: 50,
    block: 0,
    rebound: 0,
    rating: 0,
  },

  overallRating: 0,
};

const calculateGeneralRating = (person) => {
  // Calculamos el Mail Rating
  const emailValue =
    person.emails.sent * 0.1 +
    person.emails.open * 0.2 +
    person.emails.clicked * 0.3 +
    person.emails.openRate * 0.2 +
    person.emails.block * -0.1 +
    person.emails.rebound * -0.1;
  const emailRating = (emailValue / 2) * 5;
  person.emails.rating = emailRating;

  //Calculamos el Call Rating
  const callsRating = [];
  person[calls].forEach((call) => {
    const callRate =
      person.calls.customerInterest * 0.2 +
      person.calls.objectionsRaised * 0.15 +
      person.calls.conversionPotential * 0.2 +
      person.calls.callClosure * 0.2 +
      person.calls.callDuration * 0.1 +
      person.calls.technicalQuality * 0.15;
    callsRating.push(callRate);
  });

  const sumAllRates = callsRating.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  const totalCallsRating = sumAllRates / callsRating.length;
  person.callsRating = totalCallsRating;

  //Final rating
  person.overallRating = emailRating + totalCallsRating;
};
