import './Form.css'

const Form = () => {
  return (
    <div className='form-container'>
        <h3 className='form-title'>Texto da nota</h3>
        <form>
            <input type="text" className='input-text' />
            <input type="reset" value="CANCELAR" className='input-reset' />
            <input type="submit" value="CONFIRMAR" className='input-submit' />
        </form>
    </div>
  );
}

export default Form;