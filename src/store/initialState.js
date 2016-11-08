import { Map, List } from 'immutable';

const initialState = Map({
  badgeCount: 0,
  collected: List(),
  badges: Map({
    0: {
      name: "The Charmer",
      description: "So your smile melts the hearts of the opposite sex? Display a pair of panties belonging to the opposite sex to a member of 37",
      achieved: false,
      icon: 'placeholder'
    },
    1: {
      name: "The Singstar",
      description: "Nothings quite so Teekkarish as singing (terribly). Sooth the souls of your comrades with a performance.",
      achieved: false,
      icon: 'placeholder'
    },
    2: {
      name: "The Beggar",
      description: "Kela's been good to you this year? Share the love and buy a Kolmeseiska member a refreshing brew!", 
      achieved: false,
      icon: 'placeholder'
    },
    3: {
      name: "The Lecturer",
      description: "Prove your academic talents holding a lecture on your topic of choise. I'm sure everyone's keen to listen at 3am.",
      achieved: false,
      icon: 'placeholder'
    },
    4: {
      name: "The Rainman",
      description: "One of us brought along a jar of little things. Prove your mettle by guessing the correct amount in the hundreds.",
      achieved: false,
      icon: 'placeholder'
    },
    5: {
      name: "The Joker",
      description: "TODO: Fitting task description",
      achieved: false,
      icon: 'placeholder'
    },
    6: {
      name: "The Freshman",
      description: "Wait. So you're a freshman and you're here? Smart move! Have one on the house. In the name of fairness, you old beards can get this by telling your favourite freshman memory.",
      achieved: false,
      icon: 'placeholder'
    },
    7: {
      name: "The Botanist",
      description: "The good folks at Silja have a variety of potted plants here on the ship. Provide us with photos of three different plants to show your love for the greens. You hippie.",
      achieved: false,
      icon: 'placeholder'
    },
    8: {
      name: "The Teekkari",
      description: "TODO: Fitting task description",
      achieved: false,
      icon: 'placeholder'
    }
  })
});

export default initialState;