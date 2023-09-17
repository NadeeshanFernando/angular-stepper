import { AbstractControl, ValidationErrors, Validators } from "@angular/forms";

export class GenericValidator {

    static common(control: AbstractControl): ValidationErrors | null {
        const value = control.value;
        return null; // Field is valid
    }

    static epf_no(control: AbstractControl): ValidationErrors | null {
        const value = control.value;
        // Check if the field is empty
        if (!value) {
            return { requireEpfNo: true }; // Required validator will handle empty fields
        }
        // Check if the field contains only alphanumeric characters
        const pattern = /^[A-Za-z0-9]*$/;
        if (!pattern.test(value)) {
            return { invalidEpfNo: true }; // Return custom error for invalid format
        }
        return null; // Field is valid
    }

    static company(control: AbstractControl): ValidationErrors | null {
        const value = control.value;
        if (!value) {
            return { requireCompany: true }; // Required validator will handle empty fields
        }
        return null; // Field is valid
    }

    static branch(control: AbstractControl): ValidationErrors | null {
        const value = control.value;
        if (!value) {
            return { requireBranch: true }; // Required validator will handle empty fields
        }
        return null; // Field is valid
    }

    static department(control: AbstractControl): ValidationErrors | null {
        const value = control.value;
        if (!value) {
            return { requireDepartment: true }; // Required validator will handle empty fields
        }
        return null; // Field is valid
    }

    static designation(control: AbstractControl): ValidationErrors | null {
        const value = control.value;
        if (!value) {
            return { requireDesignation: true }; // Required validator will handle empty fields
        }
        return null; // Field is valid
    }

    static grade(control: AbstractControl): ValidationErrors | null {
        const value = control.value;
        if (!value) {
            return { requireGrade: true }; // Required validator will handle empty fields
        }
        return null; // Field is valid
    }

    static date_of_joining(control: AbstractControl): ValidationErrors | null {
        const value = control.value;
        if (!value) {
            return { requireDateOfJoining: true }; // Required validator will handle empty fields
        }
        return null; // Field is valid
    }

    static hod_name(control: AbstractControl): ValidationErrors | null {
        const value = control.value;
        if (!value) {
            return { requireHodName: true }; // Required validator will handle empty fields
        }
        return null; // Field is valid
    }

    static epf_no_of_hod(control: AbstractControl): ValidationErrors | null {
        const value = control.value;
        if (!value) {
            return { requireEpfNoOfHod: true }; // Required validator will handle empty fields
        }
        return null; // Field is valid
    }
}
