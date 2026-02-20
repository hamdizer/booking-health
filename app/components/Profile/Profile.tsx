import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { ProfileItem as ProfileItemType } from "../../types/types";
import ProfileItem from "../ProfileItem/ProfileItem";
import CalendarIcon from "../../assets/icons/schedule_rounded.svg";
import GenderIcon from "../../assets/icons/gender.svg";
import PhoneIcon from "../../assets/icons/phone.svg";
import InsuranceIcon from "../../assets/icons/insurance.svg";
import {
  StyledCard,
  ProfileAvatar,
  ProfileName,
  ProfileItemsContainer,
  ProfileButton,
} from "./Profile.styles";

const Profile = () => {
  const { data } = useSelector((state: RootState) => state.profile);
  if (!data || Array.isArray(data)) return null;

  const profileItems: ProfileItemType[] = [
    {
      icon: CalendarIcon,
      property: "Date of birth",
      value: data.date_of_birth,
    },
    { icon: GenderIcon, property: "Gender", value: data.gender },
    { icon: PhoneIcon, property: "Contact info", value: data.phone_number },
    {
      icon: PhoneIcon,
      property: "Emergency contact",
      value: data.emergency_contact,
    },
    {
      icon: InsuranceIcon,
      property: "Insurance provider",
      value: data.insurance_type,
    },
  ];

  return (
    <StyledCard>
      <ProfileAvatar src={data.profile_picture} alt="image profile" />
      <ProfileName>{data.name}</ProfileName>

      <ProfileItemsContainer>
        {profileItems.map((item, index) => (
          <ProfileItem
            key={index}
            icon={item.icon}
            property={item.property}
            value={item.value}
            isMessage={false}
          />
        ))}
      </ProfileItemsContainer>

      <ProfileButton>Show all informations</ProfileButton>
    </StyledCard>
  );
};

export default Profile;
