import { useState } from "react";
import "./form.css";

const Form = () => {

    // Estado inicial do formulario

    const initForm = {
        nome: "",
    }

    // Estado do formulario

    const [formState, setFormState] = useState(initForm);

    const handleInput = (event) => {
        // Obter o valor e o nome do campo de entrada
        const target = event.currentTarget;
        // Extrair o valor e o nome do campo de entrada
        const { value, name } = target;

        // Atualizar o estado do formulário com os novos valores
        setFormState({ ...formState, [name]: value });

    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formState.nome); 
        setFormState({...initForm});
    }

    return (
        <div className="containerForm">
            <div>
                <form onSubmit={handleSubmit}>
                    <h2 className="titulozin">Formulário</h2>
                    <div className="form-control">
                        <label className="labelzin" htmlFor="nome">Nome</label>
                        <input className="inputzin" type="text" id="nome" name="nome" value={formState.nome} onChange={handleInput} />
                    </div>
                    <div className="form-control">
                        <button className="botaozin" type="submit">Enviar</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Form;