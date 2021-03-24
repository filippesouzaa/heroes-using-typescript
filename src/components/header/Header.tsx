import React from "react";

import { BodyHeader, Logo, CandidateProfile, CBButton } from "./style";

import ObjectiveLogo from "../../images/logo.png";

const Header: React.FC = () => {
  return (
    <BodyHeader>
      <Logo src={ObjectiveLogo}></Logo>
      <CandidateProfile><strong>Filipe Souza</strong>Teste de Front-end<CBButton>CB</CBButton></CandidateProfile>      
    </BodyHeader>
  );
};

export default Header;
