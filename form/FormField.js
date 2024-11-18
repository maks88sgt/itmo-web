export class FormField {
  constructor(name, type, label, validators = []) {
    this.name = name;
    this.type = type;
    this.label = label;
    this.value = "";
    this.validators = validators;
    this.error = "";
  }

  validate(){
    for (const validator of this.validators){
        const { validationFn, errorMessage } = validator
        if(!validationFn(this.value)){
            this.error = errorMessage
            return false
        }
    }
    this.error = ""
    return true
  }

  render() {
    const field = document.createElement("div")
    field.innerHTML = `
            <label for='${this.name}'>${this.label}</label>
            <input 
                type='${this.type}'
                name='${this.name}'
                id='${this.name}'
                value='${this.value}'
            />
            <span>${this.error}</span>
        `
    return field;
  }
}

export default FormField
