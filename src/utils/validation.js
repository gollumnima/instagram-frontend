const usernameCheck = id => {
  if (/^[0-9a-z]+$/.test(id)) return true;
};

const passwordCheck = pw => {
  if (
    /(?=.*\d{1,50})(?=.*[~`!@#$%\^&*()-+=]{1,50})(?=.*[a-zA-Z]{2,50}).{8,50}$/.test(
      pw
    )
  )
    return true;
};

console.log(usernameCheck("12"));
