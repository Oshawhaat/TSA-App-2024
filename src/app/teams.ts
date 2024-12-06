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
    leftStartingObject: ScoringObject.sample,
    leftSpecimenScored: 0,
    leftSamplesScoredNetZone: 0,
    leftSamplesScoredLowBasket: 0,
    leftSamplesScoredHighBasket: 0,
    leftParkingMethod: ParkingMethod.observationZone,
    leftAutoScore: 3,
    leftAutoNotes: "No side preference, both parking autos, left auto waits 20 secs before parking in observation zone",

    // Teleop
    scoringPreference: ScoringMethod.highBasket,
    timeToScoreSample: 20,
    //timeToScoreSpecimen?: ,
    teleopScore: 40,
    teleopNotes: "Wrist is really difficult to get to move, makes scoring difficult and relatively slow",

    // End game
    canLevelOneAscent: true,
    levelOneAscentTime: 1,
    canLevelTwoAscent: false,
    //levelTwoAscentTime?: ,
    canLevelThreeAscent: false,
    //levelThreeAscentTime?: ,
    endGameScore: 3,
    endGameNotes: "Keep scoring until 3-5 seconds left then touch bar for level 1 ascent",

    // Overall
    averageScore: 50,
}