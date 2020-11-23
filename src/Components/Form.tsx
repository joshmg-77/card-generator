import React from "react";
import "../Styles/form.scss";

const Form = (props) => {
  /*
    // with React-hook-form
    const {register,errors,handleSubmit} = useForm();
    const HandledSubmit = (e:React.FormEvent<HTMLInputElement>)=>props.Handleds(e)
  */

  const handled = (event: React.ChangeEvent<HTMLElement>) =>
    props.Handleds(event);
  return (
    <form className="Form">
      <input
        type="text"
        name="username"
        className="Text"
        placeholder="add client"
        value={undefined}
        onChange={handled}
        maxLength={35}
        required
      />
      <input
        type="text"
        name="typetarget"
        className="TypeCard"
        maxLength={20}
        placeholder="add type target"
        value={undefined}
        onChange={handled}
      />
    </form>
  );
};
export default Form;
