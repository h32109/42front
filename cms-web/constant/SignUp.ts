export enum SignUpInputName {
  LastName = "lastName",
  FirstName = "firstName",
  EmailOrPhone = "emailOrPhone",
  Password = "password",
  Birthday_Year = "birthYear",
  Birthday_Month = "birthMonth",
  Birthday_Day = "birthDay",
  Gender = "gender",
  PreferredPronoun = "preferred_pronoun",
  CustomGender = "custom_gender",
}

export enum Gender {
  Male = "Male",
  Female = "Female",
  Custom = "Unspecified",
}

export enum PreferredPronoun {
  Female = "1",
  Male = "2",
  Multiple = "6",
}
