import { StyledButton } from "../styledComponents/StyledButton";

export default function PrimaryButton({ handleLogin }) {
  return (
    <StyledButton variant="contained" onClick={handleLogin}>
      ورود
    </StyledButton>
  );
}
