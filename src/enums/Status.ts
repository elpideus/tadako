// TODO: Add Documentation
export enum Status {
    ONGOING,
    FINISHED,
    UNRELEASED,
    DROPPED
}

// TODO: Add documentation
export const StatusMapping: Record<string, Status> = {
    "ONGOING": Status.ONGOING,
    "AIRING": Status.ONGOING,
    "FINISHED": Status.FINISHED,
    "UNRELEASED": Status.UNRELEASED,
    "DROPPED": Status.DROPPED
}

export const ItalianStatusMapping: Record<string, Status> = {
    "IN CORSO": Status.ONGOING,
    "IN_CORSO": Status.ONGOING,
    "INCORSO": Status.ONGOING,
    "FINITO": Status.FINISHED,
    "NON RILASCIATO": Status.UNRELEASED,
    "NON_RILASCIATO": Status.UNRELEASED,
    "NONRILASCIATO": Status.UNRELEASED,
    "DROPPATO": Status.DROPPED
}
