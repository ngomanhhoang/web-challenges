import styled from "styled-components";
import Button from "../Button";

const StyledQuickActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export default function QuickActions({ lights, turnAllOff, turnAllOn }) {
  const allOn = lights.every((light) => light.isOn);

  const allOff = lights.every((light) => !light.isOn);
  return (
    <StyledQuickActions>
      <Button
        disabled={allOff}
        type="button"
        onClick={() => {
          turnAllOff();
        }}
      >
        Turn all lights off
      </Button>
      <Button
        disabled={allOn}
        type="button"
        onClick={() => {
          turnAllOn();
        }}
      >
        Turn all lights on
      </Button>
    </StyledQuickActions>
  );
}
