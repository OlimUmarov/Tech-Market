import { Modal } from "flowbite-react";
import { useEffect, useState } from "react";
import { SignUp } from "./SignUp";
import { Login } from "./Login";

type Props = {
  isClicked: boolean;
  onClick: (data:boolean)=> void;
};

export const AuthModel: React.FC<Props> = ({ isClicked, onClick }) => {
  const [openModal, setOpenModal] = useState<string | undefined>();
  const props = { openModal, setOpenModal };
  const [showSignUp, setShowSignUp] = useState<boolean>(true);

  useEffect(() => {
    props.setOpenModal("click");
  }, [isClicked]);

  function handleShowSignUp() {
    setShowSignUp(!showSignUp);
  }

  function closeModel(data?: boolean) {
    data && props.setOpenModal(undefined)
  }

  return (
    <div className="bg-blue-500 ">
      <Modal
      size="md"
        show={props.openModal === "click"}
        onClose={() => {
          props.setOpenModal(undefined)
          onClick(false)
        }}
      >
        <Modal.Header> Saytga kirish</Modal.Header>
        <Modal.Body>
          <div className="flex-center">
            {showSignUp ? (
              <SignUp onClick={handleShowSignUp} closeModel={closeModel}/>
            ) : (
              <Login onClick={handleShowSignUp} closeModel={closeModel}/>
            )}
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};
