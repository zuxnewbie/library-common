export const validateEmail = (value: string): boolean => {
  const regex =
    /^([0-9a-zA-Z]([-_\\.]*[0-9a-zA-Z]+)*)@([0-9a-zA-Z]([-_\\.]*[0-9a-zA-Z]+)*)[\\.]([a-zA-Z]{2,9})$/;
  return !!value.toLowerCase().match(regex);
};

export const validatePhoneNumber = (phoneNumber: string): boolean => {
  return (
    /^(84|0[3|5|7|8|9])[0-9]{8}$/g.test(phoneNumber) &&
    /^[0-9]+$/.test(phoneNumber) &&
    !/\s/.test(phoneNumber)
  );
};

export const validateName = (name: string): boolean => {
  return /^[A-Za-zÀ-ỹà-ỹ ]+$/g.test(name);
};

export const validateText = (text: string): boolean => {
  return /^[A-Za-zÀ-ỹà-ỹ0-9 ]+$/g.test(text);
};
