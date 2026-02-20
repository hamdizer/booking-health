import { ProfileItem as ProfileItemType } from "../../types/types";
import { ReactComponent as MoreHorizIcon } from "../../assets/icons/more_horiz.svg";
import {
  Container,
  LeftBox,
  TextContainer,
  PropertyText,
  ValueText,
  RightBox,
} from "./ProfileItem.styles";

const ProfileItem = (props: ProfileItemType) => {
  return (
    <Container isMessage={!!props.isMessage}>
      <LeftBox>
        {props.icon &&
          (typeof props.icon === "string" ? (
            <img src={props.icon} alt="icon" style={{ marginLeft: "0.5rem" }} />
          ) : (
            props.icon
          ))}

        <TextContainer isMessage={!!props.isMessage}>
          <PropertyText isMessage={!!props.isMessage}>
            {props.property}
          </PropertyText>
          <ValueText isMessage={!!props.isMessage}>{props.value}</ValueText>
        </TextContainer>
      </LeftBox>

      <RightBox>{props.isMessage && <MoreHorizIcon />}</RightBox>
    </Container>
  );
};

export default ProfileItem;
