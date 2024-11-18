export class Form{
    static formCounter = 0

    constructor(fields = [], onSubmit = null){
        this.fields = fields
        this.onSubmit = onSubmit
        this.id = `Form-${Form.formCounter}`
        Form.formCounter += 1
    }

    render(){
        const form = document.createElement('form')
        form.id = this.id
        const fragment = document.createDocumentFragment()
            for (const field of this.fields){
                fragment.appendChild(field.render())
            }
        const button = document.createElement('button')
        button.type = 'submit'
        button.innerText="Submit"
        fragment.appendChild(button)
        form.appendChild(fragment)
        return form   
    }

    getData(){
        const data = {}
        this.fields.forEach(field=>{
            data[field.name] = field.value
        })
        return data
    }

    validate(){
        return this.fields.every(field=>field.validate())
    }

    handleSubmit(event){
        event.preventDefault()
        if(this.validate()){
            const data = this.getData()
            this.onSubmit(data)
        } else {
            console.log(this.fields)
            this.updateView()
        }
        
    }


    updateView(){
        const formContainer = document.querySelector(`#${this.id}`).parentElement
        formContainer.innerHTML=""
        formContainer.appendChild(this.render())
        //this.attachListeners()
    }

    attachListeners(){
        const form = document.querySelector(`#${this.id}`)
        form.addEventListener("submit", this.handleSubmit.bind(this))
        this.fields.forEach(field=>{
            const inputElement = document.querySelector(`#${field.name}`)
            inputElement.addEventListener("input", event=>{
                field.value = event.target.value;
                this.updateView()
            })
        })
    }

}

export default Form