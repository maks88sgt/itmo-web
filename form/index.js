import FormField from "./FormField.js";
import Form from "./Form.js";

const formField1 = new FormField("test", "text", "Test label",
    [{errorMessage: "This is required field", validationFn: (value)=>value.length}]
)

const formField2 = new FormField("test22", "text", "Test label22",
    [{errorMessage: "This is required field", validationFn: (value)=>value.length}]
)

const parent = document.querySelector(".parent")

const form = new Form([formField1,formField2], (fields)=>console.log(fields))

const fragment = document.createDocumentFragment();

fragment.appendChild(form.render())

parent.appendChild(fragment);

form.attachListeners()