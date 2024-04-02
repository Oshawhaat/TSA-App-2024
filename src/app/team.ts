export interface Team {
    number: number;
    name: string;

    averageScore?: number;
    autoScore?: number;
    teleOpScore?: number;
    endGameScore?: number;

    teamProp?: boolean;
    objectDetection?: boolean;
    purplePlacement?: PixelPlacement;
    yellowPlacement?: PixelPlacement;

    canHang?: boolean;
    hangTime?: number;
    droneScore?: number;

}

export enum PixelPlacement {
    correctPlacement = 0,
    backDrop = 1,
    backStage = 2,
}
