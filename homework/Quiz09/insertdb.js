export const insertdb = async function (phone) {
  const tokenCollection = new phoneToken({
    token,
    phone,
    isAuth: false,
  });
  const findPhone = await phoneToken.find({});
  const findMyPhone = await phoneToken.findOne({ phone });
  if (findPhone.length === 0 || !findMyPhone) {
    await tokenCollection.save();
  } else if (findPhone.length !== 0 && findMyPhone) {
    for (let i = 0; i < findPhone.length; i++) {
      await phoneToken.updateOne({ phone }, { token });
    }
  }
};
