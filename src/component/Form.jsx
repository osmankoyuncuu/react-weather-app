import FormContainer, { Submit, Input } from "../Styles/Form.styled";
import { useNavigate } from "react-router-dom";
import { useSearchText } from "../context/SearchTextContext";

const Form = () => {
  const navigate = useNavigate();
  const { searchText, setSearchText } = useSearchText();
  return (
    <FormContainer>
      <Input
        type="text"
        onChange={(e) => setSearchText(e.target.value)}
        value={searchText}
      />
      <Submit onClick={() => navigate(`/detail`)}>Submit</Submit>
    </FormContainer>
  );
};

export default Form;
