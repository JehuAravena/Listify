import { Injectable } from "@angular/core";

@Injectable()
export class FieldValidators{

    constructor( ) {
    }

    errorMessages: any = {};

    public isFieldRequired(errors: any, field: string): void {
        if (errors?.required) {
            this.errorMessages[field] = `Field ${ field } is required`;
        }
    }
    
    public isFieldMinLength(errors: any, field: string) {
        if (errors?.minlength) {
            this.errorMessages[field] = `Field ${ field } must have at least ${ errors.minlength.requiredLength } characters`;
        }
    }
    
    public isFieldMaxLength(errors: any, field: string) {
        if (errors?.maxlength) {
            this.errorMessages[field] = `Field ${ field } must have a maximum of ${ errors.maxlength.requiredLength } characters`;
        }
    }
    
    public isEmailValid(errors: any, field: string) {
        if (errors?.pattern) {
            this.errorMessages[field] = `Field ${ field } is not a valid email`;
        }
    }
    
    public isLettersAndSpacesValid(errors: any, field: string) {
        if (errors?.pattern) {
            this.errorMessages[field] = `Field ${ field } can only contain letters and spaces`;
        }
    }
    
    public isNicknameSymbolsValid(errors: any, field: string) {
        if (errors?.pattern) {
            this.errorMessages[field] = `Field ${ field } can only contain letters, numbers, dots, hyphens, and underscores`;
        }
    }
    
    public errorByField(field: string): string {
        return this.errorMessages[field];
    }
    
    
}