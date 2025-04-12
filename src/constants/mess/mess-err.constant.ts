export const MESS_ERROR_EN = {
  ROLE: 'Role invalid',
  GENDER: 'Gender invalid',
  EMAIL: 'Email incorrect format, vd: abc@mail.com',
  PHONE_NUMBER: 'Phone incorrect format',

  FIELD_NOT_EMPTY: (field: string) => `${field} cannot be empty`,

  MIN_LENGTH: ({ field, length }: { field: string; length: number }) =>
    `${field} must be at least ${length} characters long`,

  MAX_LENGTH: ({ field, length }: { field: string; length: number }) =>
    `${field} must be at most ${length} characters long`,

  MIN_VALUE: ({ field, val }: { field: string; val: number }) =>
    `${field} must be greater than ${val}`,

  MAX_VALUE: ({ field, val }: { field: string; val: number }) =>
    `${field} must be less than ${val}`,
};

export const MESS_ERROR_VN = {
  ROLE: 'Quyền không phù hợp',
  GENDER: 'Giới tính không phù hợp',
  EMAIL: 'Email không đúng định dạng, vd: abc@gmail.com',
  PHONE_NUMBER: 'Số điện thoại không đúng định dạng, vd: 0988777666',

  FIELD_NOT_EMPTY: (field: string) => `${field} không được để trống`,

  MIN_LENGTH: ({ field, length }: { field: string; length: number }) =>
    `${field} phải có độ dài ít nhất ${length} kí tự`,

  MAX_LENGTH: ({ field, length }: { field: string; length: number }) =>
    `${field} phải có độ dài tối đa ${length} kí tự`,

  MIN_VALUE: ({ field, val }: { field: string; val: number }) =>
    `${field} phải lớn hơn ${val}`,

  MAX_VALUE: ({ field, val }: { field: string; val: number }) =>
    `${field} phải bé hơn ${val}`,
};
