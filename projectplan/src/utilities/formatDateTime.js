// const Date_Formater = new Intl.DateTimeFormat(undefined, {
//   currency: "USD",
//   style: "currency",
// })

export const DateType = {
  PushAlert: "PushAlert",
  Logout: "logout",
  LoggedOut: "logged-out",
};

// @e :date
// @t :type

export function formatDateTime(e, t) {
  //console.log(e, t);

  switch (t) {
    case DateType.PushAlert:
      return e.toLocaleString();
    default:
      return e.toLocaleString();
  }
}
