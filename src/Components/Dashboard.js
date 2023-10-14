import React , { useState } from "react";
import Heading from "./Heading";
import GraphSection from "./GraphSection";
import ActivitySection from "./ActivitySection";
import InviteModal from "./InviteModal";

const Dashboard = () => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }
  return (
    <div>
      <Heading toggleModal={toggleModal} />
      <GraphSection />
      <ActivitySection />
      <InviteModal modal={modal} setModal={setModal} toggleModal={toggleModal}/>
    </div>
  );
};

export default Dashboard;
