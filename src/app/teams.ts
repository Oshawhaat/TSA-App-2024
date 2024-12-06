import { Team, LowMedHigh, ScoringObject, ScoringMethod, ParkingMethod } from './IntoTheDeepTeam'

export const CyberPirates13737: Team = {
    // Team
    number: 13737,
    name: "Belton Cyber Pirates",

    // Bot
    driveInfo: "Basic Mecanum drive, field centric drive",
    driveSpeed: LowMedHigh.medium,
    armInfo: "Reverse double six bar with swing arm on the front",
    armSpeed: LowMedHigh.medium,
    intakeInfo: "Basic claw, angled fingers to grab the samples well",

    // Scoring
    canScoreLowBar: false,
    canScoreHighBar: false,
    canScoreLowBasket: true,
    canScoreHighBasket: true,
    
    // Auto
    leftStartingObject: ScoringObject.specimen,
    leftSpecimenScored: 1,
    leftSamplesScoredNetZone: 1,
    leftSamplesScoredLowBasket: 0,
    leftSamplesScoredHighBasket: 0,
    //leftParkingMethod: ,
    leftAutoScore: 36,
    leftAutoNotes: "Scores specimen on high bar first, then grabs first yellow block and scores in high basket. End in net zone.",
    leftAutoParkAscent: false,

    // Auto Right
    rightStartingObject: ScoringObject.specimen,
    rightSpecimenScored: 2,
    rightSamplesScoredNetZone: 0,
    rightSamplesScoredLowBasket: 0,
    rightSamplesScoredHighBasket: 0,
    //rightParkingMethod?: ,
    rightAutoScore: 40,
    rightAutoNotes: "Scores first specimen on high bar then pushes first blue block into human player, then grabs specimen and scores on high bar",
    rightAutoParkAscent: false,

    // Teleop
    scoringPreference: ScoringMethod.highBar,
    timeToScoreSample: 10,
    //timeToScoreSpecimen?: ,
    teleopScore: 40,
    teleopNotes: "Somewhat difficult to grab specimen with their bot but they are good at it",
    // End game
    canLevelOneAscent: true,
    levelOneAscentTime: 3,
    canLevelTwoAscent: false,
    //levelTwoAscentTime?: ,
    canLevelThreeAscent: false,
    //levelThreeAscentTime?: ,
    endGameScore: 3,
    endGameNotes: "Keep scoring until 3-5 seconds left then touch bar for level 1 ascent",

    // Overall
    averageScore: 80,
}