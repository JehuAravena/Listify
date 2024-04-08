export interface TaskUpdateRequest {
    ID_TASK_IN: number,
    TITLE_IN: string | null;
    DESCRIPTION_IN: string | null;
    PRIORITY_IN: number | null;
    STATUS_IN: boolean | null;
}