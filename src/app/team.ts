export interface Team {
    number: number;
    name: string;

    driveInfo?: string;
    armInfo?: string;
    intakeInfo?: string;

    teamProp?: boolean;
    objectDetection?: ObjectDetection;
    purplePlacement?: PixelPlacement;
    yellowPlacement?: PixelPlacement;
    autoWhites?: number;
    autoScore?: number;
    autoNotes?: string;

    mosaicsScored?: number
    setLinesReached?: number
    pixelsScored?: number
    teleOpScore?: number;
    teleopNotes?: string;

    canHang?: boolean;
    hangTime?: number;
    droneScore?: number;
    endGameScore?: number;
    endGameNotes?: string;

    averageScore?: number;

}

export enum ObjectDetection {
    reliable = 0,
    mostlyReliable = 1,
    unreliable = 2,
}

export enum PixelPlacement {
    correctPlacement = 0,
    sometimesCorrect = 1,
    backDrop = 2,
    backStage = 3,
}
