

export const verifyLogin = (body,data) => {
  let user = data.filter(item => body.username === item.username && body.password === item.password)

  if(!user){
    return [null,{
      message : 'Account doesn\'t exist!',
      success : false
    }]
  }
  return [ {
    data : user,
    success : true
  }, null ]
}