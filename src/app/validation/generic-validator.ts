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

        if (value.length !==10){
            return { wrongEpfNo: true };
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

    static first_name(control: AbstractControl): ValidationErrors | null {
        const value = control.value;
        if (!value) {
            return { requireFirstName: true }; // Required validator will handle empty fields
        }

        if(value.length <3){
            return { WrongFirstName: true };
        }

        if(value.length > 15){
            return { ErrorFirstName: true };
        }

        return null; // Field is valid
    }

    static middle_name(control: AbstractControl): ValidationErrors | null {
        const value = control.value;
        if (!value) {
            return { requireMiddleName: true }; // Required validator will handle empty fields
        }
        if(value.length <3){
            return { WrongFirstName: true };
        }

        if(value.length > 15){
            return { ErrorFirstName: true };
        }
        return null; // Field is valid
    }

    static last_name(control: AbstractControl): ValidationErrors | null {
        const value = control.value;
        if (!value) {
            return { requireLastName: true }; // Required validator will handle empty fields
        }
        if(value.length <3){
            return { WrongFirstName: true };
        }

        if(value.length > 15){
            return { ErrorFirstName: true };
        }
        return null; // Field is valid
    }

    static mobile_no(control: AbstractControl): ValidationErrors | null {
        const value = control.value;
        if (!value) {
            return { requireMobileNumber: true }; // Required validator will handle empty fields
        }

        const pattern = /^[0-9]*$/;
        if (!pattern.test(value)) {
            return { invalidMobileNumber: true }; // Return custom error for invalid format
        }

        if (value.length !==10){
            return { wrongMobileNumber: true };
        }

        return null; // Field is valid
    }

    static exampleInputFile(control: AbstractControl): ValidationErrors | null {
        const file = control.value;
        if (!file) {
            return null; // No file is selected
        }
        const allowedExtensions = ['jpg', 'jpeg', 'png'];
        const maxFileSize = 2 * 1024 * 1024; 

        const fileName = file.name.toLowerCase();
        const fileExtension = fileName.split('.').pop();

        if(!allowedExtensions.includes(fileExtension)){
            return{invalidExtension: true}; //Invalid file extension
        }
    }

    static any_other(control: AbstractControl): ValidationErrors | null {
        const text = control.value;
        if (text && text.length < 10) {
            return { invalidTextArea: true }; // Required validator will handle empty fields
        }
        return null; // Field is valid
    }

    static checkbox(control: AbstractControl): ValidationErrors | null {
        const checkbox = control.value;

        if (!checkbox || checkbox.length ===0) {
            return { noCheckboxSelected: true }; // Required validator will handle empty fields
        }
        if (checkbox.length > 1){
            return { multipleCheckboxesSelected: true}
        }
        return null; // Field is valid
    }

    
}
