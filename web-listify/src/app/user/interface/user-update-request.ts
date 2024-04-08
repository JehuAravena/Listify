export interface UserUpdateRequest {
    ID_USER_IN: number;
    NAME_IN:     string | null;
    NICKNAME_IN: string | null;
    LASTNAME_IN: string | null;
    EMAIL_IN:    string | null;
    PASSWORD_IN: string | null;
    ID_ROLE_IN:  number | null;
}