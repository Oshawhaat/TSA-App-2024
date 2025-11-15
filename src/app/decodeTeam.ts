export interface Team {
    number: number;
    name: string;

    driveInfo?: string;
    intakeInfo?: string;
    launcherInfo?: string;
    hasSorter?: boolean;
    sorterInfo?: string;

    closeAutoArtifacts?: number;
    closeAutoLeave?: boolean;
    closeAutoScore?: number;
    closeAutoNotes?: string;

    farAutoArtifacts?: number;
    farAutoLeave?: boolean;
    farAutoScore?: number;
    farAutoNotes?: string;

    artifactsScored?: number;
    cycleTime?: number;
    teleopScore?: number;
    teleopNotes?: string;

    endGameStrategy?: string;
    endGameScore?: number;
    endGameNotes?: string;

    averageScore?: number;
}
