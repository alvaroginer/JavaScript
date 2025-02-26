//Tipo de objeto que hay que pasar
const person1 = {
  id: 12345,
  name: "John Doe",
  number: "+1234567890",
  email: "johndoe@gmail.com",
  currentInterest: true,
  calls: [
    {
      number: 1,
      customerInterest: 5,
      objectionsRaised: 4,
      conversionPotential: 5,
      callClosure: 5,
      callDuration: 3,
      technicalQuality: 4,
    },
    {
      number: 2,
      customerInterest: 4,
      objectionsRaised: 2,
      conversionPotential: 3,
      callClosure: 2,
      callDuration: 2,
      technicalQuality: 4,
    },
  ],
  callsRating: 0,
  emails: {
    sent: 4,
    open: 2,
    clicked: 1,
    openRate: Math.round(50 / 10),
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
  person.calls.forEach((call) => {
    const callRate =
      call.customerInterest * 0.2 +
      call.objectionsRaised * 0.15 +
      call.conversionPotential * 0.2 +
      call.callClosure * 0.2 +
      call.callDuration * 0.1 +
      call.technicalQuality * 0.15;
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

  return person;
};

console.log(calculateGeneralRating(person1));

/* Sort by:
 - Call Rating
 - Email Rating
 - General Rating
 - Less time to call
 - Total Calls
 - Name A-Z

  Filter by:
 - Call Rating positive (>=3)
 - Email Rating positive (>=3)
 - Minium Number of Calls
 - Combined data
 */
