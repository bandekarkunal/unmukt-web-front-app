import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../context/ContextProvider";
import CustomSelectField from "../ui-components/customSelectField";

interface props {
  handleChangeCallback: any;
  state_id: string;
  disabled?: boolean;
}

const SelectState: React.FunctionComponent<props> = ({
  handleChangeCallback,
  state_id,
  disabled,
}) => {
  const context = useContext(Context);
  const GlobalDetailsContext = context?.GlobalDetails;
  const { stateList, userProfile } = GlobalDetailsContext?.state;
  const [disableState, setDisableState] = useState<boolean>(false);

  useEffect(() => {
    defaultDisableStateMenu();
  }, [userProfile]);

  const defaultDisableStateMenu = () => {
    if (userProfile?.state_member?.state?.id) {
      setDisableState(true);
    }
  };

  return (
    <>
      <CustomSelectField
        label={"State"}
        fieldName={"state_id"}
        required={true}
        valueKey={"id"}
        placeholder={"Select State"}
        onChange={(response: any) => handleChangeCallback(response)}
        data={stateList}
        value={state_id}
        disabled={disableState ? disableState : disabled}
      />
    </>
  );
};

export default SelectState;
