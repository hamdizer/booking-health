import { ProfileItem as ProfileItemType } from "../../types/types";
import ProfileItem from "../ProfileItem/ProfileItem";
import { ReactComponent as SearchIcon } from "../../assets/icons/search.svg";

import {
  StyledCard,
  Header,
  HeaderTitle,
  SearchIconWrapper,
  ListContainer,
} from "./Messages.styles";

interface MessagesProps {
  data: ProfileItemType[];
}

const Messages = ({ data }: MessagesProps) => {
  return (
    <aside>
      <StyledCard>
        <Header>
          <HeaderTitle>Patients</HeaderTitle>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
        </Header>

        <ListContainer>
          {data.map((item, index) => (
            <ProfileItem
              key={index}
              property={item.property}
              value={item.value}
              icon={item.icon}
              isMessage={true}
            />
          ))}
        </ListContainer>
      </StyledCard>
    </aside>
  );
};

export default Messages;
