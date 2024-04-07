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
    reliable = 'Reliable',
    mostlyReliable = "Mostly Reliable",
    unreliable = "Unreliable",
}

export const ObjectDetectionToString: Record<ObjectDetection, string> = {
    [ObjectDetection.reliable]: "Reliable",
    [ObjectDetection.mostlyReliable]: "Mostly Reliable",
    [ObjectDetection.unreliable]: "Unreliable",
};

export enum PixelPlacement {
    correctPlacement = "Correct Placement",
    sometimesCorrect = "Sometimes Correct Placement",
    backDrop = "Backdrop",
    backStage = "Backstage",
}

export const PixelPlacementToString: Record<PixelPlacement, string> = {
    [PixelPlacement.correctPlacement]: "Correct Placement",
    [PixelPlacement.sometimesCorrect]: "Sometimes Correct Placement",
    [PixelPlacement.backDrop]: "Backdrop",
    [PixelPlacement.backStage]:"Backstage",
};
