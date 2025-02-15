import { AbstractControl, AsyncValidatorFn, ValidationErrors } from "@angular/forms";
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';

const maxLength = (editorSubject: Subject<any>, characterLimit: number): AsyncValidatorFn => {
  return (control: AbstractControl): Observable<ValidationErrors | null> => {
    return editorSubject.pipe(map((editor) => {
      const characterCount = editor.plugins.wordcount.text.getCharacterCount();
      
      return characterCount <= characterLimit ? null : {
        maxlength: {
          requiredLength: characterLimit,
          actualLength: characterCount
        }
      };
    }));
  };
}

export { maxLength };
