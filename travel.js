const countries = {
  japan: {
    emoji: "🇯🇵",
    funFact: "Japan has the world's busiest train station"
  },
  italy: {
    emoji: "🇮🇹",
    funFact: "Italy is where you will find the oldest university in the world"
  },
  brazil: {
    emoji: "🇧🇷",
    funFact: "Brazil has the largest number of Japanese people outside of Japan"
  }
};

export function countryInfo(countrySelect) {
  return countries[countrySelect];
}