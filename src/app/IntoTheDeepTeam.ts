export interface Team {
    // Team
    number: number;
    name: string;

    // Bot
    driveInfo?: string;
    driveSpeed?: LowMedHigh;
    armInfo?: string;
    armSpeed?: LowMedHigh;
    intakeInfo?: string;

    // Scoring
    canScoreLowBar?: boolean;
    canScoreHighBar?: boolean;
    canScoreLowBasket?: boolean;
    canScoreHighBasket?: boolean;
    
    // Auto Left
    leftStartingObject?: ScoringObject;
    leftSpecimenScored?: number;
    leftSamplesScoredNetZone?: number;
    leftSamplesScoredLowBasket?: number;
    leftSamplesScoredHighBasket?: number;
    leftParkingMethod?: ParkingMethod;
    leftAutoScore?: number;
    leftAutoNotes?: string;
    leftAutoParkAscent?: boolean;

    // Auto Right
    rightStartingObject?: ScoringObject;
    rightSpecimenScored?: number;
    rightSamplesScoredNetZone?: number;
    rightSamplesScoredLowBasket?: number;
    rightSamplesScoredHighBasket?: number;
    rightParkingMethod?: ParkingMethod;
    rightAutoScore?: number;
    rightAutoNotes?: string;
    rightAutoParkAscent?: boolean;

    // Teleop
    scoringPreference?: ScoringMethod;
    timeToScoreSample?: number;
    timeToScoreSpecimen?: number;
    teleopScore?: number;
    teleopNotes?: string;

    // End game
    canLevelOneAscent?: boolean;
    levelOneAscentTime?: number;
    canLevelTwoAscent?: boolean;
    levelTwoAscentTime?: number;
    canLevelThreeAscent?: boolean;
    levelThreeAscentTime?: number;
    endGameScore?: number;
    endGameNotes?: string;

    // Overall
    averageScore?: number;

}

export enum LowMedHigh {
    low = "Low",
    medium = "Medium",
    high = "High",
}

export const LowMedHighToString: Record<LowMedHigh, string> = {
    [LowMedHigh.low]: "Low",
    [LowMedHigh.medium]: "Medium",
    [LowMedHigh.high]: "High",
}

export enum ScoringObject {
    sample = "Sample",
    specimen = "Specimen",
}

export const ScoringObjectToString: Record<ScoringObject, string> = {
    [ScoringObject.sample]: "Sample",
    [ScoringObject.specimen]: "Specimen",
};

export enum ScoringMethod {
    netZone = "Net Zone",
    lowBasket = "Low Basket",
    highBasket = "High Basket",
    lowBar = "Low Har",
    highBar = "High Bar",
}

export const ScoringMethodToString: Record<ScoringMethod, string> = {
    [ScoringMethod.netZone]: "Net Zone",
    [ScoringMethod.lowBasket]: "Low Basket",
    [ScoringMethod.highBasket]: "High Basket",
    [ScoringMethod.lowBar]: "Low Har",
    [ScoringMethod.highBar]: "High Bar",
};

export enum ParkingMethod {
    observationZone = "Observation Zone",
    levelOneAscent = "Level One Ascent",
    levelTwoAscent = "Level Two Ascent",
    levelThreeAscent = "Level Three Ascent",
}

export const ParkingMethodToString: Record<ParkingMethod, string> = {
    [ParkingMethod.observationZone]: "Observation Zone",
    [ParkingMethod.levelOneAscent]: "Level One Ascent",
    [ParkingMethod.levelTwoAscent]: "Level Two Ascent",
    [ParkingMethod.levelThreeAscent]: "Level Three Ascent",
};
