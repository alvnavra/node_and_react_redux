const re = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

export default (emails) => {

  const invalidEmails = emails.split(",").map(email => email.trim()).filter(email => re.test(email)===false)

  console.log(invalidEmails.length);
  if (invalidEmails.length > 0)
  {
      return (`These eMails are invalid ${invalidEmails}`)
  }

  return



}
